import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  root: {
    alignItems: "left",
    justifyContent: "left",
    margin: "0px",
    height: "100vh",
  },
  layout: {
    width: "100%",
    height: "100%",
    alignItems: "left",
    backgroundColor: "#1B1A1A",
    top: "100px",
  },

  gridLayout: {
    width: "120px",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    bottom: "20px",
    left: "35px",
    height: "120px",
  },
  localVideoLayout: {
    width: "100%",
    height: "100%",
  },
  videoCallGridLayout: {
    height: "60vh",
    width: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,40vmin),1fr))",
    gridAutoRows: "minmax(min(200px , 50vmin),1fr)",
    overFlowX: "auto",
    alignItems: "center",
  },
  videoGrid: {
    marginBottom: "10px",
    maxHeight: "60vh",
    maxWidth: "100%",
  },
  localVideoGrid: {
    marginTop: "10px",
  },
  button: {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.dark.main,
    "&:hover": {
      backgroundColor: theme.palette.dark.dark,
    },
    "&:disabled": {
      border: "0",
    },
    marginTop: "20px",

    marginLeft: "20px",
  },
});

export default componentStyles;
