import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important",
    width: "100%",
    height: "100%",
    backgroundColor: "initial!important",
  },
  cardContentRoot: {
    backgroundColor: "initial!important",
    color: "white",
    textAlign: "center",
    marginTop: "10%",
  },
  gridLayout: {
    position: "absolute",
    width: "300px",
    height: "200px",
    top: "calc(50% - 150px)",
    left: "calc(50% - 150px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    border: "2px solid red",
  },
  spinner: {
    marginTop: "15px",
  },
});

export default componentStyles;
