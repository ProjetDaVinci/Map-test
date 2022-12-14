import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PointsAdd, PointsType } from "./types";

const initialState: PointsType[] = [] as PointsType[];

const PointSlice = createSlice({
  initialState,
  name: "points",
  reducers: {
    addPoint(state, { payload }: PayloadAction<PointsAdd>) {
      if (payload) {
        const Obj = {
          id: state.length + 1 + Math.floor(Math.random() * 100),
          coords: payload.coords,
          descr: payload.descr,
          title: payload.title,
        };
        state.unshift(Obj);

        return state;
      }
    },
    deletePoint(state, { payload }: PayloadAction<number>) {
      if (payload) {
        const index = state.findIndex((n) => n.id === payload);
        if (index !== -1) {
          state.splice(index, 1);
          return state;
        }
      }
      return state;
    },
  },
});

const reducer = PointSlice.reducer;
const actions = { ...PointSlice.actions };

export { reducer, actions };
