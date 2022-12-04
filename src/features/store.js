import { configureStore } from "@reduxjs/toolkit";
import jobMakerReducer from "./JobMaker/jobMakerSlice";
import monthReducer from "./Month/monthSlice";
import userReducer from "./User/userSlice";

export default configureStore({
  reducer: {
    jobMaker: jobMakerReducer,
    month: monthReducer,
    user: userReducer,
  },
});
