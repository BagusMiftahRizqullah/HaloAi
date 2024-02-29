import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true,
  username: "namesss",
  uid: "dasdsadasdasd",
  isModerator: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "logindasdsadasdasd",
          isModerator: false,
        },
      };
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
