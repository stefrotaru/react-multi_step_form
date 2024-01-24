import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

// Reducer function

const formUserReducer = createSlice({
  name: "formUser",
  initialState: initialState,
  reducers: {
    updateFormUser: (state = initialState, action) => {
      console.log("action", action);
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    },
  },
});

export const { updateFormUser } = formUserReducer.actions;
export default formUserReducer.reducer;
