import socketClient from "socket.io-client";
import store from "../../store/store";
import * as userActions from "../../store/actions/userActions";
import * as videoActions from "../../store/actions/videoActions";
import { connectToNewUser, deleteVideoStream } from "./groupCallHandler";

const SERVER = "/";

const preOfferAnswers = {
  ANOTHER_CALL: "ANOTHER_CALL",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
};

let recieverSocketId;
let peerConnection;
let screenSharingStream;
let videoTrack;

export let socket;

export const connectWithWebSocket = (user) => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    connectNewUser(user);
  });

  socket.on("pre-offer", (data) => {
    handlePreOffer(data);
  });

  socket.on("pre-offer-answer", (data) => {
    handlePreofferAnswer(data);
  });

  socket.on("web-rtc-offer", (data) => {
    handleWebRTCOffer(data);
  });

  socket.on("web-rtc-answer", (data) => {
    handleWebRTCAnswer(data);
  });

  socket.on("web-rtc-candidate", (data) => {
    handleWebRTCCandidate(data);
  });

  socket.on("user-ended-call", () => {
    resetCall();
  });

  socket.on("team-meeting-request", (data) => {
    connectToNewUser(data);
  });

  socket.on("team-meeting-user-left", (data) => {
    deleteVideoStream(data);
  });
  socket.on("team-meeting-started", (data) => {
    addActiveTeam(data);
  });
  socket.on("team-meeting-finished", (data) => {
    removeActiveTeam(data);
  });
  socket.on("new-notification", (data) => {
    createNotification(data);
  });
  socket.on("group-message-recieved", (data) => {
    handleGroupMessage(data);
  });
  socket.on("direct-message-recieved", (data) => {
    handleDirectMessage(data);
  });
};

//Creating Peer connection
const createPeerConnection = () => {
  // New RTC peer connection

  const turnServers = getTurnServers();
  // console.log(turnServers);
  const configuration = {
    iceServers: [
      ...turnServers,
      { urls: "stun:stun.l.google.com:13902" },
      { urls: "stun:stun.12connect.com:3478" },
      { urls: "stun:stun.12voip.com:3478" },
      { urls: "stun:stun.lund1.de:3478" },
      { urls: "stun:stun2.l.google.com:13902" },
      { urls: "stun:stun3.l.google.com:13902" },
      { urls: "stun:stun4.l.google.com:13902" },
    ],
    iceTransportPolicy: "relay",
  };

  peerConnection = new RTCPeerConnection(configuration);

  const localStream = store.getState().Video.localStream;

  for (const track of localStream.getTracks()) {
    peerConnection.addTrack(track, localStream);
  }

  peerConnection.ontrack = ({ streams: [stream] }) => {
    store.dispatch(videoActions.setRemoteStream(stream));
  };

  peerConnection.onicecandidate = (event) => {
    // console.log("geeting candidates from stun server");
    if (event.candidate) {
      const candidateData = {
        candidate: event.candidate,
        recieverSocketId: recieverSocketId,
      };
      socket.emit("web-rtc-candidate", candidateData);
    }
  };

  // peerConnection.onconnectionstatechange = (event) => {
  //   if (peerConnection.connectionState === "connected") {
  //     //console.log("succesfully connected with other peer");
  //   }
  //   //console.log(peerConnection.connectionState);
  // };
};

// Registering new User
const connectNewUser = (user) => {
  //Storing current user data in redux store
  store.dispatch(userActions.setLoggedUser(user));

  //Emitting event to server
  socket.emit("new-user-connected", {
    username: user.name,
    email: user.email,
    image: user.image,
    socketId: socket.id,
  });
};

//EXTRACTING LOCALE STREAM FROM USER
export const getLocaleStream = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { width: 620, height: 520 }, audio: true })
    .then((stream) => {
      store.dispatch(videoActions.setLocalStream(stream));
      createPeerConnection();
    })
    .catch((err) => {
      console.log(err);
    });
};

//STOP LOCALE STREAM FROM USER
export const stopLocaleStream = () => {
  let stream = store.getState().Video.localStream;
  // //console.log(stream);
  if (stream) {
    stream.getTracks().forEach(function (track) {
      track.stop();
    });

    store.dispatch(videoActions.setLocalStream(stream));
  }
};

