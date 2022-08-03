import { IAuthResponse } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthResponse = {} as IAuthResponse;

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signOut(state) {
      if (state.token) {
        state.token = "";

        state.user.isAuthorized = false;
        state.user.password = "";
        state.user.email = "";
        state.user.id = "";
      }
      return state;
    },
  },
});

const reducer = AuthSlice.reducer;
const actions = { ...AuthSlice.actions };

export { reducer, actions };
