import React, { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count + 1);
  };
  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
