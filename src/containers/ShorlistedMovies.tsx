import AppButton from "../components/base/AppButton"
import MovieList from "../components/MovieList"
import { IMovie } from "../models/movie.interface"
import { getShortlistedMoviesSelector } from "../store/movies/movies.getters"
import { removeShortlistedMovieSelector } from "../store/movies/movies.setters"
import useStore from "../store/useStore"

export default function ShortlistedMovies(props: { search: string }) {

    const { search } = props

    const shortlistedMovies = useStore(getShortlistedMoviesSelector)
    const removeShortlistedMovie = useStore(removeShortlistedMovieSelector)

    const removeFromShorlist = (movie: IMovie) => {
        removeShortlistedMovie(movie)
    }

    return (
        <section className="w-100">
            <h1 className="section-title">Shortlisted Movies</h1>
            <MovieList
                movies={shortlistedMovies}
                searchStr={search}
                callToAction={(movie: IMovie) => (
                    <AppButton
                        className="danger"
                        onClick={() => removeFromShorlist(movie)}
                        label="Remove"
                    />
                )}
            />
        </section>
    )
}