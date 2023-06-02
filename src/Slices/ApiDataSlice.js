import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
