import React, { useEffect } from "react";

import "./CallRejectedDialog.css";

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    setTimeout(() => {
      const callRejected = {
        rejected: false,
        reason: "",
      };
      hideCallRejectedDialog(callRejected);
    }, [3000]);
  }, []);
  return (
    <div className="call_rejected_dialog background_secondary_color">
      <span>{reason}</span>
    </div>
  );
};

export default CallRejectedDialog;
