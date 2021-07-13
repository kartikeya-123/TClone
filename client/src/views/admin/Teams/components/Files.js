import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import {
  Card,
  makeStyles,
  Grid,
  Box,
  Typography,
  CircularProgress,
  Container,
  CardHeader,
  CardContent,
  Button,
  Divider,
  FormControl,
  FilledInput,
  Chip,
  Avatar,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Table,
  TableBody,
  Paper,
} from "@material-ui/core";

import EventIcon from "@material-ui/icons/Event";

import AddRoundedIcon from "@material-ui/icons/AddRounded";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DescriptionIcon from "@material-ui/icons/Description";
import axios from "axios";
import folderImage from "assets/img/Logo/folderImg.png";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import { getDate } from "components/Custom/Date";
const useStyles = makeStyles(componentStyles);

const Files = ({ user, teamId }) => {
  const classes = useStyles();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [submittedFiles, setSubmittedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedFile, setSubmittedFile] = useState("");

  const getFiles = () => {
    //console.log(teamId);
    axios
      .get(`/api/v1/team/files/${teamId}`)
      .then((res) => {
        //console.log(res.data);
        let data = res.data.files.files;
        for (let i of Object.keys(data)) {
          data[i].fileUrl = "";
        }
        setSubmittedFiles(data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const selectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post(`/api/v1/team/submitFile/${teamId}`, formData)
      .then((res) => {
        //console.log(res.data);
        // setSubmittedFile(res.data.data);
        // setSubmitted(true);
        let fileData = res.data.file;
        fileData.fileUrl = "";
        const teamFiles = [...submittedFiles, fileData];
        setSelectedFile("");
        setSubmittedFiles(teamFiles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openSubmittedFile = (index) => {
    axios
      .get(`/api/v1/team/file/open/${submittedFiles[index].fileName}`, {
        withCredentials: true,
        responseType: "arraybuffer",
      })
      .then((response) => {
        ////console.log(response.data);
        // ////console.log(response);
        const file = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        submittedFiles[index].fileUrl = fileURL;
        setSubmittedFiles(submittedFiles);
        window.open(fileURL);
      });
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  useEffect(() => {
    //console.log(teamId);
    getFiles();
  }, []);

  const teacherView = (
    <Box component="span" m={1}>
      <br />
      {submittedFiles && submittedFiles.length > 0 ? (
        <>
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Submitted Files
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Modified </TableCell>
                  <TableCell>Modified By</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submittedFiles.map((file, ind) => {
                  return (
                    <TableRow>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          if (file.fileUrl === "") openSubmittedFile(ind);
                          else window.open(file.fileUrl);
                        }}
                      >
                        {file.originalName}
                      </TableCell>
                      <TableCell>{getDate(file.createdAt)}</TableCell>
                      <TableCell>
                        <Typography style={{ padding: "0px" }}>
                          &nbsp;{file.submittedBy.name}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div>
          <img src={folderImage} alt="Folder" className={classes.image}></img>
          <Typography
            style={{
              textAlign: "center",
            }}
          >
            No files submitted
          </Typography>
        </div>
      )}
    </Box>
  );

  const fileUploadButton = (
    <div>
      <FormControl variant="filled" width="100%">
        <FilledInput
          type="file"
          name="file"
          id="upload-file"
          onChange={selectFile}
          className="file-upload"
          style={{ display: "none" }}
        />
      </FormControl>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="upload-file">
          <Button
            variant="outlined"
            component="span"
            className={classes.button}
            style={{ width: "130px" }}
          >
            Upload File
          </Button>
        </label>
        {selectedFile ? (
          <>
            <Typography
              style={{
                marginLeft: "10px",
                overflow: "hidden",
              }}
            >
              {selectedFile.name}
            </Typography>
            <Button onClick={(event) => submitFile(event)}>Submit</Button>
          </>
        ) : null}
      </div>
    </div>
  );
  return (
    <>
      {!isLoading ? (
        <Container
          maxWidth={false}
          component={Box}
          marginTop="1rem"
          //   classes={{ root: classes.containerRoot }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
        >
          <Grid
            container
            style={{
              width: "100%",
            }}
            component={Box}
          >
            <Grid item xs={12}>
              <Card
                classes={{
                  root: classes.cardRoot,
                }}
                style={{
                  backgroundColor: "#FEFEFE",
                }}
              >
                <CardContent>
                  {fileUploadButton}
                  {/* <Divider style={{ marginTop: "20px" }} /> */}
                  <Box component="span" m={1}>
                    {submittedFiles ? teacherView : <div>No files present</div>}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "40px 0px",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default Files;
