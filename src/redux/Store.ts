import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import typeReducer from "./TypeSlice";
import mediaReducer from "./MediaSlice";

export const store = configureStore({
  reducer: {
    type: typeReducer,
    media: mediaReducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
