import socketClient from "socket.io-client";
import store from "../../store/store";
import * as userActions from "../../store/actions/userActions";
import * as videoActions from "../../store/actions/videoActions";
import { connectToNewUser, removeVideoStream } from "./groupCallHandler";

const SERVER = "/";

const preOfferAnswers = {
  ANOTHER_CALL: "ANOTHER_CALL",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  NOT_AVAILABLE: "NOT_AVAILABLE",
};

let recieverSocketId;
let peerConnection;
const configuration = {
  iceServers: [
    { urls: "stun:stun.l.google.com:13902" },
    { url: "stun:stun.12connect.com:3478" },
    { url: "stun:stun.12voip.com:3478" },
  ],
};

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

  socket.on("webRTC-offer", (data) => {
    handleWebRTCOffer(data);
  });

  socket.on("webRTC-answer", (data) => {
    handleWebRTCAnswer(data);
  });

  socket.on("webRTC-candidate", (data) => {
    handleWebRTCCandidate(data);
  });

  socket.on("user-hanged-up", () => {
    resetCallDataAfterHangUp();
  });

  socket.on("group-call-request", (data) => {
    connectToNewUser(data);
  });

  socket.on("group-call-user-left", (data) => {
    removeVideoStream(data);
  });
  socket.on("team-meeting-started", (data) => {
    addActiveTeam(data);
  });
  socket.on("team-meeting-finished", (data) => {
    removeActiveTeam(data);
  });
  socket.on("new-notification", () => {
    createNotification();
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
  peerConnection = new RTCPeerConnection(configuration);

  const localStream = store.getState().Video.localStream;

  for (const track of localStream.getTracks()) {
    peerConnection.addTrack(track, localStream);
  }

  peerConnection.ontrack = ({ streams: [stream] }) => {
    store.dispatch(videoActions.setRemoteStream(stream));
  };

  peerConnection.onicecandidate = (event) => {
    console.log("geeting candidates from stun server");
    if (event.candidate) {
      sendWebRTCCandidate({
        candidate: event.candidate,
        recieverSocketId: recieverSocketId,
      });
    }
  };

  peerConnection.onconnectionstatechange = (event) => {
    if (peerConnection.connectionState === "connected") {
      console.log("succesfully connected with other peer");
    }
    console.log(peerConnection.connectionState);
  };
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
  if (stream) {
    stream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });
    store.dispatch(videoActions.setLocalStream(stream));
  }
};