//DIRECT CALL TO OTHER USER
export const callOtherUser = (recieverDetails) => {
  store.dispatch(videoActions.setCallState(videoActions.videoStates.ONGOING));
  store.dispatch(videoActions.setRecieverUsername(recieverDetails.name));
  store.dispatch(videoActions.setDirectCallModal(true));
  const user = store.getState().User.user;
  const data = {
    reciever: recieverDetails,
    caller: {
      username: user.name,
    },
  };
  // SENDING PREOFFER TO RECIEVER
  socket.emit("pre-offer", data);
};

//HANDLING PRE-OFFER BY THE RECIEVER
const handlePreOffer = (data) => {
  // data will contain the caller details

  // const localStream = store.getState().Video.localStream;
  const callState = store.getState().Video.callState;

  let enableCall = callState !== videoActions.videoStates.ONGOING;

  if (enableCall === true) {
    recieverSocketId = data.callerSocketId;
    store.dispatch(videoActions.setConnectedUserId(recieverSocketId));
    store.dispatch(videoActions.setCallerUsername(data.callerUsername));
    store.dispatch(
      videoActions.setCallState(videoActions.videoStates.REQUESTED)
    );
  } else {
    // If call not possible reciever sends preoffer answer to sender
    const callNotPossible = {
      callerSocketId: data.callerSocketId,
      answer: preOfferAnswers.ANOTHER_CALL,
    };

    socket.emit("pre-offer-answer", callNotPossible);
  }
};

// HANDLING PREOFFER ANSWER BY SENDER
const handlePreofferAnswer = (data) => {
  const calleeName = store.getState().Video.recieverUsername;

  let rejectedReason = "";
  switch (data.answer) {
    case preOfferAnswers.ANOTHER_CALL: {
      rejectedReason = `${calleeName} is on another call`;
      break;
    }
    case preOfferAnswers.REJECTED: {
      rejectedReason = `${calleeName} rejected the call`;
      break;
    }
    case preOfferAnswers.NOT_AVAILABLE: {
      rejectedReason = `${calleeName} is not available to take the call`;
      break;
    }
    default: {
      recieverSocketId = data.reciverSocketId;
      store.dispatch(videoActions.setConnectedUserId(recieverSocketId));
      sendOffer();
    }
  }

  if (rejectedReason.length > 0) {
    let callRejected = {
      rejected: true,
      reason: rejectedReason,
    };
    store.dispatch(videoActions.setRejectedReason(callRejected));
    resetCallData();
  }
  store.dispatch(videoActions.setDirectCallModal(false));
};

//SENDING OFFER TO RECEIVER
const sendOffer = async () => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  const data = {
    reciverSocketId: recieverSocketId,
    offer: offer,
  };

  socket.emit("web-rtc-offer", data);
};

const sendWebRTCCandidate = (data) => {
  socket.emit("web-rtc-candidate", data);
};

export const acceptCall = () => {
  const acceptedData = {
    callerSocketId: recieverSocketId,
    answer: preOfferAnswers.ACCEPTED,
  };

  store.dispatch(videoActions.setCallState(videoActions.videoStates.ONGOING));

  socket.emit("pre-offer-answer", acceptedData);
};

export const rejectCall = () => {
  const rejectedData = {
    callerSocketId: recieverSocketId,
    answer: preOfferAnswers.REJECTED,
  };
  socket.emit("pre-offer-answer", rejectedData);

  resetCallData();
};

export const resetCallData = () => {
  recieverSocketId = null;
  store.dispatch(videoActions.setCallState(videoActions.videoStates.AVAILABLE));
};

//Handling WebRTC offer by the callee
const handleWebRTCOffer = async (data) => {
  // This is done by the callee.
  await peerConnection.setRemoteDescription(data.offer);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  const webRTCdata = {
    callerSocketId: recieverSocketId,
    answer: answer,
  };

  socket.emit("web-rtc-answer", webRTCdata);
};

const handleWebRTCAnswer = async (data) => {
  await peerConnection.setRemoteDescription(data.answer);
};

const handleWebRTCCandidate = async (data) => {
  try {
    //console.log("adding ice candidates");
    await peerConnection.addIceCandidate(data.candidate);
  } catch (err) {
    console.log(err);
  }
};

