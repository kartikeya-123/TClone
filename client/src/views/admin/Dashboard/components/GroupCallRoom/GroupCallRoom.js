import React from "react";
import { Grid } from "@material-ui/core";
import GroupCallVideo from "./GroupCallVideo";
import componentStyles from "assets/theme/views/admin/videoLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(componentStyles);

const GroupCallRoom = (props) => {
  const classes = useStyles();

  const { teamMeetingStreams } = props;
  return (
    <div>
      <Grid className={classes.videoCallGridLayout}>
        {teamMeetingStreams.map((stream, index) => {
          return <GroupCallVideo key={stream.id} incomingStream={stream} />;
        })}
      </Grid>
    </div>
  );
};

export default GroupCallRoom;
