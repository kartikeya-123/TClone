import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    minHeight: 400,
  },
  gridList: {
    // minHeight: "30vh",
    maxHeight: "50vh",
  },
  image: {
    width: "30px",
    height: "30px",
  },
  messageCard: {
    backgroundColor: "#ebebeb",
    display: "inline-block",
    padding: "10px",
  },
  messageCardRight: {
    marginLeft: "50%",
    backgroundColor: "#E9EAF6",
    display: "inline-block",
    padding: "10px",
  },
  imageLayout: {
    justifyContent: "right",
  },
  gridLayout: {
    alignItems: "right",
  },
  span: {
    color: "#5F5F5F",
    float: "right",
    fontSize: "12px",
    textDecoration: "transparent",
    fontWeight: 400,
  },
  gridItemRoot: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important",
    },
    width: "40%",
    position: "absolute",
    right: "2%",
    top: "20%",
  },
  gridItemRoot2: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important",
    },
    width: "70%",
    position: "absolute",
    right: "2%",
    top: "15%",
  },
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important",
  },
  searchInput: {
    color: "black",
    backgroundColor: "#ffffff",
    boxShadow: "none",
    padding: "10px",
    "&::placeholder": {
      color: theme.palette.dark[200],
      fontSize: "1rem",
    },
    borderRadius: "20px 20px",
  },
  cardActions: {
    display: "inline",
  },
});

export default componentStyles;
