import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MediaType from "src/types/MediaType";

const initialState: { value: MediaType[] | null } = {
  value: null,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    assign: (state, action: PayloadAction<MediaType[] | null>) => {
      state.value = action.payload;
    },
  },
});

export const { assign } = mediaSlice.actions;
export default mediaSlice.reducer;
