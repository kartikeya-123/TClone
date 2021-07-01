import * as callActions from "../actions/callActions";

const initState = {
  localStream: null,
  callState: callActions.callStates.CALL_UNAVAILABLE,
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
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream,
      };
    case callActions.CALL_SET_CALL_STATE:
      return {
        ...state,
        callState: action.callState,
      };
    case callActions.CALL_SET_CALLING_DIALOG_VISIBLE:
      return {
        ...state,
        callingDialogVisible: action.visible,
      };
    case callActions.CALL_SET_CALLER_USERNAME:
      return {
        ...state,
        callerUsername: action.callerUsername,
      };
    case callActions.CALL_SET_CALEE_USER:
      return {
        ...state,
        calleeUsername: action.calleeUsername,
      };
    case callActions.CALL_SET_CALL_REJECTED:
      return {
        ...state,
        callRejected: action.callRejected,
      };
    case callActions.CALL_SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStream: action.remoteStream,
      };
    case callActions.CALL_SET_LOCAL_CAMERA_ENABLED:
      return {
        ...state,
        localCameraEnabled: action.enabled,
      };
    case callActions.CALL_SET_LOCAL_MICROPHONE_ENABLED:
      return {
        ...state,
        localMicrophoneEnabled: action.enabled,
      };
    case callActions.CALL_SET_SCREEN_SHARING_ACTIVE:
      return {
        ...state,
        screenSharingActive: action.active,
      };
    case callActions.CALL_RESET_CALL_STATE:
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
    case callActions.CALL_CLEAR_GROUP_CALL_DATA:
      return {
        ...state,
        groupCallActive: false,
        groupCallStreams: [],
        callState: callActions.callStates.CALL_AVAILABLE,
        localMicrophoneEnabled: true,
        localCameraEnabled: true,
        groupMessages: [],
      };
    case callActions.CALL_SET_GROUP_CALL_ACTIVE:
      return {
        ...state,
        groupCallActive: action.active,
      };
    case callActions.CALL_SET_GROUP_STREAMS:
      return {
        ...state,
        groupCallStreams: action.groupStreams,
      };
    case callActions.CALL_SET_ACTIVE_TEAM:
      return {
        ...state,
        activeTeams: action.activeTeams,
      };
    case callActions.CALL_GROUP_MESSAGE:
      return {
        ...state,
        groupMessages: action.groupMessages,
      };
    default:
      return state;
  }
};
export default reducer;
