import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscriptionType: "",
  subscriptionPrice: "",
  subscriptionRenewalInterval: "", // (1-12; Actually this will always be 1)
  subscriptionRenewalIntervalUnit: "", // (Month || Year)
};

// Reducer function

const formPlanReducer = createSlice({
  name: "formPlan",
  initialState: initialState,
  reducers: {
    updatePlan: (state = initialState, action) => {
      console.log("action", action);
      return {
        ...state,
        subscriptionType: action.payload.subscriptionType,
        subscriptionPrice: action.payload.subscriptionPrice,
        subscriptionRenewalInterval: action.payload.subscriptionRenewalInterval,
        subscriptionRenewalIntervalUnit:
          action.payload.subscriptionRenewalIntervalUnit,
      };
    },
  },
});

export const { updatePlan } = formPlanReducer.actions;
export default formPlanReducer.reducer;
