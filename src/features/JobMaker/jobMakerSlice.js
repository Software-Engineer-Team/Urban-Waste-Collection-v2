import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pos: {
    x: 0,
    y: 0,
  },
  isTranslateRight: false,
  isMaking: false,
  janitorTasks: [],
  collectorTasks: [],
  type: "",
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
        const {
          posX,
          posY,
          isTranslateRight,
          type,
          janitorTasks,
          collectorTasks,
        } = action.payload;
        state.isMaking = true;
        state.pos = {
          x: posX,
          y: posY,
        };
        state.isTranslateRight = isTranslateRight;
        state.janitorTasks = janitorTasks;
        state.collectorTasks = collectorTasks;
        state.type = type;
      },
      prepare: (
        posX,
        posY,
        isTranslateRight,
        type,
        janitorTasks,
        collectorTasks
      ) => {
        return {
          payload: {
            posX,
            posY,
            isTranslateRight,
            janitorTasks,
            collectorTasks,
            type,
          },
        };
      },
    },
  },
});

export const { isMakingTurnOn, isMakingTurnOff, jobMakerPreMounted } =
  jobMakerSlice.actions;
export default jobMakerSlice.reducer;
