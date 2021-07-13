import React, { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiChalkboard } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { videoStates } from "store/actions/videoActions";
import {
  MdCallEnd,
  MdMic,
  MdStopScreenShare,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdScreenShare,
} from "react-icons/md";

import {
  closeCall,
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
import { setlocalMicrophone, setlocalCamera } from "store/actions/videoActions";

const useStyles = makeStyles(componentStyles);

const ConversationButtons = (props) => {
  const classes = useStyles();

  const {
    localStream,
    localCamera,
    localMicrophone,
    screenSharing,
    callState,
    handleMicrophone,
    handleCamera,
    isTeamMeetingPresent,
    history,
    showChat,
    handleChat,
    user,
    showBoardGrid,
    groupCall,
  } = props;

  const [show, setShowModal] = useState(false);

  const onClickMicrophoneButton = () => {
    localStream.getAudioTracks()[0].enabled = !localMicrophone;
    handleMicrophone(!localMicrophone);
  };

  const onClickCameraButton = () => {
    localStream.getVideoTracks()[0].enabled = !localCamera;
    handleCamera(!localCamera);
  };

  const onClickShareButton = () => {
    if (!isTeamMeetingPresent) switchForScreenSharingStream();
    else addGroupShareScreen();
  };

  const onClickEndButton = () => {
    if (!isTeamMeetingPresent) closeCall();
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
        {localMicrophone ? (
          <MdMic className={classes.icon} />
        ) : (
          <MdMicOff className={classes.icon} />
        )}
      </IconButton>
      <IconButton onClick={onClickCameraButton}>
        {localCamera ? (
          <MdVideocam className={classes.icon} />
        ) : (
          <MdVideocamOff className={classes.icon} />
        )}
      </IconButton>
      {callState === videoStates.ONGOING ? (
        <>
          <IconButton onClick={onClickShareButton}>
            {screenSharing ? (
              <MdScreenShare className={classes.icon} />
            ) : (
              <MdStopScreenShare className={classes.icon} />
            )}
          </IconButton>
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
      {!groupCall && callState !== videoStates.ONGOING ? (
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
    handleCamera: (show) => dispatch(setlocalCamera(show)),
    handleMicrophone: (on) => dispatch(setlocalMicrophone(on)),
  };
}

export default connect(null, mapDispatchToProps)(ConversationButtons);
