import React, { useEffect, useState } from "react";
import { getLocaleStream } from "utils/websocketclient/clientSocket";
import { joinGroupMeeting } from "utils/websocketclient/groupCallHandler";
import DirectCall from "./components/DirectCall";
import GroupCall from "./components/GroupCall";
import { Grid } from "@material-ui/core";

import { Container, makeStyles } from "@material-ui/core";
import componentStyles from "assets/theme/views/admin/videoLayout";

import Header from "components/Headers/Header";

const useStyles = makeStyles(componentStyles);

const VideoLayout = ({ user }) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [directCall, setDirectCall] = useState(true);

  const checkIfGroupCall = () => {
    const paths = window.location.pathname.split("/");
    if (paths.length === 3) {
      setDirectCall(false);
    }
    console.log(paths);

    setLoading(false);
  };
  useEffect(() => {
    getLocaleStream();
    // connectWithPeer();
    checkIfGroupCall();
  }, []);

  return (
    <>
      <Header />
      {!isLoading ? (
        <Grid sx={12} className={classes.root}>
          <Grid className={classes.layout}>
            {directCall ? <DirectCall /> : <GroupCall />}
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};

export default VideoLayout;
