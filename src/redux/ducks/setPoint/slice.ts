import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PointsType } from "./types";

const initialState: PointsType = {} as PointsType;

const SetPointSlice = createSlice({
  initialState,
  name: "setPoint",
  reducers: {
    changePoint(state, { payload }: PayloadAction<PointsType>) {
      if (payload) {
        if (payload.coords !== undefined) {
          state = payload;
          return state;
        }
      }
      return state;
    },
  },
});

const reducer = SetPointSlice.reducer;
const actions = { ...SetPointSlice.actions };

export { reducer, actions };
