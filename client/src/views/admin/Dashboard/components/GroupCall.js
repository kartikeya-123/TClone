/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
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
import ConversationButtons from "./ConversationButtons/ConversationButtons";
import ParticpantModal from "./ParticipantModal/ParticpantModal";
import componentStyles from "assets/theme/views/admin/videoLayout";
import GroupCallRoom from "./GroupCallRoom/GroupCallRoom";
import { Grid } from "@material-ui/core";
import { joinGroupMeeting } from "utils/websocketclient/groupCallHandler";
import GroupMessages from "./GroupMessages";
const useStyles = makeStyles(componentStyles);

const GroupCall = (props) => {
  const localStreamRef = useRef();
  const remoteStreamRef = useRef();

  const classes = useStyles();
  const [show, setShowGrid] = useState(false);

  const {
    localStream,
    callState,
    groupCallActive,
    groupCallStreams,
    user,
    groupMessages,
  } = props;
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
      window.scrollBy(0, 60);
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

  const showChatGrid = () => {
    setShowGrid((show) => !show);
  };
  return (
    <Grid container direction="column" spacing={3}>
      <Grid xs={6}>
        {!groupCallActive && (
          <Button onClick={joinMeet} className={classes.button}>
            JOIN
          </Button>
        )}
      </Grid>
      <Grid className={classes.videoGrid}>
        {groupCallActive && <GroupCallRoom {...props} />}
      </Grid>
      <Grid className={classes.localVideoGrid}>
        {localStreamGrid}
        {groupCallActive && (
          <ConversationButtons {...props} groupCall showChat={showChatGrid} />
        )}
        <Grid>
          {show ? (
            <GroupMessages user={user} groupMessages={groupMessages} />
          ) : null}
        </Grid>
      </Grid>
    </Grid>
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
  };
}
export default connect(mapStoreStateToProps, mapDispatchToProps)(GroupCall);
