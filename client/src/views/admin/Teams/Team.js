import React, { useState, useEffect } from "react";
import { connectWithTeam } from "utils/websocketclient/clientSocket";
import { createGroupMeeting } from "utils/websocketclient/groupCallHandler";
import "./Course.css";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Classes from "./Classes";
import Header from "components/Headers/Header.js";
import componentStyles from "assets/theme/views/admin/dashboard.js";

import axios from "axios";
import { Avatar } from "@material-ui/core";
import TeamDetails from "./components/TeamDetails";
const useStyles = makeStyles(componentStyles);

function Team({ user, cookies, history, ...props }) {
  const classes = useStyles();
  const theme = useTheme();
  const [isLoading, setLoading] = useState(false);
  const [meeting, setMeetingStarted] = useState(false);
  const [roomId, setRoomId] = useState("");

  const { activeTeams } = props;

  const [Team, setTeam] = useState(null);
  const [tab, setTab] = useState("Chat");

  const checkIfCallStarted = (teamId) => {
    console.log(teamId);
    const activeTeam = activeTeams.find((active) => active.teamId == teamId);
    if (activeTeam) {
      setMeetingStarted(true);
      setRoomId(activeTeam.roomId);
    }
  };

  const redirectToMeet = () => {
    let meet = activeTeams.find((team) => team.teamId == Team._id);
    console.log(meet);
    let url = `/call/${meet.roomId}`;
    history.push(url);
  };

  const startMeet = () => {
    const teamId = Team._id;
    createGroupMeeting(teamId);
  };
  const getTeam = (id) => {
    axios
      .get(`/api/v1/team/getTeam/${id}`)
      .then((res) => {
        const team = res.data.data;
        setTeam(team);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        history.push("/classroom");
      });
  };
  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    getTeam(id);
    connectWithTeam(id);
    // checkIfCallStarted(id);
  }, []);

  // useEffect(() => {
  //   let id = window.location.pathname.split("/")[2];
  //   checkIfCallStarted(id);
  // }, [activeTeams]);
  return (
    <div>
      <Header />

      {Team != null ? (
        <Grid
          item
          style={{
            width: "100%",
            marginTop: "1rem",
            marginBottom: "20px",
            display: "flex",
          }}
          component={Box}
          key={Team.TeamCode}
        >
          <Grid>
            <TeamDetails Team={Team} />
          </Grid>
          <Grid style={{ width: "100%" }}>
            <Card
              classes={classes.cardRoot}
              style={{
                borderRadius: "0px",
                height: "100vh",
                boxShadow: "0px 0px 1rem rgba(136,152,170,0.35)",
              }}
            >
              <CardHeader
                style={{
                  minHeight: "140px",
                  minWidth: "min(300px,80vw)",
                  border: 0,
                }}
                classes={{ root: classes.cardHeaderRoot }}
                subheader={
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      component={Typography}
                      variant="h2"
                      marginBottom="1rem!important"
                    >
                      <Box
                        component="span"
                        //   color={theme.palette.white.main}
                        style={{
                          textAlign: "center",
                        }}
                      >
                        General
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        className={tab === "Chat" ? "active" : "in-active"}
                        onClick={() => {
                          setTab("Chat");
                        }}
                      >
                        Chat
                      </Button>
                      <Button
                        className={tab === "Files" ? "active" : "in-active"}
                        onClick={() => {
                          setTab("Files");
                        }}
                      >
                        Files
                      </Button>
                      {!activeTeams.some((team) => team.teamId == Team._id) ? (
                        <Button
                          primary
                          style={{ marginLeft: "10px" }}
                          onClick={startMeet}
                        >
                          Start meeting
                        </Button>
                      ) : (
                        <Button
                          primary
                          style={{ marginLeft: "10px" }}
                          onClick={redirectToMeet}
                        >
                          Join meeting
                        </Button>
                      )}
                    </Box>
                  </Box>
                }
              ></CardHeader>
              <CardContent>
                <div style={{ marginTop: "30px" }}>
                  {tab === "Chat" ? (
                    <Classes Team={Team} />
                  ) : tab === "Files" ? (
                    <Classes Team={Team} />
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </div>
  );
}
function mapStoreStateToProps({ call, dashboard }) {
  return {
    ...call,
  };
}

export default connect(mapStoreStateToProps, null)(Team);
