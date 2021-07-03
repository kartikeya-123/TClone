import {
  registerGroupMeeting,
  joinGroupCall,
  leaveGroupCall,
  stopLocaleStream,
} from "./clientSocket";
import store from "../../store/store";
import * as callActions from "../../store/actions/callActions";

let myPeer;
let myPeerId;
let groupCallRoomId;
let currentPeer;
export const connectWithPeer = () => {
  //Creating a new Peer
  console.log("connecting with peer");

  myPeer = new window.Peer(undefined, {
    path: "/api/v1/peerjs",
    host: "teamclone-web.herokuapp.com",
    port: 443,
    secure: true,
  });

  myPeer.on("open", (id) => {
    console.log("succesfully connected with peer server");
    myPeerId = id;
    console.log(id);
  });
  myPeer.on("call", (call) => {
    call.answer(store.getState().call.localStream);
    call.on("stream", (incomingStream) => {
      const streams = store.getState().call.groupCallStreams;
      const stream = streams.find((stream) => stream.id === incomingStream.id);
      currentPeer = call.peerConnection;
      console.log(currentPeer);
      if (!stream) {
        addVideoStream(incomingStream);
      }
    });
  });
};

export const createGroupMeeting = (teamId, teamName, meetingOwner, ownerId) => {
  const groupHost = store.getState().dashboard.user;
  const groupHostDetails = {
    email: groupHost.email,
    name: groupHost.name,
    peerId: myPeerId,
    teamId: teamId,
    teamName: teamName,
    owner: meetingOwner,
    ownerId: ownerId,
  };

  registerGroupMeeting(groupHostDetails);

  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_IN_PROGRESS)
  );
};

export const joinGroupMeeting = (roomId) => {
  const user = store.getState().dashboard.user;
  groupCallRoomId = roomId;

  joinGroupCall({
    roomId: roomId,
    peerId: myPeerId,
    user: user,
  });
  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_IN_PROGRESS)
  );
  store.dispatch(callActions.setGroupCallActive(true));
};

export const connectToNewUser = (data) => {
  const localStream = store.getState().call.localStream;

  const call = myPeer.call(data.peerId, localStream);

  call.on("stream", (incomingStream) => {
    const streams = store.getState().call.groupCallStreams;
    const stream = streams.find((stream) => stream.id === incomingStream.id);
    currentPeer = call.peerConnection;
    if (!stream) {
      addVideoStream(incomingStream);
    }
  });
};

export const leaveMeeting = (roomId) => {
  const streamId = store.getState().call.localStream.id;
  const leaveData = {
    roomId: roomId,
    streamId: streamId,
  };

  leaveGroupCall(leaveData);
  clearGroupData();
};

export const removeVideoStream = (data) => {
  let groupCallStreams = store.getState().call.groupCallStreams;
  groupCallStreams = groupCallStreams.filter(
    (stream) => stream.id !== data.streamId
  );

  store.dispatch(callActions.setGroupStreams(groupCallStreams));
};
export const clearGroupData = () => {
  store.dispatch(callActions.clearGroupCallData());
  myPeer.destroy();
  connectWithPeer();
  stopLocaleStream();
};

const addVideoStream = (incomingStream) => {
  const groupCallStreams = [
    ...store.getState().call.groupCallStreams,
    incomingStream,
  ];

  store.dispatch(callActions.setGroupStreams(groupCallStreams));
};

let screenSharingStream;
let videoTrack;
export const addGroupShareScreen = () => {
  if (!store.getState().call.screenSharingActive) {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
      })
      .then((stream) => {
        videoTrack = stream.getVideoTracks()[0];
        console.log(currentPeer.getSenders());
        let sender = currentPeer
          .getSenders()
          .find((s) => s.track.kind === videoTrack.kind);
        sender.replaceTrack(videoTrack);
        console.log(sender);
        store.dispatch(callActions.setScreenSharingActive(true));
      })
      .catch((err) => console.log(err));
  } else {
    const localStream = store.getState().call.localStream;
    const senders = currentPeer.getSenders();
    const sender = senders.find(
      (sender) => sender.track.kind === localStream.getVideoTracks()[0].kind
    );
    sender.replaceTrack(localStream.getVideoTracks()[0]);
    store.dispatch(callActions.setScreenSharingActive(false));
    videoTrack.getTracks().forEach((track) => track.stop());
  }
};
