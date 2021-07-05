/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CallRejectedDialog from "./CallRejectedDialog/CallRejectedDialog";
import IncomingCallDialog from "./IncomingCallDialog/IncomingCallDialog";
import CallingModal from "./CallingModal";
import {
  callStates,
  setLocalMicrophoneEnabled,
} from "store/actions/videoActions";
import {
  setRejectedReason,
  setLocalCameraEnabled,
} from "store/actions/videoActions";
import ConversationButtons from "./ConversationButtons/ConversationButtons";
import componentStyles from "assets/theme/views/admin/videoLayout";
import DirectMessages from "./directMessages";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

const DirectCall = (props) => {
  const localStreamRef = useRef();
  const remoteStreamRef = useRef();

  const [show, setShowChat] = useState(false);

  const handleChatModal = () => {
    setShowChat(!show);
  };
  const classes = useStyles();

  const {
    localStream,
    remoteStream,
    directCallModal,
    callRejected,
    hideCallRejectedDialog,
    calleeUsername,
    user,
    directMessages,
  } = props;
  // console.log(callerUsername);

  const getLocalStreamGrid = () => {
    const localVideoStream = localStreamRef.current;

    localVideoStream.srcObject = localStream;
    localVideoStream.onloadedmetadata = () => {
      localVideoStream.play();
    };
  };

  const getRemoteStreamGrid = () => {
    const remoteVideoStream = remoteStreamRef.current;
    remoteVideoStream.srcObject = remoteStream;
    remoteVideoStream.onloadedmetadata = () => {
      remoteVideoStream.play();
    };
  };
  useEffect(() => {
    window.scrollBy(0, 40);
    if (localStream) {
      // Local video element value is assigned localStream
      getLocalStreamGrid();
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteStream) {
      getRemoteStreamGrid();
    }
  }, [remoteStream]);

  const localStreamGrid = (
    <Grid className={classes.gridLayout}>
      <video
        className={classes.videoLayout}
        ref={localStreamRef}
        autoPlay
        muted
      />
    </Grid>
  );

  const remoteStreamGrid = (
    <Grid className={classes.localVideoLayout}>
      <video
        className={classes.localVideoLayout}
        ref={remoteStreamRef}
        autoPlay
      />
    </Grid>
  );

  return (
    <>
      {localStreamGrid}
      {remoteStream ? remoteStreamGrid : null}
      {callRejected.rejected ? (
        <CallRejectedDialog
          reason={callRejected.reason}
          hideCallRejectedDialog={hideCallRejectedDialog}
        />
      ) : null}
      {/* {callState === callStates.CALL_REQUESTED ? (
        <IncomingCallDialog caller={callerUsername} show={true} />
      ) : null} */}
      {directCallModal ? (
        <CallingModal calleeUsername={calleeUsername} />
      ) : null}
      <ConversationButtons {...props} handleChat={handleChatModal} />
      <Grid>{show ? <DirectMessages {...props} /> : null}</Grid>
    </>
  );
};

function mapStoreStateToProps({ Video, User }) {
  return {
    ...Video,
    ...User,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideCallRejectedDialog: (callRejectedDetails) =>
      dispatch(setRejectedReason(callRejectedDetails)),
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled) =>
      dispatch(setLocalMicrophoneEnabled(enabled)),
  };
}
export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
