const componentStyles = (theme) => ({
  header: {
    position: "relative",
    // background:
    //   "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
    paddingBottom: "1rem",
    paddingTop: "4rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "2rem",
    },
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px",
    },
    heading: {
      fontSize: "40px",
      color: "red",
    },
  },
});

export default componentStyles;
