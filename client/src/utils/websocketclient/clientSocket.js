import socketClient from "socket.io-client";
import store from "../../store/store";
import * as dashboardActions from "../../store/actions/dashboardActions";
import * as callActions from "../../store/actions/callActions";
import { connectToNewUser, removeVideoStream } from "./groupCallHandler";

const SERVER = "/";

const broadcastEventTypes = {
  ACTIVE_USERS: "ACTIVE_USERS",
  GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS",
};

const preOfferAnswers = {
  CALL_ACCEPTED: "CALL_ACCEPTED",
  CALL_REJECTED: "CALL_REJECTED",
  CALL_NOT_AVAILABLE: "CALL_NOT_AVAILABLE",
};

export let socket;
let mediaStream;
export const webSocketConnection = (user) => {
  socket = socketClient(SERVER);

  socket.on("connection", () => {
    console.log("succesfully connected with wss server");
    registerNewUser(user);
    console.log(socket.id);
  });

  socket.on("pre-offer", (data) => {
    handlePreOffer(data);
  });

  socket.on("pre-offer-answer", (data) => {
    handlePreOfferAnswer(data);
  });

  socket.on("webRTC-offer", (data) => {
    handleWebRTCOffer(data);
  });

  socket.on("webRTC-answer", (data) => {
    console.log(data);
    handleWebRTCAnswer(data);
  });

  socket.on("webRTC-candidate", (data) => {
    handleWebRTCCandidate(data);
  });

  socket.on("user-hanged-up", () => {
    resetCallDataAfterHangUp();
  });

  socket.on("roomId-for-group-call", (data) => {
    handleRoomId(data);
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
};

const handleGroupMessage = (data) => {
  let groupMessages = store.getState().call.groupMessages;
  groupMessages = [...groupMessages, data];
  store.dispatch(callActions.setGroupMessage(groupMessages));
};

const createNotification = () => {
  store.dispatch(dashboardActions.setNotification(false));
};
const removeActiveTeam = (data) => {
  let activeTeams = store.getState().call.activeTeams;
  activeTeams = activeTeams.filter(
    (activeTeam) => activeTeam.roomId !== data.roomId
  );
  console.log(activeTeams);
  store.dispatch(callActions.setTeamToActive(activeTeams));
};

const addActiveTeam = (activeTeam) => {
  let activeTeams = store.getState().call.activeTeams;
  if (
    !activeTeams.some(
      (active) =>
        active.roomId === activeTeam.roomId &&
        active.teamId === activeTeam.teamId
    )
  ) {
    activeTeams = [...activeTeams, activeTeam];
  }
  store.dispatch(callActions.setTeamToActive(activeTeams));
};
//Group calls
export const registerGroupMeeting = (data) => {
  socket.emit("create-meeting", data);
};

const handleRoomId = (data) => {
  alert(data.roomId);
};

export const joinGroupCall = (data) => {
  socket.emit("join-meeting", data);
};

export const leaveGroupCall = (data) => {
  socket.emit("leave-meeting", data);
};

const registerNewUser = (user) => {
  store.dispatch(dashboardActions.setUsername(user.name));
  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_AVAILABLE)
  );
  store.dispatch(dashboardActions.setLoggedUser(user));
  socket.emit("register-new-user", {
    username: user.name,
    email: user.email,
    image: user.image,
    socketId: socket.id,
  });
};

export const getLocaleStream = () => {
  console.log("Calling");
  navigator.mediaDevices
    .getUserMedia({ video: { width: 620, height: 520 }, audio: true })
    .then((stream) => {
      mediaStream = stream;
      store.dispatch(callActions.setLocalStream(stream));
      createPeerConnection();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const stopLocaleStream = () => {
  let stream = store.getState().call.localStream;
  if (stream) {
    console.log("Stopping");
    stream.getVideoTracks().forEach(function (track) {
      track.stop();
    });
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });
    store.dispatch(callActions.setLocalStream(stream));
  }
};

let connectedUserSocketId;
let peerConnection;
const configuration = {
  iceServers: [
    { urls: "stun:stun.l.google.com:13902" },
    { url: "stun:stun.12connect.com:3478" },
    { url: "stun:stun.12voip.com:3478" },
  ],
};
export const callOtherUser = (calleeDetails) => {
  // connectedUserSocketId = calleeDetails.socketId;
  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_IN_PROGRESS)
  );
  store.dispatch(callActions.setCalleeUsername(calleeDetails.name));
  store.dispatch(callActions.setCallingDialogVisible(true));
  const user = store.getState().dashboard.user;
  // console.log(user);
  sendPreOffer({
    callee: calleeDetails,
    caller: {
      username: user.name,
    },
  });
};

