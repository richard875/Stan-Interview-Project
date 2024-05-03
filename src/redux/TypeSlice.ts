import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MediaEnum from "src/types/MediaEnum";

const initialState: { value: MediaEnum } = {
  value: MediaEnum.Home,
};

export const mediaSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    assignType: (state, action: PayloadAction<MediaEnum>) => {
      state.value = action.payload;
    },
  },
});

export const { assignType } = mediaSlice.actions;
export default mediaSlice.reducer;
