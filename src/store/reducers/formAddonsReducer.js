import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   addonName: "",
  //   addonPrice: "",
  //   addonRenewalInterval: "", // (Month || Year; Will only be monthly but what the hell)
  // },
];

// Reducer function

const formAddonsReducer = createSlice({
  name: "formAddons",
  initialState: initialState,
  reducers: {
    addAddon: (state = initialState, action) => {
      console.log("action", action);
      return [
        ...state,
        {
          addonName: action.payload.addonName,
          addonPrice: action.payload.addonPrice,
          addonRenewalInterval: action.payload.addonRenewalInterval,
        },
      ];
    },
    removeAddon: (state = initialState, action) => {
      return state.filter((addon) => addon.addonName !== action.payload.addonName);
    }
  },
});

export const { addAddon, removeAddon } = formAddonsReducer.actions;
export default formAddonsReducer.reducer;
