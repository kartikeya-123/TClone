import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import componentStyles from "assets/theme/components/header";

const useStyles = makeStyles(componentStyles);

export default function AddMember({ show, handleEvent }) {
  const classes = useStyles();

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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEvent} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEvent} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
