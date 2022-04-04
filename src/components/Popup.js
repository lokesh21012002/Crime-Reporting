import React from "react";
import "./Popup.css";
const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn btn btn-primary"
          onClick={() => {
            props.setTrigger(false);
            // props.setA("");
          }}
        >
          Close
        </button>{" "}
        {props.children}{" "}
      </div>{" "}
    </div>
  ) : (
    <></>
  );
};

export default Popup;
