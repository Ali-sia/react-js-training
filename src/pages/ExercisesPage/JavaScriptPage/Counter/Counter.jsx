import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

// import css from "./ColorFlipper.module.css";

const Counter = () => {
  const location = useLocation();

  const [count, setCount] = useState(0);

  const backLinkHref = location.state?.from ?? "/home";

  const incrementCount = () => {
    setCount((prevState) => prevState + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const decrementCount = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div>
      <NavLink to={backLinkHref}>Back to list</NavLink>
      <div>
        <p>Count: {count}</p>
        <div>
          <button type="button" onClick={incrementCount}>
            increment
          </button>
          <button type="button" onClick={resetCount}>
            reset
          </button>
          <button type="button" onClick={decrementCount}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
