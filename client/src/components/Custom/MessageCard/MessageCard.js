import React, { useEffect } from "react";
import {
  Avatar,
  Grid,
  GridList,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "red",
  },
  gridList: {
    // minHeight: "30vh",
    maxHeight: "60vh",
  },
  image: {
    width: "30px",
    height: "30px",
  },
  messageCard: {
    backgroundColor: "#ebebeb",
    display: "inline-block",
    padding: "10px",
  },
  messageCardRight: {
    marginLeft: "50%",
    backgroundColor: "#E9EAF6",
    display: "inline-block",
    padding: "10px",
  },

  imageLayout: {
    justifyContent: "right",
  },
  gridLayout: {
    alignItems: "right",
  },
  cardgridLayout: {
    width: "100%",
    backgroundColor: "#fcfcfc",
    padding: "10px",
  },
  meetingCard: {
    minWidth: "90%",
  },
  span: {
    color: "#5F5F5F",
    float: "right",
    fontSize: "12px",
    textDecoration: "transparent",
    fontWeight: 400,
    margin: "3px",
  },
  AccordionRoot: {
    width: "100%",
    boxShadow: "0px",
    backgroundColor: "#F7F7F7",
  },
  messageList: {
    width: "100%",
    backgroundColor: "#F7F7F7",
  },
}));
const urlify = (text) => {
  var urlRegex =
    /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
  return text.replace(urlRegex, function (url) {
    return `<a href="${url}" target="_blank"> ${url} </a>`;
  });
};

const Messages = ({ teamMessages, user }) => {
  const classes = useStyles();

  const scrollToBottom = () => {
    const elem = document.getElementById("chat-elem");
    if (elem) {
      elem.scrollTop = elem.scrollHeight;
    }
  };

  const getDate = (date) => {
    let day = new Date(date).toUTCString().substr(0, 3);
    let messageTime = new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    messageTime = messageTime.split(":");
    let finalTime = day + ", ";
    if (messageTime[0] <= 1) {
      finalTime += messageTime[0] + "." + messageTime[1] + " AM";
    } else {
      finalTime += messageTime[0] - 12 + "." + messageTime[1] + " PM";
    }

    return finalTime;
  };
  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [teamMessages]);

  return (
    <div
      id="chat-lem"
      style={{
        paddingTop: "0px",
        minHeight: "60vh",
      }}
      // className={classes.root}
    >
      <GridList
        cellHeight={40}
        className={classes.gridList}
        cols={1}
        id="chat-elem"
      >
        {teamMessages.map((chatMessage, index) => {
          if (!chatMessage.roomId) {
            let alignment = "left";
            if (chatMessage.userId === user.id) {
              alignment = "right";
            }
            return (
              <React.Fragment key={index}>
                <Grid
                  container
                  wrap="nowrap"
                  spacing={1}
                  style={{
                    margin: "10px 5px",
                    height: "auto",
                  }}
                  className={classes.gridLayout}
                >
                  {alignment == "left" ? (
                    <Grid item>
                      <Avatar
                        alt="avatar"
                        src={chatMessage.userImage}
                        className={classes.image}
                      />
                    </Grid>
                  ) : null}
                  <Grid
                    className={
                      alignment === "right"
                        ? classes.messageCardRight
                        : classes.messageCard
                    }
                    item
                    zeroMinWidth
                    alignItems="flex-end"
                    direction="reverse"
                    justify="flex-end"
                    //
                    xs={6}
                  >
                    <Box>
                      <h4 style={{ margin: 0 }}>
                        {chatMessage.userName}{" "}
                        <span className={classes.span}>
                          {getDate(chatMessage.createdAt)}
                        </span>
                      </h4>

                      <p
                        style={{ margin: "0px" }}
                        dangerouslySetInnerHTML={{
                          __html: urlify(chatMessage.message),
                        }}
                      ></p>
                    </Box>
                  </Grid>
                </Grid>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={index}>
                <Grid
                  container
                  wrap="nowrap"
                  spacing={1}
                  style={{
                    margin: "10px 5px",
                    height: "auto",
                  }}
                  className={classes.cardgridLayout}
                >
                  <Grid item>
                    <VideocamOutlinedIcon className={classes.image} />
                  </Grid>

                  <Grid
                    className={classes.meetingCard}
                    item
                    zeroMinWidth
                    alignItems="flex-end"
                    direction="reverse"
                    justify="flex-end"
                    //
                    xs={6}
                  >
                    <Box style={{ width: "100%" }}>
                      <h4 style={{ margin: 0, paddingBottom: "10px" }}>
                        Meeting started by {chatMessage.startedBy}{" "}
                        <span className={classes.span}>
                          {getDate(chatMessage.endedAt)}
                        </span>
                        <span className={classes.span}>
                          {getDate(chatMessage.createdAt)}
                          {" - "}
                        </span>
                      </h4>
                      {chatMessage.chatMessages.length > 0 ? (
                        <Accordion
                          className={{ root: classes.AccordionRoot }}
                          style={{ boxShadow: "0px" }}
                          elevation={0}
                          style={{ backgroundColor: "#F7F7F7" }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography className={classes.heading}>
                              See messages
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <List className={classes.messageList}>
                              {chatMessage.chatMessages.map(
                                (message, index) => {
                                  return (
                                    <ListItem style={{ display: "flex" }}>
                                      <ListItemAvatar>
                                        <Avatar
                                          alt="avatar"
                                          src={message.userImage}
                                          className={classes.image}
                                        />
                                      </ListItemAvatar>
                                      <ListItemText
                                        disableTypography
                                        primary={
                                          <h4 style={{ margin: 0 }}>
                                            {message.userName}{" "}
                                            <span className={classes.span}>
                                              {getDate(message.createdAt)}
                                            </span>
                                          </h4>
                                        }
                                        secondary={
                                          <p
                                            style={{ margin: "0px" }}
                                            dangerouslySetInnerHTML={{
                                              __html: urlify(message.message),
                                            }}
                                          ></p>
                                        }
                                      ></ListItemText>
                                    </ListItem>
                                  );
                                }
                              )}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      ) : null}
                    </Box>
                  </Grid>
                </Grid>
              </React.Fragment>
            );
          }
        })}
      </GridList>
    </div>
  );
};

export default Messages;
