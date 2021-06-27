import React, { useEffect } from "react";
import { Avatar, Grid, GridList, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: "50vh",
  },
  image: {
    width: "30px",
    height: "30px",
  },
}));
const urlify = (text) => {
  var urlRegex =
    /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
  return text.replace(urlRegex, function (url) {
    return `<a href="${url}" target="_blank"> ${url} </a>`;
  });
};

const Messages = ({ chatMessages, user }) => {
  const classes = useStyles();

  const scrollToBottom = () => {
    const elem = document.getElementById("chat-elem");
    if (elem) elem.scrollTop = elem.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div
      id="chat-elem"
      style={{
        height: "100%",
      }}
      // className={classes.root}
    >
      <GridList cellHeight={40} className={classes.gridList} cols={1}>
        {chatMessages.map((chatMessage, index) => {
          let alignment = "left";
          if (chatMessage.userId == user.id) {
            console.log("Hi");
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
                }}
              >
                <Grid item>
                  <Avatar
                    alt="avatar"
                    src={chatMessage.userImage}
                    className={classes.image}
                  />
                </Grid>
                <Grid
                  style={{ justifyContent: "left", marginLeft: "5px" }}
                  item
                  xs
                  zeroMinWidth
                >
                  <Box
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h4 style={{ margin: 0, textAlign: "left" }}>
                      {chatMessage.userName}
                    </h4>
                  </Box>
                  <p
                    style={{ textAlign: "left", margin: "0px" }}
                    dangerouslySetInnerHTML={{
                      __html: urlify(chatMessage.message),
                    }}
                  ></p>
                </Grid>
              </Grid>
            </React.Fragment>
          );
        })}
      </GridList>
    </div>
  );
};

export default Messages;
