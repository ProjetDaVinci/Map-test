import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./ducks";
import { configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "./ducks/midlwares/authMiddleware";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authMiddleware),
});

export const persistor = persistStore(store);
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
