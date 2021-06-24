//React
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

//O Auth
import { GoogleLogout } from "react-google-login";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

// @material-ui/icons components
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import Person from "@material-ui/icons/Person";
import { disconnectSocket } from "utils/websocketclient/clientSocket.js";
// core components
import componentStyles from "../../assets/theme/components/navbar-dropdown.js";

const useStyles = makeStyles(componentStyles);

export default function NavbarDropdown({ user, cookies, logOut }) {
  const history = useHistory();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    logOut(true);
    axios
      .post("/api/v1/auth/logout", {
        withCredentials: true,
      })
      .then((res) => {
        cookies.remove("isLoggedIn", { path: "/" });
        cookies.remove("userData", { path: "/" });
        window.location.reload(false);
        disconnectSocket();
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to log out. Try again later");
      });
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant="h6"
        component="h6"
        classes={{ root: classes.menuTitle }}
      >
        Welcome!
      </Typography>
      <Box
        display="flex!important"
        alignItems="center!important"
        component={MenuItem}
        onClick={() => {
          handleMenuClose();
          history.push("/user-profile");
        }}
      >
        <Box
          component={Person}
          width="1.25rem!important"
          height="1.25rem!important"
          marginRight="1rem"
        />
        <span>My profile</span>
      </Box>

      <Divider component="div" classes={{ root: classes.dividerRoot }} />
      <GoogleLogout
        clientId="814516511786-nucvcmf3osa464saoshkeg2ma2slfuqa.apps.googleusercontent.com"
        buttonText="LOG OUT"
        render={(renderProps) => (
          <Box
            display="flex!important"
            alignItems="center!important"
            component={MenuItem}
            onClick={renderProps.onClick}
          >
            <Box
              component={DirectionsRun}
              width="1.25rem!important"
              height="1.25rem!important"
              marginRight="1rem"
            />
            <Button
              disableElevation
              disableRipple
              disableFocusRipple
              disableTouchRipple
              style={{ textAlign: "left", padding: "0px" }}
            >
              Sign Out
            </Button>
          </Box>
        )}
        onLogoutSuccess={() => {
          logout();
        }}
        icon={false}
        style={{
          color: "black",
          boxSizing: "inherit",
        }}
      ></GoogleLogout>
    </Menu>
  );

  return (
    <>
      <Button
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt="..."
          src={user ? user.image : null}
          classes={{
            root: classes.avatarRoot,
          }}
        />
        <Hidden smDown>{user ? user.name : null}</Hidden>
      </Button>
      {renderMenu}
    </>
  );
}
