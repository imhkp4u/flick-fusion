import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMovies: null,
    searchTerm: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovies: (state, action) => {
      state.gptMovies = action.payload.movies;
      state.searchTerm = action.payload.searchTerm;
    },
  },
});

export const { toggleGPTSearch, addGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
