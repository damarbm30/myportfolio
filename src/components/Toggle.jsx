import React from "react";
import "./Toggle.css";

const Toggle = () => {
  return (
    <div className="toggle">
      <img src="img/sun.png" alt="" className="toggle-icon" />
      <img src="img/moon.png" alt="" className="toggle-icon" />
      <div className="toggle-button"></div>
    </div>
  );
};

export default Toggle;
