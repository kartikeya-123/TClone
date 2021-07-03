import React from "react";
import { Grid, Box } from "@material-ui/core";
import GroupCallVideo from "./GroupCallVideo";
import componentStyles from "assets/theme/views/admin/videoLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(componentStyles);

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
    </div>
  );
};

export default GroupCallRoom;
