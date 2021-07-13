export const videoStates = {
  AVAILABLE: "AVAILABLE",
  REQUESTED: "REQUESTED",
  ONGOING: "ONGOING",
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

export const setDirectCallModal = (show) => {
  return {
    type: "SET_CALLING_DIALOG",
    show,
  };
};

export const setCallerUsername = (callerUsername) => {
  return {
    type: "SET_CALLER_DETAILS",
    callerUsername,
  };
};

export const setRecieverUsername = (recieverUsername) => {
  return {
    type: "SET_CALLEE_DETAILS",
    recieverUsername,
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

export const setlocalMicrophone = (enabled) => {
  return {
    type: "ENABLE_MICROPHONE",
    enabled,
  };
};

export const setlocalCamera = (enabled) => {
  return {
    type: "ENABLE_CAMERA",
    enabled,
  };
};

export const resetCallState = () => {
  return {
    type: "RESET_CALL_DATA",
  };
};

export const setisTeamMeetingPresent = (active) => {
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

export const setDirectMessage = (directMessages) => {
  return {
    type: "SET_DIRECT_MESSAGE",
    directMessages: directMessages,
  };
};
export const setscreenSharing = (active) => {
  return {
    type: "SET_SCREEN_SHARE_ACTIVE",
    active,
  };
};

export const setConnectedUserId = (socketId) => {
  return {
    type: "SET_USER_SOCKET_ID",
    socketId,
  };
};

export const setImageData = (imageData) => {
  return {
    type: "SET_IMAGE_DATA",
    imageData,
  };
};

export const setTeamMeetingData = (teamMeetingData) => {
  return {
    type: "SET_TEAM_MEETING_DATA",
    teamMeetingData,
  };
};
