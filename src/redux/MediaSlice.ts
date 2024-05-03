import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MediaType from "src/types/MediaType";

const initialState: { value: MediaType[] | null } = {
  value: null,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    assignMedia: (state, action: PayloadAction<MediaType[] | null>) => {
      state.value = action.payload;
    },
  },
});

export const { assignMedia } = mediaSlice.actions;
export default mediaSlice.reducer;
