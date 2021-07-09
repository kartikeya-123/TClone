/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CallRejectedDialog from "./components/CallRejectedDialog/CallRejectedDialog";
import CallingModal from "./components/CallingModal";

import { setRejectedReason } from "store/actions/videoActions";
import ConversationButtons from "./components/ConversationButtons/ConversationButtons";
import componentStyles from "assets/theme/views/admin/videoLayout";
import DirectMessages from "./components/directMessages";
import { Grid, Button } from "@material-ui/core";
import { callStates } from "store/actions/videoActions";
import { acceptIncomingCallRequest } from "utils/websocketclient/clientSocket";
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
    recieverUsername,
    callState,
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

  const joinCall = () => {
    acceptIncomingCallRequest();
  };
  return (
    <>
      {callState === callStates.CALL_REQUESTED ? (
        <Grid xs={6}>
          <Button onClick={joinCall} className={classes.button}>
            ACCEPT
          </Button>
        </Grid>
      ) : null}
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
        <CallingModal recieverUsername={recieverUsername} />
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
  };
}
export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
