import React, { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  const onClick = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1,

      // counter1: counter1 + 1,
      // counter2: counter2,
      // counter3: counter3,
    });
  };

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <button className="btn btn-primary" onClick={onClick}>
        +1
      </button>
    </>
  );
};
