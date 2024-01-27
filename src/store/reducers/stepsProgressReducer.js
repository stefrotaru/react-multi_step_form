import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: false,
  selectPlan: false,
  selectAddons: false,
  summary: false,
};

// Reducer function

const stepsProgressReducer = createSlice({
  name: "stepsProgress",
  initialState: initialState,
  reducers: {
    updateStep: (state = initialState, action) => {
      return {
        ...state,
        [action.payload.step]: action.payload.value,
      };
    },
    restartSteps: () => {
      return initialState;
    },
  },
});

export const { updateStep, restartSteps } = stepsProgressReducer.actions;
export default stepsProgressReducer.reducer;
