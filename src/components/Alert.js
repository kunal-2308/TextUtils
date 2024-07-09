import React from "react";

function Alert(props) {
  return (
    <>
      <div className={props.warningURL} role="alert">
        {props.alert}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
