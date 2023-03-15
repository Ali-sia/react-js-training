import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import css from "./ColorFlipper.module.css";

const ColorFlipper = () => {
  const [colorValue, setColorValue] = useState("#ffffff");
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";

  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleClick = () => {
    setColorValue(getRandomHexColor());
  };

  return (
    <div className={css.colorFlipper} style={{ backgroundColor: colorValue }}>
      <NavLink to={backLinkHref}>Back to list</NavLink>
      <div className={css.colorFlipper_holder}>
        <p className={css.colorFlipper_description}>Color is {colorValue}</p>
        <button
          className={css.colorFlipper_button}
          type="button"
          onClick={handleClick}
        >
          Change background color
        </button>
      </div>
    </div>
  );
};

export default ColorFlipper;
