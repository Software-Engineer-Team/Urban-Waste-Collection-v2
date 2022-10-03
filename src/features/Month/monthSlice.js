import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: dayjs().month(),
};

const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    monthIndexDecrement(state) {
      state.monthIndex--;
    },
    monthIndexIncrement(state) {
      state.monthIndex++;
    },
  },
});

export default monthSlice.reducer;

export const { monthIndexIncrement, monthIndexDecrement } = monthSlice.actions;
