import {
  registerGroupMeeting,
  joinGroupCall,
  leaveGroupCall,
  stopLocaleStream,
} from "./clientSocket";
import store from "../../store/store";
import * as callActions from "../../store/actions/videoActions";

let myPeer;
let myPeerId;
let currentPeer;
let screenShare;
let videoTrack;

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
  });

  myPeer.on("call", (call) => {
    const localStream = store.getState().Video.localStream;
    call.answer(localStream);

    call.on("stream", (incomingStream) => {
      const groupStreams = store.getState().Video.teamMeetingStreams;
      const stream = groupStreams.find(
        (stream) => stream.id === incomingStream.id
      );
      currentPeer = call.peerConnection;

      if (stream == null) {
        insertVideoStream(incomingStream);
      }
    });
  });
};

export const createGroupMeeting = (teamId, teamName, meetingOwner, ownerId) => {
  const groupHost = store.getState().User.user;
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
  const user = store.getState().User.user;
  const userData = {
    roomId: roomId,
    peerId: myPeerId,
    user: user,
  };
  joinGroupCall(userData);

  store.dispatch(
    callActions.setCallState(callActions.callStates.CALL_IN_PROGRESS)
  );
  store.dispatch(callActions.setisTeamMeetingPresent(true));
};

export const connectToNewUser = (data) => {
  const localStream = store.getState().Video.localStream;
  const call = myPeer.call(data.peerId, localStream);
  call.on("stream", (incomingStream) => {
    const streams = store.getState().Video.teamMeetingStreams;
    const stream = streams.find((stream) => stream.id === incomingStream.id);
    currentPeer = call.peerConnection;
    if (!stream) {
      insertVideoStream(incomingStream);
    }
  });
};

export const leaveMeeting = (roomId) => {
  const localStream = store.getState().Video.localStream;
  const streamId = localStream.id;

  const leaveData = {
    roomId: roomId,
    streamId: streamId,
  };

  leaveGroupCall(leaveData);

  //Clearing meeting data and re-initialization
  store.dispatch(callActions.clearGroupCallData());
  myPeer.destroy();
  connectWithPeer();
  stopLocaleStream();
};

const insertVideoStream = (newStream) => {
  const presentStreams = store.getState().Video.teamMeetingStreams;
  const updatedStreams = [...presentStreams, newStream];
  store.dispatch(callActions.setGroupStreams(updatedStreams));
};

export const deleteVideoStream = (data) => {
  let presentStreams = store.getState().Video.teamMeetingStreams;
  presentStreams = presentStreams.filter(
    (stream) => stream.id !== data.streamId
  );
  store.dispatch(callActions.setGroupStreams(presentStreams));
};

export const addGroupShareScreen = () => {
  if (!store.getState().Video.screenSharingActive) {
    navigator.mediaDevices
      .getDisplayMedia({
        video: true,
      })
      .then((stream) => {
        screenShare = stream;
        videoTrack = stream.getVideoTracks()[0];
        console.log(currentPeer.getSenders());
        let sender = currentPeer
          .getSenders()
          .find((s) => s.track.kind === videoTrack.kind);
        sender.replaceTrack(videoTrack);
        store.dispatch(callActions.setScreenSharingActive(true));
      })
      .catch((err) => console.log(err));
  } else {
    const localStream = store.getState().Video.localStream;
    const senders = currentPeer.getSenders();
    const sender = senders.find(
      (sender) => sender.track.kind === localStream.getVideoTracks()[0].kind
    );
    sender.replaceTrack(localStream.getVideoTracks()[0]);
    store.dispatch(callActions.setScreenSharingActive(false));
    screenShare.getTracks().forEach((track) => track.stop());
  }
};