//DIRECT CALL TO OTHER USER
export const callOtherUser = (recieverDetails) => {
  store.dispatch(
    videoActions.setCallState(videoActions.callStates.CALL_IN_PROGRESS)
  );
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

  let enableCall = callState !== videoActions.callStates.CALL_IN_PROGRESS;

  if (enableCall === true) {
    recieverSocketId = data.callerSocketId;
    store.dispatch(videoActions.setConnectedUserId(recieverSocketId));
    store.dispatch(videoActions.setCallerUsername(data.callerUsername));
    store.dispatch(
      videoActions.setCallState(videoActions.callStates.CALL_REQUESTED)
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
  let rejectedReason = "";
  switch (data.answer) {
    case preOfferAnswers.ANOTHER_CALL: {
      rejectedReason = "User is on another call";
      break;
    }
    case preOfferAnswers.REJECTED: {
      rejectedReason = "User rejected the call";
      break;
    }
    case preOfferAnswers.NOT_AVAILABLE: {
      rejectedReason = "User is not available to take the call";
      break;
    }
    default: {
      recieverSocketId = data.calleeSocketId;
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
    calleeSocketId: recieverSocketId,
    offer: offer,
  };

  socket.emit("webRTC-offer", data);
};

const sendWebRTCCandidate = (data) => {
  socket.emit("webRTC-candidate", data);
};

export const acceptIncomingCallRequest = () => {
  const acceptedData = {
    callerSocketId: recieverSocketId,
    answer: preOfferAnswers.ACCEPTED,
  };

  store.dispatch(
    videoActions.setCallState(videoActions.callStates.CALL_IN_PROGRESS)
  );

  socket.emit("pre-offer-answer", acceptedData);
};

export const rejectIncomingCallRequest = () => {
  const rejectedData = {
    callerSocketId: recieverSocketId,
    answer: preOfferAnswers.REJECTED,
  };
  socket.emit("pre-offer-answer", rejectedData);

  resetCallData();
};

export const resetCallData = () => {
  recieverSocketId = null;
  store.dispatch(
    videoActions.setCallState(videoActions.callStates.CALL_AVAILABLE)
  );
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

  socket.emit("webRTC-answer", webRTCdata);
};

const handleWebRTCAnswer = async (data) => {
  await peerConnection.setRemoteDescription(data.answer);
};

const handleWebRTCCandidate = async (data) => {
  try {
    console.log("adding ice candidates");
    await peerConnection.addIceCandidate(data.candidate);
  } catch (err) {
    console.error(
      "error occured when trying to add received ice candidate",
      err
    );
  }
};

export const endCall = () => {
  console.log(store.getState().Video.callState);
  if (
    store.getState().Video.callState !== videoActions.callStates.CALL_REQUESTED
  ) {
    socket.emit("user-hanged-up", {
      recieverSocketId: recieverSocketId,
    });
    resetCallDataAfterHangUp();
  } else {
    resetCallData();
    store.dispatch(videoActions.resetCallDataState());
  }
};

const resetCallDataAfterHangUp = () => {
  peerConnection.close();
  peerConnection = null;
  createPeerConnection();

  resetCallData();

  const localStream = store.getState().Video.localStream;
  localStream.getVideoTracks()[0].enabled = true;
  localStream.getAudioTracks()[0].enabled = true;

  if (store.getState().Video.screenSharingActive) {
    screenSharingStream.getTracks().forEach((track) => {
      track.stop();
    });
  }

  store.dispatch(videoActions.resetCallDataState());
};

export const disconnectSocket = () => {
  socket.emit("disconnect");
};

export const connectWithTeam = (teamId) => {
  const data = {
    teamId: teamId,
  };
  socket.emit("team", data);
};

export const sendGroupMessage = (chatDetails) => {
  socket.emit("group-message", chatDetails);
};

let screenSharingStream;
let videoTrack;
export const switchForScreenSharingStream = () => {
  if (!store.getState().Video.screenSharingActive) {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
      })
      .then((stream) => {
        screenSharingStream = stream;
        videoTrack = stream.getVideoTracks()[0];
        console.log(peerConnection.getSenders());
        let sender = peerConnection
          .getSenders()
          .find((s) => s.track.kind === videoTrack.kind);
        sender.replaceTrack(videoTrack);
        console.log(sender);
        store.dispatch(videoActions.setScreenSharingActive(true));
      })
      .catch((err) => console.log(err));
  } else {
    const localStream = store.getState().Video.localStream;
    const senders = peerConnection.getSenders();
    const sender = senders.find(
      (sender) => sender.track.kind === localStream.getVideoTracks()[0].kind
    );
    sender.replaceTrack(localStream.getVideoTracks()[0]);
    store.dispatch(videoActions.setScreenSharingActive(false));
    screenSharingStream.getTracks().forEach((track) => track.stop());
  }
};

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

//Handling Group Messages
const handleGroupMessage = (data) => {
  let groupMessages = store.getState().Video.groupMessages;
  groupMessages = [...groupMessages, data];
  store.dispatch(videoActions.setGroupMessage(groupMessages));
};

const createNotification = () => {
  store.dispatch(userActions.setNotification(false));
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

const handleDirectMessage = (data) => {
  let directMessages = store.getState().Video.directMessages;
  directMessages = [...directMessages, data];
  store.dispatch(videoActions.setDirectMessage(directMessages));
};
