import { configureStore } from "@reduxjs/toolkit";
import jobMakerReducer from "./jobMaker/jobMakerSlice";

export default configureStore({
  reducer: {
    jobMaker: jobMakerReducer,
  },
});
