import React, { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiChalkboard } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { callStates } from "store/actions/videoActions";
import {
  MdCallEnd,
  MdMic,
  MdCamera,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
} from "react-icons/md";

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
    isTeamMeetingPresent,
    history,
    showChat,
    handleChat,
    user,
    showBoardGrid,
  } = props;

  const [show, setShowModal] = useState(false);

  const onClickMicrophoneButton = () => {
    localStream.getAudioTracks()[0].enabled = !localMicrophoneEnabled;
    handleMicrophone(!localMicrophoneEnabled);
  };

  const onClickCameraButton = () => {
    localStream.getVideoTracks()[0].enabled = !localCameraEnabled;
    handleCamera(!localCameraEnabled);
  };

  const onClickShareButton = () => {
    if (!isTeamMeetingPresent) switchForScreenSharingStream();
    else addGroupShareScreen();
  };

  const onClickEndButton = () => {
    if (!isTeamMeetingPresent) endCall();
    else {
      const roomId = window.location.pathname.split("/")[2];
      leaveMeeting(roomId);
      history.goBack();
    }
  };

  const onClickAddParticipant = () => {
    setShowModal(!show);
  };

  return (
    <div className={classes.buttons}>
      <IconButton onClick={onClickMicrophoneButton}>
        {localMicrophoneEnabled ? (
          <MdMic className={classes.icon} />
        ) : (
          <MdMicOff className={classes.icon} />
        )}
      </IconButton>
      <IconButton onClick={onClickCameraButton}>
        {localCameraEnabled ? (
          <MdVideocam className={classes.icon} />
        ) : (
          <MdVideocamOff className={classes.icon} />
        )}
      </IconButton>
      <IconButton onClick={onClickShareButton}>
        {screenSharingActive ? (
          <MdCamera className={classes.icon} />
        ) : (
          <MdVideoLabel className={classes.icon} />
        )}
      </IconButton>

      {callState === callStates.CALL_IN_PROGRESS ? (
        <>
          <IconButton onClick={onClickEndButton}>
            <MdCallEnd className={classes.icon} />
          </IconButton>
          <IconButton onClick={isTeamMeetingPresent ? showChat : handleChat}>
            <BsChatDots className={classes.icon} />
          </IconButton>

          {isTeamMeetingPresent ? (
            <IconButton onClick={showBoardGrid}>
              <BiChalkboard className={classes.icon} />
            </IconButton>
          ) : null}
        </>
      ) : null}
      {!isTeamMeetingPresent && callState !== callStates.CALL_IN_PROGRESS ? (
        <IconButton onClick={onClickAddParticipant}>
          <AiOutlineUsergroupAdd className={classes.icon} />
        </IconButton>
      ) : null}

      <ParticipantModal
        show={show}
        close={onClickAddParticipant}
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
