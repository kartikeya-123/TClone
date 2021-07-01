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
    bottom: "5%",
    left: "35px",
    height: "140px",
  },
  localVideoLayout: {
    width: "100%",
    height: "100%",
  },
  videoCallGridLayout: {
    width: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(min(200px,50vmin),1fr))",
    gridAutoRows: "minmax(min(200px , 50vmin),1fr)",
    overFlowX: "auto",
    alignItems: "center",
  },
});

export default componentStyles;
