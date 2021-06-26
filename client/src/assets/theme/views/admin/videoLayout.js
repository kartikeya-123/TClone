import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
    width: "83vw",
    height: "100vh",
    marginLeft: "10px",
  },
  layout: {
    width: "100%",
    height: "100%",
    alignItems: "left",
    backgroundColor: "#1B1A1A",
    top: "100px",
  },

  gridLayout: {
    width: "150px",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    bottom: "15%",
    right: "5%",
    height: "140px",
  },
  localVideoLayout: {
    width: "100%",
    height: "100%",
  },
  videoCallGridLayout: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: "20px",
    marginRight: "20px",
  },
});

export default componentStyles;