export const closeCall = () => {
  //console.log(store.getState().Video.callState);
  const presentState = store.getState().Video.callState;
  if (presentState !== videoActions.videoStates.REQUESTED) {
    socket.emit("user-ended-call", {
      recieverSocketId: recieverSocketId,
    });
    resetCall();
  } else {
    resetCallData();
    store.dispatch(videoActions.resetCallState());
  }
};

const resetCall = () => {
  peerConnection.close();
  peerConnection = null;
  createPeerConnection();

  resetCallData();

  const localStream = store.getState().Video.localStream;
  localStream.getVideoTracks()[0].enabled = true;
  localStream.getAudioTracks()[0].enabled = true;

  const screenSharingActive = store.getState().Video.screenSharing;

  if (screenSharingActive) {
    screenSharingStream.getTracks().forEach((track) => {
      track.stop();
    });
  }

  store.dispatch(videoActions.resetCallState());
};

// Disconnecting with socket
export const disconnectSocket = () => {
  socket.emit("disconnect");
};

// Creating socket connection for each team
export const connectWithTeam = (teamId) => {
  const data = {
    teamId: teamId,
  };
  socket.emit("team", data);
};

//Screen Sharing
export const switchForScreenSharingStream = () => {
  if (!store.getState().Video.screenSharing) {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
      })
      .then((stream) => {
        screenSharingStream = stream;
        videoTrack = stream.getVideoTracks()[0];
        //console.log(peerConnection.getSenders());
        let sender = peerConnection
          .getSenders()
          .find((s) => s.track.kind === videoTrack.kind);
        sender.replaceTrack(videoTrack);
        //console.log(sender);
        store.dispatch(videoActions.setscreenSharing(true));
      })
      .catch((err) => console.log(err));
  } else {
    const localStream = store.getState().Video.localStream;
    const senders = peerConnection.getSenders();
    const sender = senders.find(
      (sender) => sender.track.kind === localStream.getVideoTracks()[0].kind
    );
    sender.replaceTrack(localStream.getVideoTracks()[0]);
    store.dispatch(videoActions.setscreenSharing(false));
    screenSharingStream.getTracks().forEach((track) => track.stop());
  }
};

//Handling teams

const removeActiveTeam = (data) => {
  let activeTeams = store.getState().Video.activeTeams;
  activeTeams = activeTeams.filter(
    (activeTeam) => activeTeam.roomId !== data.roomId
  );

  store.dispatch(videoActions.setTeamToActive(activeTeams));
};

const addActiveTeam = (activeTeam) => {
  // Adding team in which the meeting is started
  let activeTeams = store.getState().Video.activeTeams;
  if (
    !activeTeams.some(
      (active) =>
        active.roomId === activeTeam.roomId &&
        active.teamId === activeTeam.teamId
    )
  ) {
    activeTeams = [...activeTeams, activeTeam];
  }
  store.dispatch(videoActions.setTeamToActive(activeTeams));
};

//Group calls
export const registerGroupMeeting = (data) => {
  socket.emit("create-meeting", data);
};

export const joinGroupCall = (data) => {
  socket.emit("join-meeting", data);
};

export const leaveGroupCall = (data) => {
  socket.emit("leave-meeting", data);
};

//Handling Team Messages

// Sending message in the team
export const sendGroupMessage = (chatDetails) => {
  socket.emit("group-message", chatDetails);
};

// Reciveing group messages
const handleGroupMessage = (data) => {
  let groupMessages = store.getState().Video.groupMessages;
  groupMessages = [...groupMessages, data];
  store.dispatch(videoActions.setGroupMessage(groupMessages));
};

// Creating new Notification
const createNotification = (data) => {
  store.dispatch(videoActions.setTeamMeetingData(data));
  store.dispatch(userActions.setNotification(false));
};

//Direct messages

// Send direct message in one - one call
export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

//Handling direct messages
const handleDirectMessage = (data) => {
  let directMessages = store.getState().Video.directMessages;
  directMessages = [...directMessages, data];
  store.dispatch(videoActions.setDirectMessage(directMessages));
};

let turnServers = [];

export const getTurnServers = () => {
  return turnServers;
};

export const setTurnServers = (servers) => {
  turnServers = servers;
};
