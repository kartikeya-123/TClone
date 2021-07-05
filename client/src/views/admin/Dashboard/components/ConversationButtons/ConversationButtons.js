import React, { useState } from "react";
import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdCamera,
} from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import ConversationButton from "./ConversationButton";
import { callStates } from "store/actions/videoActions";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import {
  endCall,
  switchForScreenSharingStream,
} from "utils/websocketclient/clientSocket.js";
import {
  leaveMeeting,
  addGroupShareScreen,
} from "utils/websocketclient/groupCallHandler";

import ParticipantModal from "../ParticipantModal/ParticpantModal";
const styles = {
  buttonContainer: {
    display: "flex",
    position: "absolute",
    bottom: "5%",
    left: "35%",
    cursor: "pointer",
  },
  icon: {
    width: "25px",
    height: "25px",
    fill: "#e6e5e8",
  },
};

const ConversationButtons = (props) => {
  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    setCameraEnabled,
    setMicrophoneEnabled,
    screenSharingActive,
    callState,
    groupCallActive,
    history,
    showChat,
    activeUsers,
    user,
  } = props;

  const [show, setShowModal] = useState(false);

  const handleMicButtonPressed = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraButtonPressed = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharingButtonPressed = () => {
    if (!groupCallActive) switchForScreenSharingStream();
    else addGroupShareScreen();
  };

  const handleHangUpButtonPressed = () => {
    if (!groupCallActive) endCall();
    else {
      const roomId = window.location.pathname.split("/")[2];
      leaveMeeting(roomId);
      history.goBack();
    }
  };

  const handleAddParticipant = () => {
    setShowModal(!show);
  };

  return (
    <div style={styles.buttonContainer}>
      <ConversationButton onClickHandler={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <MdMic style={styles.icon} />
        ) : (
          <MdMicOff style={styles.icon} />
        )}
      </ConversationButton>
      {callState === callStates.CALL_IN_PROGRESS ? (
        <ConversationButton onClickHandler={handleHangUpButtonPressed}>
          <MdCallEnd style={styles.icon} />
        </ConversationButton>
      ) : null}
      <ConversationButton onClickHandler={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <MdVideocam style={styles.icon} />
        ) : (
          <MdVideocamOff style={styles.icon} />
        )}
      </ConversationButton>
      <ConversationButton onClickHandler={handleScreenSharingButtonPressed}>
        {screenSharingActive ? (
          <MdCamera style={styles.icon} />
        ) : (
          <MdVideoLabel style={styles.icon} />
        )}
      </ConversationButton>
      {!groupCallActive ? (
        <ConversationButton onClickHandler={handleAddParticipant}>
          <GroupAddIcon size="large" />
        </ConversationButton>
      ) : null}
      {groupCallActive ? (
        <ConversationButton onClickHandler={showChat}>
          <BsChatDots style={styles.icon} />
        </ConversationButton>
      ) : null}

      <ParticipantModal
        show={show}
        activeUsers={activeUsers}
        close={handleAddParticipant}
        currentUser={user}
      />
    </div>
  );
};

export default ConversationButtons;
