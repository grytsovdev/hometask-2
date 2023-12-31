import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
export const store = configureStore({
  reducer: notesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