const createPeerConnection = () => {
  peerConnection = new RTCPeerConnection(configuration);

  const localStream = store.getState().call.localStream;

  for (const track of localStream.getTracks()) {
    peerConnection.addTrack(track, localStream);
  }

  peerConnection.ontrack = ({ streams: [stream] }) => {
    store.dispatch(callActions.setRemoteStream(stream));
  };

  peerConnection.onicecandidate = (event) => {
    console.log("geeting candidates from stun server");
    if (event.candidate) {
      sendWebRTCCandidate({
        candidate: event.candidate,
        connectedUserSocketId: connectedUserSocketId,
      });
    }
  };

  peerConnection.onconnectionstatechange = (event) => {
    console.log(event);
    if (peerConnection.connectionState === "connected") {
      console.log("succesfully connected with other peer");
    }
    console.log(peerConnection.connectionState);
  };
};

const sendWebRTCCandidate = (data) => {
  socket.emit("webRTC-candidate", data);
};
const sendOffer = async () => {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  const data = {
    calleeSocketId: connectedUserSocketId,
    offer: offer,
  };

  sendWebRTCOffer(data);
};

const sendWebRTCOffer = (data) => {
  socket.emit("webRTC-offer", data);
};

const sendPreOffer = (data) => {
  // console.log(data.caller);
  socket.emit("pre-offer", data);
};

const handlePreOffer = (data) => {
  // data will contain the caller details
  if (checkIfCallAvailble()) {
    connectedUserSocketId = data.callerSocketId;
    store.dispatch(callActions.setCallerUsername(data.callerUsername));
    store.dispatch(
      callActions.setCallState(callActions.callStates.CALL_REQUESTED)
    );
  } else {
    // The callee will send this data to the caller
    sendPreOfferAnswer({
      callerSocketId: data.callerSocketId,
      answer: preOfferAnswers.CALL_NOT_AVAILABLE,
    });
  }
};

const checkIfCallAvailble = () => {
  if (
    store.getState().call.localStream != null &&
    store.getState().call.callState !== callActions.callStates.CALL_AVAILABLE
  ) {
    return false;
  } else return true;
};

export const acceptIncomingCallRequest = () => {
  sendPreOfferAnswer({
    callerSocketId: connectedUserSocketId,
    answer: preOfferAnswers.CALL_ACCEPTED,
  });

  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_IN_PROGRESS)
  );
  // store.dispatch(callActions.setCallingDialogVisible(false));
};

export const rejectIncomingCallRequest = () => {
  sendPreOfferAnswer({
    callerSocketId: connectedUserSocketId,
    answer: preOfferAnswers.CALL_REJECTED,
  });
  resetCallData();
};
export const resetCallData = () => {
  connectedUserSocketId = null;
  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_AVAILABLE)
  );
};

const sendPreOfferAnswer = (data) => {
  //send callee details
  // This will be sent by the callee
  socket.emit("pre-offer-answer", data);
};

const handlePreOfferAnswer = (data) => {
  // This will be recived by the caller
  if (data.answer !== preOfferAnswers.CALL_ACCEPTED) {
    let rejectedMessage;
    if (data.answer === preOfferAnswers.CALL_NOT_AVAILABLE) {
      rejectedMessage = "User is not available for the call";
    } else if (data.answer === preOfferAnswers.CALL_REJECTED) {
      rejectedMessage = "User rejected the call";
    } else if (data.answer === "User is not online") {
      rejectedMessage = "User is not online";
    }
    let callRejected = {
      rejected: true,
      reason: rejectedMessage,
    };

    store.dispatch(callActions.setRejectedReason(callRejected));

    resetCallData();
  } else {
    connectedUserSocketId = data.calleeSocketId;

    sendOffer();
  }
  store.dispatch(callActions.setCallingDialogVisible(false));
};

const handleWebRTCOffer = async (data) => {
  // This is done by the callee.
  await peerConnection.setRemoteDescription(data.offer);
  const answer = await peerConnection.createAnswer();
  await peerConnection.setLocalDescription(answer);

  sendWebRTCAnswer({
    callerSocketId: connectedUserSocketId,
    answer: answer,
  });
};

const sendWebRTCAnswer = (data) => {
  socket.emit("webRTC-answer", data);
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
  console.log(store.getState().call.callState);
  if (
    store.getState().call.callState !== callActions.callStates.CALL_REQUESTED
  ) {
    socket.emit("user-hanged-up", {
      connectedUserSocketId: connectedUserSocketId,
    });
    resetCallDataAfterHangUp();
  } else {
    resetCallData();
    store.dispatch(callActions.resetCallDataState());
  }
};

const resetCallDataAfterHangUp = () => {
  peerConnection.close();
  peerConnection = null;
  createPeerConnection();

  resetCallData();

  const localStream = store.getState().call.localStream;
  localStream.getVideoTracks()[0].enabled = true;
  localStream.getAudioTracks()[0].enabled = true;

  // if (store.getState().call.screenSharingActive) {
  //   screenSharingStream.getTracks().forEach(track => {
  //     track.stop();
  //   });
  // }

  store.dispatch(callActions.resetCallDataState());
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
