const componentStyles = (theme) => ({
  gridLayout: {
    position: "absolute",
    width: "250px",
    height: "200px",
    top: "calc(50% - 150px)",
    left: "calc(50% - 150px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
  },
  root: {
    backgroundColor: "#282727",
    color: "red",
    textAlign: "center",
  },
  dialogHeader: {
    display: "flex",
    padding: "1.25rem",
    borderTopLeftRadius: ".4375rem",
    borderTopRightRadius: ".4375rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dialogTitle: {
    fontSize: "1.0625rem",
    marginBottom: "0",
  },
  dialogHeading: {
    fontSize: ".95rem",
    fontWeight: 600,
    letterSpacing: ".025em",
    textTransform: "uppercase",
    marginTop: "1.5rem!important",
  },
  dialogNotification: {
    color: theme.palette.white.main,
    background:
      "linear-gradient(87deg," +
      theme.palette.error.main +
      " 0," +
      theme.palette.error.dialogNotification +
      " 100%)!important",
    "& $dialogHeading, & $dialogTitle": {
      color: theme.palette.white.main,
    },
  },
});

export default componentStyles;
