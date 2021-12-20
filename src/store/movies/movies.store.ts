import { GetState, SetState } from "zustand";
import { IMovie } from "../../models/movie.interface";
import { MyState } from "../useStore";

export interface MoviesSlice {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  shortlist: () => void;
}


const createMoviesStore = (set: SetState<MyState>, get: GetState<MyState>) => ({
    movies: [],
    setMovies: (movies: IMovie[]) => {
        set(() => ({ movies }));
    },
    shortlist: () => {
        set(() => ({  }));
    }
});

export default createMoviesStore;
