import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  //Tell this slice to also care about a particular action type from movies.
  extraReducers(builder) {
    builder.addCase("movie/resetMovies", (state, action) => {
      return [];
    });
  },
});

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
    resetMovies(state, action) {
      //Whatever you return is what you want your new state to be.
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  },
});

//console.log(store.getState());

export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie, resetMovies } = moviesSlice.actions;
