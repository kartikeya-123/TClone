import React, { useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import componentStyles from "assets/theme/components/groupCall";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(componentStyles);

const GroupCallVideo = ({ incomingStream, index, ...props }) => {
  const classes = useStyles();
  const videoRef = useRef();

  const getRemoteGrid = () => {
    const videoGrid = videoRef.current;
    videoGrid.srcObject = incomingStream;
    videoGrid.onloadedmetadata = () => {
      videoGrid.play();
    };
  };
  useEffect(() => {
    getRemoteGrid();
  }, [incomingStream]);

  return (
    <Box>
      <video ref={videoRef} autoPlay className={classes.gridVideo} />
    </Box>
  );
};

export default GroupCallVideo;
