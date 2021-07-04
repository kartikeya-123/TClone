export const callStates = {
  CALL_UNAVAILABLE: "CALL_UNAVAILABLE",
  CALL_AVAILABLE: "CALL_AVAILABLE",
  CALL_REQUESTED: "CALL_REQUESTED",
  CALL_IN_PROGRESS: "CALL_IN_PROGRESS",
};

export const setLocalStream = (localStream) => {
  return {
    type: "SET_LOCALE_STREAM",
    localStream,
  };
};

export const setCallState = (callState) => {
  return {
    type: "SET_VIDEO_STATE",
    callState,
  };
};

export const setCallingDialogVisible = (visible) => {
  return {
    type: "SET_CALLING_DIALOG",
    visible,
  };
};

export const setCallerUsername = (callerUsername) => {
  return {
    type: "SET_CALLER_DETAILS",
    callerUsername,
  };
};

export const setCalleeUsername = (calleeUsername) => {
  return {
    type: "SET_CALLEE_DETAILS",
    calleeUsername,
  };
};

export const setRejectedReason = (callRejected) => {
  return {
    type: "SET_CALL_REJECTED",
    callRejected,
  };
};

export const setRemoteStream = (remoteStream) => {
  return {
    type: "SET_USER_REMOTE_STREAM",
    remoteStream,
  };
};

export const setLocalMicrophoneEnabled = (enabled) => {
  return {
    type: "ENABLE_MICROPHONE",
    enabled,
  };
};

export const setLocalCameraEnabled = (enabled) => {
  return {
    type: "ENABLE_CAMERA",
    enabled,
  };
};

export const resetCallDataState = () => {
  return {
    type: "RESET_CALL_DATA",
  };
};

export const setGroupCallActive = (active) => {
  return {
    type: "SET_START_GROUP_CALL",
    active: active,
  };
};

export const setGroupStreams = (groupStreams) => {
  return {
    type: "SET_GROUP_STEAMS",
    groupStreams: groupStreams,
  };
};

export const clearGroupCallData = () => {
  return {
    type: "RESET_GROUP_DATA",
  };
};

export const setTeamToActive = (activeTeams) => {
  return {
    type: "SET_ACTIVE_TEAM",
    activeTeams: activeTeams,
  };
};

export const setGroupMessage = (groupMessages) => {
  return {
    type: "SET_GROUP_MESSAGE",
    groupMessages: groupMessages,
  };
};

export const setScreenSharingActive = (active) => {
  return {
    type: "SET_SCREEN_SHARE_ACTIVE",
    active,
  };
};
