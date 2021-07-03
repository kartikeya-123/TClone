import React from "react";
import MenuBox from "./Menu";
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Avatar,
  Container,
  Menu,
} from "@material-ui/core";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(componentStyles);

const TeamDetails = ({ Team, user }) => {
  const classes = useStyles();
  const theme = useTheme();

  const getInitials = (name) => {
    let arr = name.split(" ");

    let str;
    if (arr.length > 1) str = arr[0][0] + "" + arr[1][0];
    else str = arr[0][0] + arr[0][1];

    return str;
  };
  return (
    <Card
      classes={{
        root: classes.cardRoot,
      }}
      style={{
        height: "100vh",
        borderRadius: "0px",
        width: "min(300px,80vw)",
      }}
    >
      <CardHeader
        style={{
          minHeight: "140px",
          border: 0,
        }}
        subheader={
          <Box>
            <Box component={Container}>
              <Avatar variant="square" className={classes.square}>
                {getInitials(Team.Name)}
              </Avatar>
            </Box>
            <Box
              component={Typography}
              variant="h2"
              className={classes.textUppercase}
              marginBottom="1rem!important"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box
                component="span"
                style={{
                  textAlign: "center",
                }}
              >
                {Team.Name}
              </Box>
              <Box>
                <MenuBox Team={Team} user={user} />
              </Box>
            </Box>

            <Box
              component={Typography}
              variant="h5"
              letterSpacing=".0625rem"
              marginBottom=".25rem!important"
            >
              <Box
                component="span"
                color={theme.palette.gray[400]}
                style={{ fontSize: "16px", color: "grey" }}
              >
                {Team.Description}
              </Box>
            </Box>
          </Box>
        }
        classes={{ root: classes.cardHeaderRoot }}
      ></CardHeader>
      <CardContent
        classes={{ root: classes.cardHeaderRoot }}
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
        }}
      >
        <Avatar
          style={{
            width: "35px",
            height: "35px",
            marginRight: "10px",
          }}
          src={Team.Owner.image}
        />
        <Typography>{Team.Owner.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default TeamDetails;
