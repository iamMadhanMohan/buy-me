import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchedValue: "" };

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      state.searchedValue = action.payload;
    },
  },
});

export const { addSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
