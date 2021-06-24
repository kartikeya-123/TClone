import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import QueueIcon from "@material-ui/icons/Queue";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddMember from "./AddMember";

const menuItems = [
  {
    icon: QueueIcon,
    itemName: "Add member",
    id: 0,
  },
  {
    icon: QueueIcon,
    itemName: "Leave team",
    id: 1,
  },
  {
    icon: QueueIcon,
    itemName: "Edit Team",
    id: 2,
  },
];

const MenuBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAddMember, showAddModal] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEvent = (menuItemId) => {
    if (menuItemId === 0) {
      showAddModal((showAddMember) => !showAddMember);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {menuItems.map((menuItem) => (
          <MenuItem
            style={{ display: "flex" }}
            key={menuItem.id}
            onClick={() => handleEvent(menuItem.id)}
          >
            <ListItemIcon style={{ color: "blue" }}>
              <QueueIcon />
            </ListItemIcon>
            <ListItemText>{menuItem.itemName}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <AddMember show={showAddMember} handleEvent={() => handleEvent(0)} />
    </div>
  );
};

export default MenuBox;
