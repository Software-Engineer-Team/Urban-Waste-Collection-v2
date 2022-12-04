import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Unknown",
  imgUrl: "",
  roles: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.imgUrl = action.payload.imgUrl;
      state.roles = action.payload.roles;
    },
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
