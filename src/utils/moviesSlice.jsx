import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMov: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMov: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMov: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMov,
  addTrailerVideo,
  addPopularMov,
  addTopRatedMov,
} = moviesSlice.actions;
export default moviesSlice.reducer;
