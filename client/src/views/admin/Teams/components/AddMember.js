import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import componentStyles from "assets/theme/components/header";
import axios from "axios";
import {
  ListItem,
  ListItemText,
  List,
  Paper,
  ListItemIcon,
  Avatar,
  Box,
  Container,
  Chip,
  Typography,
} from "@material-ui/core";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    maxHeight: 200,
    overflow: "auto",
    width: 360,
    marginTop: "10px",
  },
  avatar: {
    height: "30px",
    width: "30px",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function AddMember({ show, handleEvent, Team }) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [values, setValues] = useState({
    text: "",
  });
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleChange = (event) => {
    //console.log(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    if (event.target.value === "") setUsers(currentUsers);
    else setSearch(event.target.value);
  };

  const filterResults = () => {
    // //console.log(search);
    let filterUsers = currentUsers.filter((user) => {
      return (
        user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        user.email.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    });
    //console.log(filterUsers);
    setUsers(filterUsers);
  };

  useEffect(() => {
    filterResults();
  }, [search]);

  useEffect(() => {
    if (show) getOutsideTeamUsers();
  }, [show]);

  const getOutsideTeamUsers = () => {
    const teamId = Team.id;
    axios
      .get(`/api/v1/user/otherUsers/${teamId}`, { withCredentials: true })
      .then((response) => {
        setUsers(response.data.data);
        setCurrentUsers(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (user) => () => {
    setSelectedUsers((selected) =>
      selected.filter((data) => data.id !== user.id)
    );
  };

  const addToSelect = (user) => {
    if (!selectedUsers.includes(user)) {
      //console.log("hello");
      let newSelectedUsers = [...selectedUsers, user];
      setSelectedUsers(newSelectedUsers);
    }
  };

  const selectedUsersList = (
    <div className={classes.chips}>
      {selectedUsers.map((data) => {
        return (
          <li key={data.id}>
            <Chip
              label={data.name}
              onDelete={handleDelete(data)}
              className={classes.chip}
              color="primary"
              variant="outlined"
            />
          </li>
        );
      })}
    </div>
  );

  const submitSelectedUsers = () => {
    if (selectedUsers.length === 0) return;
    const memberIds = selectedUsers.map((user) => {
      return user.id;
    });
    axios
      .post(`/api/v1/team/addMember/${Team.id}`, memberIds)
      .then((response) => {
        setSelectedUsers([]);
        setSearch("");
        handleEvent();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Dialog
        open={show}
        onClose={handleEvent}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          style={{ color: "#32325d", fontSize: "15px", fontWeight: "bold" }}
          disableTypography={true}
        >
          Add members to the team
        </DialogTitle>
        <DialogContent style={{ paddingTop: "0px" }}>
          <DialogContentText style={{ fontSize: "13px" }}>
            Start typing a name, distribution list, or security group to add to
            your team. You can also add people outside your organization as
            guests by typing their email addresses.
          </DialogContentText>
          <Box>{selectedUsers.length > 0 ? selectedUsersList : null}</Box>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name or Email"
            type="text"
            fullWidth
            name="text"
            value={values.text}
            onChange={handleChange}
            placeholder="Enter name or email"
          />
          <br></br>

          {/* {selectedUsers} */}
          <br></br>
          {search !== "" ? (
            <Paper className={classes.paper}>
              <List
                component="nav"
                className={classes.root}
                aria-label="contacts"
              >
                {users.length > 0 ? (
                  users.map((user, index) => {
                    return (
                      <ListItem
                        button
                        key={index}
                        style={{ display: "flex" }}
                        onClick={() => addToSelect(user)}
                      >
                        <ListItemIcon>
                          <Avatar
                            src={user.image}
                            className={classes.avatar}
                          ></Avatar>
                        </ListItemIcon>
                        <ListItemText
                          primary={user.name}
                          secondary={user.email}
                        />
                      </ListItem>
                    );
                  })
                ) : (
                  <Typography style={{ textAlign: "center" }}>
                    No users found
                  </Typography>
                )}
              </List>
            </Paper>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEvent} color="primary">
            Cancel
          </Button>
          <Button
            onClick={submitSelectedUsers}
            color="primary"
            disabled={selectedUsers.length === 0}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
