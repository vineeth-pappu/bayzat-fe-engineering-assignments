import { MyState } from "../useStore";

export const setMoviesSelector = (state: MyState) => state.setMovies

export const shortlistMovieSelector = (state: MyState) => state.shortlist
