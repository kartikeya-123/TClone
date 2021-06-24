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
    width: "180px",
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
    bottom: "15%",
    right: "5%",
    height: "180px",
  },
  localVideoLayout: {
    width: "100%",
    height: "100%",
  },
});

export default componentStyles;
