import React, { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "utils/websocketclient/clientSocket";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  CircularProgress,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import MessageCard from "./../../../../components/Custom/MessageCard/MessageCard";
import componentStyles from "assets/theme/views/admin/profile.js";

const useStyles = makeStyles(componentStyles);

const ChatRoom = ({ user, Team }) => {
  const classes = useStyles();

  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const teamId = window.location.pathname.split("/")[3];

  const getPreviousMessages = () => {
    axios
      .get(`/api/v1/team/chat-room/${Team._id}`)
      .then((response) => {
        setLoading(false);
        //console.log(response);
        if (response.status === 200) {
          setChatMessages(response.data.data.chatMessages);
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.response.data.message);
      });
  };

  useEffect(() => {
    getPreviousMessages();
    socket.on("new-message", (newMessage) => {
      console.log("Received new message");
      setChatMessages((messages) => [...messages, newMessage]);
    });
  }, []);

  const onPostMessage = (e) => {
    e.preventDefault();
    if (message === "") alert("Empty Message!");
    else {
      const data = {
        userId: user._id,
        userName: user.name,
        userImage: user.image,
        message: message,
        teamId: Team._id,
        createdAt: new Date(),
      };
      //   console.log(socket);
      if (socket)
        socket.emit("message", data, () => {
          setMessage("");
        });
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  let chats = null;
  if (isLoading)
    chats = (
      <div
        style={{
          display: "flex",
          margin: "20px 0px",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  else if (!isLoading && chatMessages.length > 0) {
    chats = <MessageCard chatMessages={chatMessages} user={user} />;
  } else
    chats = (
      <Typography
        style={{
          fontSize: "17px",
          padding: "10px 0px",
          height: "10px",
          margin: "5px",
        }}
      >
        Start Conversation
      </Typography>
    );

  return (
    <div
      className="content"
      style={{
        position: " relative",
        fontSize: "1rem",
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <Grid container>
        <Grid item xs={12} xl={1}></Grid>
        <Grid
          item
          xs={12}
          xl={12}
          component={Box}
          //   marginBottom="3rem"
          classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
        >
          <Paper
            style={{ padding: "2px 10px 2px 0px" }}
            classes={{ root: classes.cardRoot }}
          >
            {chats}
            {/* <p>{typingName}</p> */}
            <div
              className={classes.plLg4}
              style={{ marignLeft: "auto", marginRight: "auto" }}
            >
              <br />

              <Grid container>
                <Grid item xs="auto">
                  <FormGroup>
                    <FormControl
                      variant="filled"
                      width="100%"
                      style={{
                        marginBottom: "1rem!important",
                      }}
                      required
                    >
                      <Input
                        style={{
                          paddingLeft: "0.75rem",
                          paddingRight: "0.75rem",
                          width: "100%",
                        }}
                        type="text"
                        required
                        autoComplete="off"
                        classes={{ input: classes.searchInput }}
                        placeholder="Write Your Message"
                        id="message"
                        onChange={handleChange}
                        value={message}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={(e) => {
                                onPostMessage(e);
                              }}
                              style={{
                                border: "0",
                                padding: "7px",
                              }}
                              disabled={message === ""}
                            >
                              <SendIcon
                                style={{
                                  padding: "0",
                                  width: "23px",
                                  height: "23px",
                                }}
                              />
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </FormGroup>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} xl={1}></Grid>
      </Grid>
    </div>
  );
};

export default ChatRoom;
