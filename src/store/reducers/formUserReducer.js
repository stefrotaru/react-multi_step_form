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
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    },
    restartFormUser: () => {
      return initialState;
    },
  },
});

export const { updateFormUser, restartFormUser } = formUserReducer.actions;
export default formUserReducer.reducer;
