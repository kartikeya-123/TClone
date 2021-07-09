import React, { useEffect, useState } from "react";
import { getLocaleStream } from "utils/websocketclient/clientSocket";
import { joinGroupMeeting } from "utils/websocketclient/groupCallHandler";
import DirectCall from "./DirectCall";
import GroupCall from "./GroupCall";
import { Grid } from "@material-ui/core";

import { Container, makeStyles } from "@material-ui/core";
import componentStyles from "assets/theme/views/admin/videoLayout";
import axios from "axios";
import Header from "components/Headers/Header";
import { setTurnServers } from "utils/websocketclient/clientSocket";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

const VideoLayout = ({ user, history }) => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [directCall, setDirectCall] = useState(true);

  const checkIfGroupCall = () => {
    const paths = window.location.pathname.split("/");
    if (paths.length === 3) {
      setDirectCall(false);
    }
    setLoading(false);
  };

  const getServersFromBackend = () => {
    axios
      .get("/api/v1/turnCredentials")
      .then((response) => {
        console.log(response.data.token.iceServers);
        setTurnServers(response.data.token.iceServers);
        getLocaleStream();
        checkIfGroupCall();
      })
      .catch((err) => {
        getLocaleStream();
        checkIfGroupCall();
        console.log(err);
      });
  };
  useEffect(() => {
    getServersFromBackend();
  }, []);

  return (
    <>
      <Header />
      {!isLoading ? (
        <Grid sx={12} className={classes.root}>
          <Grid className={classes.layout}>
            {directCall ? (
              <DirectCall history={history} />
            ) : (
              <GroupCall history={history} />
            )}
          </Grid>
        </Grid>
      ) : (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <CircularProgress />
            <h3 style={{ marginLeft: "20px" }}>Loading...</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoLayout;
