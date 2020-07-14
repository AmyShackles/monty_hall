import React from "react";
import ReactDOM from "react-dom";

const Prompt = ({ children }) =>
  ReactDOM.createPortal(
    <div className="modal" tabIndex="0">{children}</div>,
    document.getElementById("modal-root")
  );

export { Prompt };
