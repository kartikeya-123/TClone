import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import componentStyles from "assets/theme/components/callingModal";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

const CallingDialog = ({ recieverUsername }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.gridLayout}>
      <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentRoot}>
          <Typography>
            Calling <span> {recieverUsername}</span>{" "}
          </Typography>
          <CircularProgress className={classes.spinner} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CallingDialog;
