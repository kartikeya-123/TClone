import React from "react";
import ConversationButtons from "../ConversationButtons/ConversationButtons";
import { Grid, Box } from "@material-ui/core";
import GroupCallVideo from "./GroupCallVideo";
import componentStyles from "assets/theme/views/admin/videoLayout";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import GroupMessages from "../GroupMessages";

const useStyles = makeStyles(componentStyles);

const chatMessages = [
  {
    userId: "Kartikeya",
    createdAt: Date.now(),
    message: "qew",
  },
];
const GroupCallRoom = (props) => {
  const classes = useStyles();
  const { user } = props;

  const { groupCallStreams } = props;
  return (
    <div>
      <Grid className={classes.videoCallGridLayout}>
        {groupCallStreams.map((stream, index) => {
          return (
            <GroupCallVideo key={stream.id} stream={stream} index={index} />
          );
        })}
      </Grid>
      {/* <ConversationButtons {...props} groupCall /> */}
    </div>
  );
};

export default GroupCallRoom;
