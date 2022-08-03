import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MapsKey } from "./types";

const initialState: MapsKey = {} as MapsKey;

const MapsSlice = createSlice({
  initialState,
  name: "maps",
  reducers: {
    signOut(state) {
      //   if (state.token) {
      //     state.token = "";

      //     state.user.isAuthorized = false;
      //     state.user.password = "";
      //     state.user.email = "";
      //     state.user.id = "";
      //   }
      return state;
    },
  },
});

const reducer = MapsSlice.reducer;
const actions = { ...MapsSlice.actions };

export { reducer, actions };
