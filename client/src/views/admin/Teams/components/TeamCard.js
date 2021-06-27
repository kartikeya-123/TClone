import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import componentStyles from "assets/theme/views/admin/dashboard.js";
import { Avatar } from "@material-ui/core";
const useStyles = makeStyles(componentStyles);

const TeamCard = ({ team, clicked }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      item
      style={{
        width: "340px",
        marginBottom: "20px",
        cursor: "pointer",
      }}
      component={Box}
      marginBottom="3rem!important"
      key={team._id}
      onClick={clicked}
    >
      <Card
        classes={{
          root: classes.cardRoot,
        }}
        style={{
          height: "100%",
          boxShadow: "0px 0px 1rem rgba(136,152,170,0.35)",
          border: "0!important",
        }}
      >
        <CardHeader
          style={{ minHeight: "140px" }}
          subheader={
            <Box>
              <Box
                component={Typography}
                variant="h2"
                className={classes.textUppercase}
                marginBottom="1rem!important"
              >
                <Box
                  component="span"
                  style={{
                    textAlign: "center",
                  }}
                >
                  {team.Name}
                </Box>
              </Box>

              <Box
                component={Typography}
                variant="h5"
                letterSpacing=".0625rem"
                marginBottom=".25rem!important"
              >
                <Box component="span" color={theme.palette.gray[600]}>
                  {team.Description}
                </Box>
              </Box>
            </Box>
          }
          classes={{ root: classes.cardHeaderRoot }}
        ></CardHeader>
        <CardContent classes={{ root: classes.cardHeaderRoot }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
              style={{
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
              src={team.Owner.image}
            />
            <Typography>{team.Owner.name}</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamCard;
