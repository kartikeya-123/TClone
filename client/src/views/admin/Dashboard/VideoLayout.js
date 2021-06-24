import React, { useEffect } from "react";
import { getLocaleStream } from "utils/websocketclient/clientSocket";
import { connectWithPeer } from "utils/websocketclient/groupCallHandler";
import DirectCall from "./components/DirectCall";
import { Grid } from "@material-ui/core";

import { Container, makeStyles } from "@material-ui/core";
import componentStyles from "assets/theme/views/admin/videoLayout";

import Header from "components/Headers/Header";

const useStyles = makeStyles(componentStyles);

const VideoLayout = ({ user }) => {
  const classes = useStyles();

  useEffect(() => {
    getLocaleStream();
    // connectWithPeer();
  }, []);

  return (
    <>
      <Header />
      <Grid sx={12} className={classes.root}>
        <Grid className={classes.layout}>
          <DirectCall />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoLayout;
