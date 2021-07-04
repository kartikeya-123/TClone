import React, { useEffect } from "react";
import useSound from "use-sound";
import { Howl, Howler } from "howler";
import ReactHowler from "react-howler";
import { useHistory, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Grid } from "@material-ui/core";
import {
  acceptIncomingCallRequest,
  rejectIncomingCallRequest,
  getLocaleStream,
} from "utils/websocketclient/clientSocket";
import componentStyles from "assets/theme/components/dialog";
import { makeStyles } from "@material-ui/core";
import sound from "./../../../../../assets/sounds/hangouts_video_call.mp3";
const useStyles = makeStyles(componentStyles);

export default function IncomingCallDialog({ show, caller, localStream }) {
  const [open, setOpen] = React.useState(show);
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    if (localStream == null) getLocaleStream();
    SoundPlay();
  }, []);

  let Sounds = null;
  const SoundPlay = () => {
    Sounds = new Howl({
      src: sound,
      html5: true, // A live stream can only be played through HTML5 Audio.
      format: ["mp3", "aac"],
    });
    Sounds.play();
    console.log("sound");
  };
  const handleAcceptButtonPressed = () => {
    // accept the call

    acceptIncomingCallRequest();
    if (location.pathname !== "/call") {
      history.push("/call");
    }
  };

  const handleRejectButtonPressed = () => {
    // accept the call
    if (Sounds) {
      console.log("present");
    }
    rejectIncomingCallRequest();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={0} className={classes.gridLayout}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          classes={{ paper: classes.root }}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Getting a call from {caller}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAcceptButtonPressed} color="primary">
              Accept
            </Button>
            <Button
              onClick={handleRejectButtonPressed}
              color="primary"
              autoFocus
            >
              Reject
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}
