import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    addonName: "",
    addonPrice: "",
    addonRenewalInterval: "", // (1-12; Actually this will always be 1)
    addonRenewalIntervalUnit: "", // (Month || Year; Will only be monthly but what the hell)
  },
];

// Reducer function

const formAddonsReducer = createSlice({
  name: "formAddons",
  initialState: initialState,
  reducers: {
    updateAddons: (state = initialState, action) => {
      console.log("action", action);
      return [
        ...state,
        {
          addonName: action.payload.addonName,
          addonPrice: action.payload.addonPrice,
          addonRenewalInterval: action.payload.addonRenewalInterval,
          addonRenewalIntervalUnit: action.payload.addonRenewalIntervalUnit,
        },
      ];
    },
  },
});

export const { updateAddons } = formAddonsReducer.actions;
export default formAddonsReducer.reducer;
