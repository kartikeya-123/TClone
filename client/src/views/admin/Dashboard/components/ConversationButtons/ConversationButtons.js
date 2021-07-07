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

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiChalkboard } from "react-icons/bi";

import { BsChatDots } from "react-icons/bs";
import { callStates } from "store/actions/videoActions";

import {
  endCall,
  switchForScreenSharingStream,
} from "utils/websocketclient/clientSocket.js";
import {
  leaveMeeting,
  addGroupShareScreen,
} from "utils/websocketclient/groupCallHandler";
import { IconButton } from "@material-ui/core";
import ParticipantModal from "../ParticipantModal/ParticpantModal";
import { makeStyles } from "@material-ui/core";
import componentStyles from "assets/theme/components/coversationButtons";
import { connect } from "react-redux";
import {
  setLocalMicrophoneEnabled,
  setLocalCameraEnabled,
} from "store/actions/videoActions";

const useStyles = makeStyles(componentStyles);

const ConversationButtons = (props) => {
  const classes = useStyles();

  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    screenSharingActive,
    callState,
    handleMicrophone,
    handleCamera,
    groupCallActive,
    history,
    showChat,
    handleChat,
    user,
    showBoardGrid,
  } = props;

  const [show, setShowModal] = useState(false);

  const handleMicButtonPressed = () => {
    localStream.getAudioTracks()[0].enabled = !localMicrophoneEnabled;
    handleMicrophone(!localMicrophoneEnabled);
  };

  const handleCameraButtonPressed = () => {
    localStream.getVideoTracks()[0].enabled = !localCameraEnabled;
    handleCamera(!localCameraEnabled);
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
    <div className={classes.buttons}>
      <IconButton onClick={handleMicButtonPressed}>
        {localMicrophoneEnabled ? (
          <MdMic className={classes.icon} />
        ) : (
          <MdMicOff className={classes.icon} />
        )}
      </IconButton>
      <IconButton onClick={handleCameraButtonPressed}>
        {localCameraEnabled ? (
          <MdVideocam className={classes.icon} />
        ) : (
          <MdVideocamOff className={classes.icon} />
        )}
      </IconButton>
      <IconButton onClick={handleScreenSharingButtonPressed}>
        {screenSharingActive ? (
          <MdCamera className={classes.icon} />
        ) : (
          <MdVideoLabel className={classes.icon} />
        )}
      </IconButton>

      {callState === callStates.CALL_IN_PROGRESS ? (
        <>
          <IconButton onClick={handleHangUpButtonPressed}>
            <MdCallEnd className={classes.icon} />
          </IconButton>
          <IconButton onClick={groupCallActive ? showChat : handleChat}>
            <BsChatDots className={classes.icon} />
          </IconButton>

          {groupCallActive ? (
            <IconButton onClick={showBoardGrid}>
              <BiChalkboard className={classes.icon} />
            </IconButton>
          ) : null}
        </>
      ) : null}
      {!groupCallActive && callState !== callStates.CALL_IN_PROGRESS ? (
        <IconButton onClick={handleAddParticipant}>
          <AiOutlineUsergroupAdd className={classes.icon} />
        </IconButton>
      ) : null}

      <ParticipantModal
        show={show}
        close={handleAddParticipant}
        currentUser={user}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    handleCamera: (show) => dispatch(setLocalCameraEnabled(show)),
    handleMicrophone: (on) => dispatch(setLocalMicrophoneEnabled(on)),
  };
}

export default connect(null, mapDispatchToProps)(ConversationButtons);
