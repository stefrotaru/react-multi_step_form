import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscriptionType: "Arcade",
  subscriptionPrice: "9",
  subscriptionRenewalInterval: "1", // (1-12; Actually this will always be 1)
  subscriptionRenewalIntervalUnit: "Monthly", // (Month || Year)
};

// Reducer function

const formPlanReducer = createSlice({
  name: "formPlan",
  initialState: initialState,
  reducers: {
    updatePlan: (state = initialState, action) => {
      return {
        ...state,
        subscriptionType: action.payload.subscriptionType,
        subscriptionPrice: action.payload.subscriptionPrice,
        subscriptionRenewalInterval: action.payload.subscriptionRenewalInterval,
        subscriptionRenewalIntervalUnit: action.payload.subscriptionRenewalIntervalUnit,
      };
    },
    updatePeriodUnit: (state = initialState, action) => {
      return {
        ...state,
        subscriptionPrice: action.payload.subscriptionPrice,
        subscriptionRenewalIntervalUnit: action.payload.subscriptionRenewalIntervalUnit,
      };
    },
    updatePlanType: (state = initialState, action) => {
      return {
        ...state,
        subscriptionType: action.payload.subscriptionType,
        subscriptionPrice: action.payload.subscriptionPrice,
      };
    },
    restartFormPlan: () => {
      return initialState;
    }
  },
});

export const { updatePlan, updatePeriodUnit, updatePlanType, restartFormPlan } = formPlanReducer.actions;
export default formPlanReducer.reducer;
