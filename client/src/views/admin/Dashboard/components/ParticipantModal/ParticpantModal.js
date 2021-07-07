import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Avatar from "@material-ui/core/Avatar";
import { callOtherUser } from "utils/websocketclient/clientSocket";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  CardHeader,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  Paper,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  list: {
    width: "300px",
  },
  paper: {
    width: "300px",
    backgroundColor: "#151515",
  },
  root: {
    minWidth: 275,
    minHeight: 400,
    top: "10%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    width: "100%",
    padding: "0px",
  },
  listPaper: {
    maxHeight: 240,
    overflow: "auto",
    width: 270,
    marginTop: "10px",
  },
  avatar: {
    height: "25px",
    width: "25px",
    marginRight: "2px",
  },
  primary: {
    fontSize: "14px",
  },
  ListRoot: {
    minWidth: "200",
  },
});

export default function ParticipantModal({ show, close, currentUser }) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [users, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => getAllUsers(), []);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const getAllUsers = () => {
    axios
      .get("/api/v1/user")
      .then((response) => {
        let users = response.data.data.docs;
        users = users.filter((user) => user.email !== currentUser.email);
        setAllUsers(users);
      })
      .catch((err) => console.log(err));
  };

  const filterResults = () => {
    // console.log(search);
    let filterUsers = users.filter((user) => {
      return (
        user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        user.email.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    });

    setFilteredUsers(filterUsers);
  };

  useEffect(() => {
    filterResults();
  }, [value]);

  const onClickUser = (activeUser) => {
    callOtherUser(activeUser);
  };
  const list = (
    <Card className={classes.root}>
      <CardHeader subheader={<Typography> People</Typography>}></CardHeader>
      <CardContent>
        <TextField
          id="outlined-multiline-flexible"
          label="Invite"
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
          placeholder="Invite Someone"
          classes={{ root: classes.input }}
          autoComplete="off"
        />
        {value.length > 0 ? (
          <Paper className={classes.listPaper}>
            {filteredUsers.length > 0 ? (
              <List
                component="nav"
                className={classes.rootList}
                aria-label="contacts"
              >
                {filteredUsers.map((user, index) => {
                  return (
                    <ListItem
                      button
                      key={index}
                      style={{ display: "flex" }}
                      onClick={() => onClickUser(user)}
                    >
                      <ListItemIcon
                        style={{ minWidth: "10px", marginRight: "10px" }}
                      >
                        <Avatar
                          src={user.image}
                          className={classes.avatar}
                        ></Avatar>
                      </ListItemIcon>
                      <ListItemText
                        primary={user.name}
                        secondary={user.email}
                        classes={{ primary: classes.primary }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <div style={{ textAlign: "center" }}>
                <Typography>No users matched</Typography>
              </div>
            )}
          </Paper>
        ) : null}
      </CardContent>
    </Card>
  );

  return (
    <div>
      <Drawer
        open={show}
        anchor="right"
        onClose={close}
        classes={{ paper: classes.paper }}
      >
        {list}
      </Drawer>
    </div>
  );
}

/* <List>
        <div>Members Online</div>
        {activeUsers.map((activeUser, index) => (
          <ListItem
            style={{ display: "flex", cursor: "pointer" }}
            onClick={() => onClickUser(activeUser)}
            key={index}
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
      </List> */
