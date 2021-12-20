import MovieList from "../components/MovieList";
import { getMoviesSelector, getShortlistedMoviesSelector } from "../store/movies/movies.getters";
import { setMoviesSelector, shortlistMovieSelector } from "../store/movies/movies.setters";
import useStore from "../store/useStore";
import { useCallback, useEffect } from 'react';
import { getMovies } from "../services/movie.service";
import { IMovie } from "../models/movie.interface";
import AppButton from "../components/base/AppButton";

export default function AllMovies(props: { search: string }) {

    const { search } = props

    const movies = useStore(getMoviesSelector)
    const setMovies = useStore(setMoviesSelector)
    const shortlistMovie = useStore(shortlistMovieSelector)
    const shortlistedMovie = useStore(getShortlistedMoviesSelector)

    useEffect(() => {
        const fetchData = async () => {
            const movies = await getMovies()
            setMovies(movies)
        }

        fetchData()
    }, [setMovies])


    const shortListMovie = (movie: IMovie) => {
        shortlistMovie(movie)
    };

    const filterShorlistedMovies = useCallback((movie: IMovie) => {
        return !shortlistedMovie.find(m => m.id === movie.id)
    }, [shortlistedMovie])


    return (
        <section className="w-100">
            <h1 className="section-title">Available Movies</h1>
            <MovieList
                movies={movies}
                searchStr={search}
                filterFn={filterShorlistedMovies}
                callToAction={(movie: IMovie) => (
                    <AppButton
                        className="success"
                        onClick={() => shortListMovie(movie)}
                        label="Add"
                    />
                )}
            />
        </section>
    )
}