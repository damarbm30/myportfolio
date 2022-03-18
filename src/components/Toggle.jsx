import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";
import "./Toggle.css";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src="img/sun.png" alt="" className="toggle-icon" />
      <img src="img/moon.png" alt="" className="toggle-icon" />
      <div
        className="toggle-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? -1 : 26 }}
      ></div>
    </div>
  );
};

export default Toggle;
