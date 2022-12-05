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
  isFetching: false,
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
    setJanitorTasks: {
      reducer: (state, action) => {
        state.janitorTasks = action.payload.janitorTasks;
        state.type = action.payload.type;
        state.isFetching = false;
      },
    },
    setCollectorTasks: {
      reducer: (state, action) => {
        state.collectorTasks = action.payload.collectorTasks;
        state.type = action.payload.type;
        state.isFetching = !state.isFetching;
      },
    },
    toggleIsFetching: {
      reducer: (state) => {
        state.isFetching = !state.isFetching;
      },
    },
  },
});

export const {
  isMakingTurnOn,
  isMakingTurnOff,
  jobMakerPreMounted,
  setJanitorTasks,
  setCollectorTasks,
  toggleIsFetching,
} = jobMakerSlice.actions;
export default jobMakerSlice.reducer;
