import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PointsAdd, PointsType } from "./types";
import uniqueId from "lodash/uniqueId";

const initialState: PointsType[] = [
  {
    id: 1,
    title: "Placemark 1",
    descr: "Some description",
    coords: [55.831903, 37.411961],
  },
  {
    id: 2,
    title: "Placemark 2",
    descr: "Some description",
    coords: [55.763338, 37.565466],
  },
  {
    id: 3,
    title: "Placemark 3",
    descr: "Some description",
    coords: [55.763338, 37.565466],
  },
  {
    id: 4,
    title: "Placemark 4",
    descr: "Some description",
    coords: [55.744522, 37.616378],
  },
  {
    id: 5,
    title: "Placemark 5",
    descr: "Some description",
    coords: [55.780898, 37.642889],
  },
  {
    id: 6,
    title: "Placemark 6",
    descr: "Some description",
    coords: [55.793559, 37.435983],
  },
  {
    id: 7,
    title: "Placemark 7",
    descr: "Some description",
    coords: [55.800584, 37.675638],
  },
  {
    id: 8,
    title: "Placemark 8",
    descr: "Some description",
    coords: [55.716733, 37.589988],
  },
] as PointsType[];

const PointSlice = createSlice({
  initialState,
  name: "points",
  reducers: {
    addPoint(state, { payload }: PayloadAction<PointsAdd>) {
      if (payload) {
        const Obj = {
          id: parseInt(uniqueId()),
          coords: payload.coords,
          descr: payload.descr,
          title: payload.title,
        };
        state.unshift(Obj);
        return state;
      }
      return state;
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
