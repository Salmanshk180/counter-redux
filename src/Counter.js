import React, { Fragment } from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter); // accessing the counter state

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" }); // dispatching the action
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" }); // dispatching the action
  };

  return (
    <Fragment>
      <div className="container">
        <button className="inc-btn" onClick={incrementHandler}>+</button>
        <p className="counter-value">Counter: {counter}</p>
        <button className="dec-btn" onClick={decrementHandler}>-</button>
      </div>
    </Fragment>
  );
};

export default Counter;
