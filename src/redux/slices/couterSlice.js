import { createSlice, createSelector } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    },
    increamentByDoubleOfAmount: {
      reducer(state, action) {
        state.count += action.payload.amount;
      },
      prepare(amount) {
        return {
          payload: {
            amount: amount * 2,
          },
        };
      },
    },
  },
});
export const countSelector = (state) => state.count;
export const counterSelector = createSelector(
  countSelector,
  (state) => state?.count
);
export const { increment, decrement, reset, increamentByDoubleOfAmount } =
  counter.actions;
export default counter.reducer;
