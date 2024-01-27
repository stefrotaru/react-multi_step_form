import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
};

// Reducer function

const formTotalPriceReducer = createSlice({
  name: "formAddons",
  initialState: initialState,
  reducers: {
    setPrice: (state = initialState, action) => {
      return {
        ...state,
        totalPrice: action.payload,
      }
    },
    restartTotalPrice: () => {
      return initialState;
    }
  },
});

export const { setPrice, restartTotalPrice } = formTotalPriceReducer.actions;
export default formTotalPriceReducer.reducer;
