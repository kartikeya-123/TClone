import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { callOtherUser } from "utils/websocketclient/clientSocket";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

export default function ParticipantModal({ show, activeUsers }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: show,
  });
  //   console.log(activeUsers);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onClickUser = (activeUser) => {
    callOtherUser(activeUser);
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div>Share an invite</div>
      </List>
      <Divider />
      <List>
        <div>Members Online</div>
        {activeUsers.map((activeUser, index) => (
          <ListItem
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => onClickUser(activeUser)}
          >
            <ListItemAvatar>
              <Avatar
                src={activeUser.image}
                style={{ width: "30px", height: "30px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={activeUser.username}
              secondary={activeUser.email}
            />
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
