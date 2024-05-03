import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MediaType from "src/types/MediaType";

type InitialState = {
  value: MediaType[] | null;
  valueConst: MediaType[] | null;
};

const initialState: InitialState = {
  value: null,
  valueConst: null,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    assign: (state, action: PayloadAction<MediaType[] | null>) => {
      state.value = action.payload;
    },
    assignConst: (state, action: PayloadAction<MediaType[] | null>) => {
      state.valueConst = action.payload;
    },
  },
});

export const { assign, assignConst } = mediaSlice.actions;
export default mediaSlice.reducer;
