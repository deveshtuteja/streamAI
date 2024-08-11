import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMov: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMov: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMov, addTrailerVideo, addPopularMov } =
  moviesSlice.actions;
export default moviesSlice.reducer;
