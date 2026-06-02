import React from "react";
import { ToggleContext } from "../Context/ToggleContext";
import { createContext, useContext } from "react";
function CustomBtn() {
  const { theme, darkMode } = useContext(ToggleContext);

  return (
    <label className="switch">
      <input type="checkbox" checked={theme === "dark"} onChange={darkMode} />
      <span className="slider round"></span>
    </label>
  );
}

export default CustomBtn;
