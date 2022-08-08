import { rootState } from "../..";

export const SelectPoints = (state: rootState) => state.setPoint.coords;
export const GetPoints = (state: rootState) => state.setPoint;
// export const resServer = (state: rootState) => state.auth;
