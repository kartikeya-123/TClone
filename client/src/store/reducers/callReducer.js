import * as callActions from "../actions/callActions";

const initState = {
  localStream: null,
  callState: callActions.callStates.CALL_AVAILABLE,
  callingDialogVisible: false,
  callerUsername: "",
  calleeUsername: "",
  callRejected: {
    rejected: false,
    reason: "",
  },
  remoteStream: null,
  localCameraEnabled: true,
  localMicrophoneEnabled: true,
  screenSharingActive: false,
  groupCallActive: false,
  groupCallStreams: [],
  activeTeams: [],
  groupMessages: [],
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
        callingDialogVisible: action.visible,
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
    case "ENABLE_MICROPHONE":
      return {
        ...state,
        localCameraEnabled: action.enabled,
      };
    case "ENABLE_CAMERA":
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
        callingDialogVisible: false,
        calleeUsername: "",
      };
    case "RESET_GROUP_DATA":
      return {
        ...state,
        groupCallActive: false,
        groupCallStreams: [],
        callState: callActions.callStates.CALL_AVAILABLE,
        localMicrophoneEnabled: true,
        localCameraEnabled: true,
        groupMessages: [],
      };
    case "SET_START_GROUP_CALL":
      return {
        ...state,
        groupCallActive: action.active,
      };
    case "SET_GROUP_STEAMS":
      return {
        ...state,
        groupCallStreams: action.groupStreams,
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
    default:
      return state;
  }
};
export default reducer;
