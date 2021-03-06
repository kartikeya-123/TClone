import React, { useEffect, useState } from "react";
import {
  Avatar,
  Grid,
  GridList,
  Box,
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  FormGroup,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";
import componentStyles from "assets/theme/views/admin/groupMessages";
import { sendDirectMessage } from "../../../../utils/websocketclient/clientSocket";
import { getDate } from "components/Custom/Date";
const useStyles = makeStyles(componentStyles);

const urlify = (text) => {
  var urlRegex =
    /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
  return text.replace(urlRegex, function (url) {
    return `<a href="${url}" target="_blank"> ${url} </a>`;
  });
};

const DirectMessages = (props) => {
  const { user, directMessages, connectedUserId } = props;

  const classes = useStyles();

  const scrollToBottom = () => {
    const elem = document.getElementById("chat-elem");
    if (elem) elem.scrollTop = elem.scrollHeight;
  };
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [chatMessages]);

  const onPostMessage = (event) => {
    event.preventDefault();
    if (message !== "") {
      const chatDetails = {
        reciever: connectedUserId,
        name: user.name,
        createdAt: getDate(Date.now()),
        message: message,
        userId: user.id,
        userImage: user.image,
      };
      sendDirectMessage(chatDetails);
      setMessage("");
    }
  };

  return (
    <Grid
      item
      xs={6}
      xl={12}
      component={Box}
      //   marginBottom="3rem"
      classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
    >
      <Card className={classes.root}>
        <CardContent>
          <GridList cellHeight={35} className={classes.gridList} cols={1}>
            {directMessages.map((chatMessage, index) => {
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
                    {alignment === "left" ? (
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
                          {chatMessage.name}{" "}
                          <span className={classes.span}>
                            {chatMessage.createdAt}
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
            })}
          </GridList>
        </CardContent>
        <CardActions className={classes.cardActions}>
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
                disableUnderline={true}
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
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DirectMessages;
