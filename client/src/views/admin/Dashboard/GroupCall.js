/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConversationButtons from "./components/ConversationButtons/ConversationButtons";
import componentStyles from "assets/theme/views/admin/videoLayout";
import GroupCallRoom from "./components/GroupCallRoom/GroupCallRoom";
import { Grid } from "@material-ui/core";
import { joinGroupMeeting } from "utils/websocketclient/groupCallHandler";
import GroupMessages from "./components/GroupMessages";
import Board from "../../../components/Custom/Board/Board";

const useStyles = makeStyles(componentStyles);

const GroupCall = (props) => {
  const localStreamRef = useRef();
  const classes = useStyles();
  const [show, setShowGrid] = useState(false);
  const [showBoard, setShowBoard] = useState(false);

  const {
    localStream,

    isTeamMeetingPresent,

    user,
    groupMessages,
    imageData,
  } = props;

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

  const showWhiteBoardGrid = () => {
    setShowBoard((showBoard) => !showBoard);
  };
  return (
    <Grid container direction="column" spacing={3}>
      <Grid xs={6}>
        {!isTeamMeetingPresent && (
          <Button onClick={joinMeet} className={classes.button}>
            JOIN
          </Button>
        )}
      </Grid>
      <Grid className={classes.videoGrid}>
        {isTeamMeetingPresent && <GroupCallRoom {...props} />}
      </Grid>
      <Grid className={classes.localVideoGrid}>
        {localStreamGrid}
        {isTeamMeetingPresent && (
          <ConversationButtons
            {...props}
            groupCall
            showChat={showChatGrid}
            showBoardGrid={showWhiteBoardGrid}
          />
        )}
        <Grid>
          {show ? (
            <GroupMessages user={user} groupMessages={groupMessages} />
          ) : null}
          {showBoard ? <Board imageData={imageData} user={user} /> : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

function mapStoreStateToProps({ Video, User }) {
  return {
    ...Video,
    ...User,
  };
}

export default connect(mapStoreStateToProps, null)(GroupCall);
