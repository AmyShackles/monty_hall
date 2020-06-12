import React from "react";
import ReactDOM from "react-dom";

const Prompt = ({ children }) =>
  ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );

export { Prompt };
