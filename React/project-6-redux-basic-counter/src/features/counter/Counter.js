import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { useState } from "react";

export default function Counter() {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        className="d-block"
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}>
        Add Amount
      </button>
      <button onClick={() => dispatch(decrementByAmount(Number(amount) || 0))}>
        Subtract Amount
      </button>
      <button
        onClick={() => {
          setAmount(0);
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}
