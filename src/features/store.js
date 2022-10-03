import { configureStore } from "@reduxjs/toolkit";
import jobMakerReducer from "./JobMaker/jobMakerSlice";
import monthReducer from "./Month/monthSlice";

export default configureStore({
  reducer: {
    jobMaker: jobMakerReducer,
    month: monthReducer,
  },
});
