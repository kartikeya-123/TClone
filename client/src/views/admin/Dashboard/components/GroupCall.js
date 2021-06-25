/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CallRejectedDialog from "./CallRejectedDialog/CallRejectedDialog";
import IncomingCallDialog from "./IncomingCallDialog/IncomingCallDialog";
import CallingModal from "./CallingModal";
import {
  callStates,
  setLocalMicrophoneEnabled,
} from "store/actions/callActions";
import {
  setRejectedReason,
  setLocalCameraEnabled,
} from "store/actions/callActions";
import { setParticpantModal } from "store/actions/dashboardActions";
import ConversationButtons from "./ConversationButtons/ConversationButtons";
import ParticpantModal from "./ParticipantModal/ParticpantModal";
import componentStyles from "assets/theme/views/admin/videoLayout";
import GroupCallRoom from "./GroupCallRoom/GroupCallRoom";
import { Grid } from "@material-ui/core";
import { joinGroupMeeting } from "utils/websocketclient/groupCallHandler";
const useStyles = makeStyles(componentStyles);

const DirectCall = (props) => {
  const localStreamRef = useRef();
  const remoteStreamRef = useRef();

  const classes = useStyles();

  const { localStream, callState, groupCallActive, groupCallStreams } = props;
  // console.log(callerUsername);

  const getLocalStreamGrid = () => {
    const localVideoStream = localStreamRef.current;

    localVideoStream.srcObject = localStream;
    localVideoStream.onloadedmetadata = () => {
      localVideoStream.play();
    };
  };

  const joinMeet = () => {
    const roomId = window.location.pathname.split("/")[2];
    console.log(roomId);
    joinGroupMeeting(roomId);
  };
  useEffect(() => {
    if (localStream) {
      // Local video element value is assigned localStream
      getLocalStreamGrid();
    }
  }, [localStream]);

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

  return (
    <>
      {localStreamGrid}
      {!groupCallActive && <Button onClick={joinMeet}>JOIN</Button>}
      {groupCallActive && <GroupCallRoom {...props} />}
    </>
  );
};

function mapStoreStateToProps({ call, dashboard }) {
  return {
    ...call,
    ...dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideCallRejectedDialog: (callRejectedDetails) =>
      dispatch(setRejectedReason(callRejectedDetails)),
    setCameraEnabled: (enabled) => dispatch(setLocalCameraEnabled(enabled)),
    setMicrophoneEnabled: (enabled) =>
      dispatch(setLocalMicrophoneEnabled(enabled)),
    setShowModal: (show) => dispatch(setParticpantModal(show)),
  };
}
export default connect(mapStoreStateToProps, mapDispatchToProps)(DirectCall);
