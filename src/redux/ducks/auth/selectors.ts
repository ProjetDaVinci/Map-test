import { rootState } from "../..";

export const SelectToken = (state: rootState) => state.auth.token;
export const resServer = (state: rootState) => state.auth;
