import { IAuthReg, IAuthResponse, User } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {} as User;

const AuthSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    signOut(state) {
      if (state.token) {
        state = initialState;
      }
      return state;
    },
    signIn(state, { payload }: PayloadAction<IAuthReg>) {
      if (payload) {
        const user = {
          email: payload.login,
          password: payload.password,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NzU3ODQ0MzYsImlkIjo4Mn0.V4gybKIt9UsBxHCGJZk4CsxQHfAXRnAcvndTHZ2CdE",
        };
        state = user;
        return state;
      }
      return state;
    },
  },
});

const reducer = AuthSlice.reducer;
const actions = { ...AuthSlice.actions };

export { reducer, actions };
