import React, { useRef, useEffect } from "react";
import { Box } from "@material-ui/core";

const styles = {
  videoContainer: {
    width: "auto",
    height: "auto",
  },
  videoElement: {
    // maxHeight: "250px",
    height: "100%",
    minWidth: "100%",
    margin: "auto",
    padding: "10px 10px",
    boxSizing: "border-box",
    objectFit: "contain",
    transition: "0.4s ease-in-out",
  },
};

const GroupCallVideo = ({ stream, index, ...props }) => {
  const { sx, ...other } = props;
  const videoRef = useRef();

  useEffect(() => {
    const remoteGroupCallVideo = videoRef.current;
    remoteGroupCallVideo.srcObject = stream;
    remoteGroupCallVideo.onloadedmetadata = () => {
      remoteGroupCallVideo.play();
    };
  }, [stream]);

  return (
    <Box>
      <video ref={videoRef} autoPlay style={styles.videoElement} />
    </Box>
  );
};

export default GroupCallVideo;
