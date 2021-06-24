import React from "react";
import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdCamera,
} from "react-icons/md";
import ConversationButton from "./ConversationButton";
import { callStates } from "store/actions/callActions";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { endCall } from "utils/websocketclient/clientSocket.js";

const styles = {
  buttonContainer: {
    display: "flex",
    position: "absolute",
    bottom: "22%",
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
    setShowModal,
    showParticipantModal,
  } = props;

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
    // switchForScreenSharingStream();
  };

  const handleHangUpButtonPressed = () => {
    endCall();
  };

  const handleAddParticipant = () => {
    setShowModal(!showParticipantModal);
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
      <ConversationButton onClickHandler={handleAddParticipant}>
        <GroupAddIcon size="large" />
      </ConversationButton>
    </div>
  );
};

export default ConversationButtons;
