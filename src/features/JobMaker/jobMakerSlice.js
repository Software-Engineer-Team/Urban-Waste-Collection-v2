import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pos: {
    x: 0,
    y: 0,
  },
  isTranslateRight: false,
  isMaking: false,
};

const jobMakerSlice = createSlice({
  name: "jobMaker",
  initialState,
  reducers: {
    isMakingTurnOn: {
      reducer: (state) => {
        state.isMaking = true;
      },
    },
    isMakingTurnOff: {
      reducer: (state) => {
        state.isMaking = false;
      },
    },
    jobMakerPreMounted: {
      reducer: (state, action) => {
        const { posX, posY, isTranslateRight } = action.payload;
        state.isMaking = true;
        state.pos = {
          x: posX,
          y: posY,
        };
        state.isTranslateRight = isTranslateRight;
      },
      prepare: (posX, posY, isTranslateRight) => {
        return {
          payload: {
            posX,
            posY,
            isTranslateRight,
          },
        };
      },
    },
  },
});

export const { isMakingTurnOn, isMakingTurnOff, jobMakerPreMounted } =
  jobMakerSlice.actions;
export default jobMakerSlice.reducer;
