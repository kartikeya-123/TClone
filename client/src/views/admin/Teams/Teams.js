import React, { useState, useEffect } from "react";
import { callStates } from "store/actions/videoActions";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { Avatar, CircularProgress } from "@material-ui/core";
import { stopLocaleStream } from "utils/websocketclient/clientSocket";

import TeamCard from "./../Teams/components/TeamCard";
import CreateTeam from "./../Teams/components/CreateTeam";
import IncomingCallDialog from "./../Dashboard/components/IncomingCallDialog/IncomingCallDialog";

const useStyles = makeStyles(componentStyles);

function Teams({ user, history, ...props }) {
  // const history = useHistory();
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [memberTeams, setMemberTeams] = useState([]);
  const [ownerTeams, setOwnerTeams] = useState([]);

  const { callState, callerUsername } = props;

  const { localStream } = props;

  const getTeamsAsMember = () => {
    axios
      .get("/api/v1/team/memberTeams")
      .then((res) => {
        console.log(res.data);
        setMemberTeams(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTeamsAsOwner = () => {
    axios
      .get("/api/v1/team/ownerTeams")
      .then((res) => {
        console.log(res.data);
        setOwnerTeams(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const redirectToTeam = (teamId) => {
    history.push(`/team/${teamId}`);
  };

  const redirectToCall = () => {
    history.push("/call");
  };
  const createTeam = (data) => {
    axios
      .post("/api/v1/team/createTeam", data, { withCredentials: true })
      .then((response) => {
        let team = response.data.data;
        console.log(team);
        setOwnerTeams((ownerTeams) => [...ownerTeams, team]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTeamsAsMember();
    getTeamsAsOwner();
    if (localStream) {
      console.log("hello");
      stopLocaleStream();
    }
  }, []);

  return (
    <div>
      <Header />
      <Box style={{ display: "flex", justifyContent: "flex-end" }}>
        <CreateTeam
          user={user}
          createTeam={createTeam}
          redirectToCall={redirectToCall}
        />
      </Box>
      {!isLoading ? (
        <>
          {memberTeams.length > 0 ? (
            <Grid className={classes.gridRootHeader}>
              <Box component="span">
                <Typography>Teams as a member</Typography>
              </Box>
              <Grid container spacing={3} className={classes.gridRoot}>
                {memberTeams.map((team, index) => (
                  <TeamCard
                    team={team}
                    key={index}
                    clicked={() => redirectToTeam(team._id)}
                  />
                ))}
              </Grid>
            </Grid>
          ) : null}
          {ownerTeams.length > 0 ? (
            <Grid className={classes.gridRootHeader}>
              <Box component="span" style={{ paddingLeft: "30px" }}>
                <Typography>Teams as a owner</Typography>
              </Box>
              <Grid container spacing={3} className={classes.gridRoot}>
                {ownerTeams.map((team, index) => (
                  <TeamCard
                    team={team}
                    key={index}
                    clicked={() => redirectToTeam(team._id)}
                  />
                ))}
              </Grid>
            </Grid>
          ) : null}
        </>
      ) : (
        <CircularProgress style={{ margin: "auto" }} />
      )}
    </div>
  );
}

function mapStoreStateToProps({ Video, User }) {
  return {
    ...Video,
  };
}

export default connect(mapStoreStateToProps, null)(Teams);
