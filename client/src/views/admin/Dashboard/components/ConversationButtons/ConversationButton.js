import React from "react";
import { IconButton } from "@material-ui/core";
const styles = {
  button: {
    width: "50px",
    height: "50px",
    borderRadius: "40px",
    border: "2px solid #e6e5e8",
    textDecoration: "none",
    backgroundColor: "#282C34",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "10px",
    boxShadow: "none",
    borderImage: "none",
    borderStyle: "none",
    borderWidth: "0px",
    outline: "none",
    cursor: "pointer",
  },
};

const ConversationButton = (props) => {
  const { onClickHandler } = props;
  return (
    <IconButton style={styles.button} onClick={onClickHandler}>
      {props.children}
    </IconButton>
  );
};

export default ConversationButton;
