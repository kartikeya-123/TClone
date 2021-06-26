import React, { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";

const styles = {
  videoContainer: {
    width: "200px",
    height: "200px",
  },
  videoElement: {
    width: "100%",
    height: "100%",
  },
};

const GroupCallVideo = ({ stream }) => {
  const videoRef = useRef();

  useEffect(() => {
    const remoteGroupCallVideo = videoRef.current;
    remoteGroupCallVideo.srcObject = stream;
    remoteGroupCallVideo.onloadedmetadata = () => {
      remoteGroupCallVideo.play();
    };
  }, [stream]);

  return (
    <Grid style={styles.videoContainer}>
      <video ref={videoRef} autoPlay style={styles.videoElement} />
    </Grid>
  );
};

export default GroupCallVideo;
