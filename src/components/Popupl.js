import React from "react";
import "./Popupl.css";
const Popupl = (props) => {
  return props.trigger ? (
    <div className="popupl">
      <div className="popupl-inner">
        <button
          className="close-btn btn"
          onClick={() => props.setTrigger(false)}
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

export default Popupl;
