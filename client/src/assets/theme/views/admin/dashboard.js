import boxShadows from "assets/theme/box-shadow.js";

const componentStyles = (theme) => ({
  gridRoot: {
    paddingTop: "0px",
    margin: "10px auto 0px auto",
    justifyContent: "space-evenly",
    width: "100%",
  },
  gridRootHeader: {
    marginLeft: "20px",
    marginTop: "40px",
  },
  cardRootBgGradient: {
    background:
      "linear-gradient(87deg," +
      theme.palette.dark.main +
      ",#1a174d)!important",
  },
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important",
  },
  cardHeaderRoot: {
    backgroundColor: "initial!important",
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
  },
  newContainerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  buttonRootUnselected: {
    background: theme.palette.white.main + "!important",
    color: theme.palette.primary.main + "!important",
  },
  gridItemRoot: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important",
    },
  },
  tableRoot: {
    marginBottom: "0!important",
  },
  tableCellRoot: {
    verticalAlign: "middle",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    borderTop: "0",
  },
  tableCellRootHead: {
    backgroundColor: theme.palette.gray[100],
    color: theme.palette.gray[600],
  },
  tableCellRootBodyHead: {
    textTransform: "unset!important",
    fontSize: ".8125rem",
  },
  borderBottomUnset: {
    borderBottom: "0!important",
  },
  linearProgressRoot: {
    height: "3px!important",
    width: "120px!important",
    margin: "0!important",
  },
  bgGradientError: {
    background:
      "linear-gradient(87deg," +
      theme.palette.error.main +
      ",#f56036)!important",
  },
  bgGradientSuccess: {
    background:
      "linear-gradient(87deg," +
      theme.palette.success.main +
      ",#2dcecc)!important",
  },
  bgGradientPrimary: {
    background:
      "linear-gradient(87deg," +
      theme.palette.primary.main +
      ",#825ee4)!important",
  },
  bgGradientInfo: {
    background:
      "linear-gradient(87deg," +
      theme.palette.info.main +
      ",#1171ef)!important",
  },
  bgGradientWarning: {
    background:
      "linear-gradient(87deg," +
      theme.palette.warning.main +
      ",#fbb140)!important",
  },
  square: {
    color: theme.palette.secondary.main,
    backgroundColor: "red",
    margin: "20px",
    height: "60px",
    width: "60px",
    textTransform: "uppercase",
    fontSize: "20px",
  },
});

export default componentStyles;
