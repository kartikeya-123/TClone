import React, { useEffect } from "react";
import componentStyles from "assets/theme/components/callingModal";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles(componentStyles);

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  const classes = useStyles();
  const showRejectedMessage = () => {
    setTimeout(() => {
      const callRejected = {
        rejected: false,
        reason: "",
      };
      hideCallRejectedDialog(callRejected);
    }, [3000]);
  };

  useEffect(() => {
    showRejectedMessage();
  }, []);

  return (
    <Grid container spacing={0} className={classes.gridLayout}>
      <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContentRoot}>
          <Typography>{reason}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CallRejectedDialog;
