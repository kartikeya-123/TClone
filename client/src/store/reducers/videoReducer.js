import * as callActions from "../actions/videoActions";

const initState = {
  localStream: null,
  callState: callActions.callStates.CALL_AVAILABLE,
  callerUsername: "",
  calleeUsername: "",
  directCallModal: false,
  callRejected: {
    rejected: false,
    reason: "",
  },
  remoteStream: null,
  localCameraEnabled: true,
  localMicrophoneEnabled: true,
  screenSharingActive: false,
  isTeamMeetingPresent: false,
  teamMeetingStreams: [],
  activeTeams: [],
  groupMessages: [],
  directMessages: [],
  connectedUserId: "",
  imageData: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LOCALE_STREAM":
      return {
        ...state,
        localStream: action.localStream,
      };
    case "SET_VIDEO_STATE":
      return {
        ...state,
        callState: action.callState,
      };
    case "SET_CALLING_DIALOG":
      return {
        ...state,
        directCallModal: action.show,
      };
    case "SET_CALLER_DETAILS":
      return {
        ...state,
        callerUsername: action.callerUsername,
      };
    case "SET_CALLEE_DETAILS":
      return {
        ...state,
        calleeUsername: action.calleeUsername,
      };
    case "SET_CALL_REJECTED":
      return {
        ...state,
        callRejected: action.callRejected,
      };
    case "SET_USER_REMOTE_STREAM":
      return {
        ...state,
        remoteStream: action.remoteStream,
      };
    case "ENABLE_CAMERA":
      return {
        ...state,
        localCameraEnabled: action.enabled,
      };
    case "ENABLE_MICROPHONE":
      return {
        ...state,
        localMicrophoneEnabled: action.enabled,
      };
    case "SET_SCREEN_SHARE_ACTIVE":
      return {
        ...state,
        screenSharingActive: action.active,
      };
    case "RESET_CALL_DATA":
      return {
        ...state,
        remoteStream: null,
        screenSharingActive: false,
        callerUsername: "",
        localMicrophoneEnabled: true,
        localCameraEnabled: true,
        directCallModal: false,
        calleeUsername: "",
        directMessages: [],
        connectedUserId: "",
      };
    case "RESET_GROUP_DATA":
      return {
        ...state,
        isTeamMeetingPresent: false,
        teamMeetingStreams: [],
        callState: callActions.callStates.CALL_AVAILABLE,
        localMicrophoneEnabled: true,
        localCameraEnabled: true,
        groupMessages: [],
        imageData: null,
      };
    case "SET_START_GROUP_CALL":
      return {
        ...state,
        isTeamMeetingPresent: action.active,
      };
    case "SET_GROUP_STEAMS":
      return {
        ...state,
        teamMeetingStreams: action.groupStreams,
      };
    case "SET_ACTIVE_TEAM":
      return {
        ...state,
        activeTeams: action.activeTeams,
      };
    case "SET_GROUP_MESSAGE":
      return {
        ...state,
        groupMessages: action.groupMessages,
      };
    case "SET_DIRECT_MESSAGE":
      return {
        ...state,
        directMessages: action.directMessages,
      };
    case "SET_USER_SOCKET_ID":
      return {
        ...state,
        connectedUserId: action.socketId,
      };
    case "SET_IMAGE_DATA":
      return {
        ...state,
        imageData: action.imageData,
      };
    default:
      return state;
  }
};
export default reducer;
