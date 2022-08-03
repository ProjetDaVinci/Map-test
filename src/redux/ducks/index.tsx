import { combineReducers } from "redux";
import * as auth from "./auth";
import * as points from "./points";
import * as detailPoint from "./detailPoint";
import * as setPoint from "./setPoint";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  points: points.reducer,
  detailPoint: detailPoint.reducer,
  setPoint: setPoint.reducer,
});

export const actions = {
  auth: auth.actions,
  points: points.actions,
  detailPoint: detailPoint.actions,
  setPoint: setPoint.actions,
};

export const selectors = {
  auth: auth.selectors,
  points: points.selectors,
  detailPoint: detailPoint.selectors,
  setPoint: setPoint.selectors,
};
