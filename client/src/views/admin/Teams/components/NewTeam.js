import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import NativeSelect from "@material-ui/core/NativeSelect";

// core components

import componentStyles from "assets/theme/views/admin/profile.js";
import Chip from "@material-ui/core/Chip";
import axios from "axios";

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

function NewTeam({ user, history }) {
  const classes = useStyles();
  const theme = useTheme();

  // //console.log(user);

  const [values, setValues] = useState({
    Name: "",
    Description: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const postCourse = (event) => {
    event.preventDefault();

    axios
      .post("/api/v1/course", { ...values })
      .then((response) => {
        alert("Successfully created course");
        history.push("/courses/all");
      })
      .catch((err) => alert("Either user email is not present"));
  };

  const form = (
    <Container
      maxWidth={false}
      component={Box}
      marginTop="-6rem"
      classes={{ root: classes.containerRoot }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          xl={8}
          component={Box}
          marginBottom="3rem"
          classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
        >
          <Card
            classes={{
              root: classes.cardRoot + " " + classes.cardRootSecondary,
            }}
          >
            <CardHeader
              subheader={
                <Grid
                  container
                  component={Box}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Box
                      component={Typography}
                      variant="h3"
                      marginBottom="0!important"
                    >
                      Create New Team
                    </Box>
                    <br />
                  </Grid>
                </Grid>
              }
              classes={{ root: classes.cardHeaderRoot }}
            ></CardHeader>
            <CardContent>
              <Box
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
                Team Details
              </Box>
              <div className={classes.plLg4}>
                <Grid container>
                  <Grid item xs={12} lg={12}>
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
                          name="courseCode"
                          onChange={handleChange}
                          placeholder="Course Id"
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
              <div className={classes.plLg4}>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <FormGroup>
                      <FormLabel>Teacher email</FormLabel>
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
                          value={values.email}
                          label="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="Email address"
                        />
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
            </CardContent>

            <Divider />
            <Box
              sx={{
                display: "center",

                p: 2,
              }}
            >
              <Button
                color="primary"
                style={{
                  marginLeft: "40%",
                  marginRight: "40%",
                  marginTop: "2%",
                  marginBottom: "2%",
                }}
                classes={{ root: classes.buttonRootDark }}
                variant="contained"
                disabled={
                  !(
                    values.name &&
                    values.courseCode &&
                    values.branch &&
                    values.year &&
                    values.email
                  )
                }
                onClick={(e) => {
                  postCourse(e); // window.alert("clicked");
                }}
              >
                Submit
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );

  return <>{form}</>;
}

export default NewTeam;
