import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// Reducer function

const formAddonsReducer = createSlice({
  name: "formAddons",
  initialState: initialState,
  reducers: {
    addAddon: (state = initialState, action) => {
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
    },
    restartAddonsArray: () => {
      return initialState;
    }
  },
});

export const { addAddon, removeAddon, restartAddonsArray } = formAddonsReducer.actions;
export default formAddonsReducer.reducer;
