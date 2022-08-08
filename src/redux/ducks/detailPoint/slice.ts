import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PointsType } from "./types";

const initialState: PointsType = {} as PointsType;

const detailPointSlice = createSlice({
  initialState,
  name: "detailPoint",
  reducers: {
    openDesc(state, { payload }: PayloadAction<PointsType>) {
      if (payload) {
        state = payload;
        return state;
      }
    },
    closeDesc(state) {
      state = initialState;
      return state;
    },
  },
});

const reducer = detailPointSlice.reducer;
const actions = { ...detailPointSlice.actions };

export { reducer, actions };
