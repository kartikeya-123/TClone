import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import QueueIcon from "@material-ui/icons/Queue";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddMember from "./AddMember";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import AlertDialog from "components/Custom/Modals/Modal";
import { level } from "jest-matcher-utils/node_modules/chalk";
const menuItems = [
  {
    icon: <GroupAddIcon />,
    itemName: "Add member",
    id: 0,
    privacy: true,
  },
  {
    icon: <QueueIcon />,
    itemName: "Leave team",
    id: 1,
    privacy: false,
  },
  {
    icon: <QueueIcon />,
    itemName: "Delete Team",
    id: 2,
    privacy: true,
  },
];

const MenuBox = ({ Team, user }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAddMember, showAddModal] = useState(false);
  const [showLeaveTeam, setShowLeaveTeam] = useState(false);
  const [showDeleteTeam, setShowDeleteTeam] = useState(false);

  const [users, setUsers] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEvent = (menuItemId) => {
    if (menuItemId === 0) {
      showAddModal((showAddMember) => !showAddMember);
    } else if (menuItemId === 1) {
      // Leave Team
      setShowLeaveTeam((showLeaveTeam) => !showLeaveTeam);
    } else if (menuItemId === 2) {
      //Delete Team
      setShowDeleteTeam((showDeleteTeam) => !showDeleteTeam);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const leaveTeam = () => {
    axios
      .patch(`/api/v1/team/leaveTeam/${Team.id}`)
      .then((response) => {
        console.log(response);
        history.push("/teams");
      })
      .catch((err) => console.log(err));
  };

  const deleteTeam = () => {
    axios
      .patch(`/api/v1/team/deleteTeam/${Team.id}`)
      .then((response) => {
        console.log(response.data);
        history.push("/teams");
      })
      .catch((err) => console.log(err));
  };

  const leaveTeamModal = (
    <AlertDialog
      title="Leave Team"
      description="Confirmation to leave team"
      handleClose={() => handleEvent(1)}
      accept={leaveTeam}
      open={showLeaveTeam}
    />
  );

  const deleteTeamModal = (
    <AlertDialog
      title="Delete Team"
      description="Confirmation to delete team"
      handleClose={() => handleEvent(2)}
      accept={deleteTeam}
      open={showDeleteTeam}
    />
  );
  return (
    <div>
      <MoreHorizIcon
        onClick={handleClick}
        style={{ height: "20px", width: "20px", cursor: "pointer" }}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((menuItem) => {
          if (menuItem.privacy) {
            if (Team.privacy && Team.Owner.email !== user.email) return null;
          }
          if (menuItem.id === 1 && Team.Owner.email === user.email) return null;
          if (menuItem.id === 2 && Team.Owner.email !== user.email) return null;

          return (
            <MenuItem
              style={{ display: "flex" }}
              key={menuItem.id}
              onClick={() => handleEvent(menuItem.id)}
            >
              <ListItemIcon
                style={{ color: "blue", marginRight: "10px", minWidth: "0px" }}
              >
                {menuItem.icon}
              </ListItemIcon>
              <ListItemText>{menuItem.itemName}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
      <AddMember
        Team={Team}
        show={showAddMember}
        handleEvent={() => handleEvent(0)}
      />
      {leaveTeamModal}
      {deleteTeamModal}
    </div>
  );
};

export default MenuBox;
