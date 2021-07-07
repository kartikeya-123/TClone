import React, { useState } from "react";
import componentStyles from "assets/theme/views/admin/profile.js";
import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Grid,
  Box,
  FormGroup,
  FilledInput,
  FormLabel,
  FormControl,
  Divider,
  NativeSelect,
  InputBase,
} from "@material-ui/core";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
const useStyles = makeStyles(componentStyles);

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const CreateTeam = ({ user, createTeam, redirectToCall }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const privacyStates = {
    private: "Only team owners can add members to the team",
    public: "Anyone in the team can add members to the team",
  };
  const privacyActions = [privacyStates.private, privacyStates.public];

  const [values, setValues] = useState({
    Name: "",
    Description: "",
    privacy: privacyStates.private,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const sendDataTeam = () => {
    const data = {
      Name: values.Name,
      Description: values.Description,
      privacy: values.privacy === privacyStates.private ? true : false,
      Owner: user,
    };
    createTeam(data);
    handleClose();
  };

  let formDialog = (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle>
        {" "}
        <Grid
          container
          component={Box}
          alignItems="center"
          justifyContent="space-between"
          classes={{ root: classes.cardHeaderRoot }}
        >
          <Grid item xs="auto">
            <Box component={Typography} variant="h3" marginBottom="0!important">
              Create your team
            </Box>
            <br />
          </Grid>
          <Grid item xs="auto">
            <Box
              component={Typography}
              variant="h5"
              marginBottom="0!important"
              style={{ color: "#707070" }}
            >
              Collaborate closely with a group of people inside your
              organization based on project, initiative, or common interest
            </Box>
            <br />
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent style={{ paddingTop: "5px" }}>
        <div>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <FormGroup>
                <FormLabel>Team name</FormLabel>
                <FormControl
                  variant="filled"
                  width="100%"
                  style={{
                    marginBottom: "1rem!important",
                  }}
                  required
                >
                  <FilledInput
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                    }}
                    type="text"
                    required
                    label="Team Name"
                    name="Name"
                    onChange={handleChange}
                    value={values.Name}
                    classes={{ input: classes.searchInput }}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <FormGroup>
                <FormLabel>Team Description</FormLabel>
                <FormControl
                  variant="filled"
                  width="100%"
                  styles={{ marginBottom: "1rem!important" }}
                >
                  <FilledInput
                    style={{
                      paddingLeft: "0.75rem",
                      paddingRight: "0.75rem",
                    }}
                    classes={{ input: classes.searchInput }}
                    type="text"
                    value={values.Description}
                    label="Description"
                    name="Description"
                    onChange={handleChange}
                    placeholder="Let people know what this is about"
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
        </div>
        <Box
          component={Divider}
          marginBottom="0.8rem!important"
          marginTop="0.8rem!important"
        />
        {/* <Box
                component={Typography}
                variant="h6"
                color={theme.palette.gray[600] + "!important"}
                paddingTop=".25rem"
                paddingBottom=".25rem"
                fontSize=".75rem!important"
                letterSpacing=".04em"
                marginBottom="1.5rem!important"
                classes={{ root: classes.typographyRootH6 }}
              >
                Teacher Information
              </Box> */}
        <div>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <FormGroup>
                <FormLabel>Privacy</FormLabel>
                <FormControl
                  variant="filled"
                  width="100%"
                  styles={{ marginBottom: "1rem!important" }}
                >
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={values.privacy}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                    name="privacy"
                  >
                    {privacyActions.map((state, ind) => (
                      <option value={state} id={ind}>
                        {state}
                      </option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={sendDataTeam}
          color="primary"
          disabled={values.Name === "" || values.Description === ""}
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
  return (
    <>
      <Button
        className={classes.buttonContainedInfo}
        startIcon={<CallIcon className={classes.icon} />}
        onClick={redirectToCall}
      >
        <Typography style={{ fontSize: "14px" }}>Call others</Typography>
      </Button>
      <Button
        className={classes.buttonContainedInfo}
        onClick={handleOpen}
        startIcon={<GroupAddIcon className={classes.icon} />}
      >
        <Typography style={{ fontSize: "14px" }}>Create a new team</Typography>
      </Button>
      {formDialog}
    </>
  );
};

export default CreateTeam;
