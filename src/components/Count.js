import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  increamentByDoubleOfAmount,
  counterSelector,
} from "../redux/slices/couterSlice";

export const Count = () => {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState();
  const amount = Number(incrementAmount) || 0;
  // const count = useSelector(counterSelector);
  const count = useSelector((state) => state?.count?.count);
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <label>Increment Amount</label>
      <input
        type={"text"}
        name="increamentAmount"
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <br />
      <p>{amount}</p>
      <button onClick={() => resetAll()}>reset all</button>
      <button onClick={() => dispatch(increamentByDoubleOfAmount(amount))}>
        add double of amount
      </button>
    </div>
  );
};

export default Count;
