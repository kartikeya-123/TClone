import React from "react";
import ConversationButtons from "../ConversationButtons/ConversationButtons";
import { Grid } from "@material-ui/core";
import "./GroupCallRoom.css";
import GroupCallVideo from "./GroupCallVideo";
import compnentStyles from "assets/theme/views/admin/videoLayout";
import { makeStyles } from "@material-ui/core/styles";
import componentStyles from "assets/theme/components/navbar-dropdown";

const useStyles = makeStyles(componentStyles);

const GroupCallRoom = (props) => {
  const classes = useStyles();

  const { groupCallStreams } = props;
  return (
    <Grid>
      <Grid className={classes.videoCallGridLayout}>
        {groupCallStreams.map((stream) => {
          return <GroupCallVideo key={stream.id} stream={stream} />;
        })}
      </Grid>
      <ConversationButtons {...props} groupCall />
    </Grid>
  );
};

export default GroupCallRoom;
