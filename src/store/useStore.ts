import create from "zustand";

import createMoviesStore, { MoviesSlice } from "./movies/movies.store";

export type MyState = MoviesSlice;

const useStore = create<MyState>((set, get) => ({
  ...createMoviesStore(set, get)
}));

export default useStore;
