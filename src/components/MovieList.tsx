import { Movie as IMovie } from "../movies";
import Movie from "./Movie";


export default function MovieList(props: { movies: any; searchStr: any; callToAction: any; }) {

    const { movies, searchStr, callToAction } = props

    return (
        <div>
        
        {movies.map((movie: IMovie) => {
          if (!movie.title.includes(searchStr)) {
            return false;
          }

          return <Movie movie={movie} callToAction={callToAction} />;
        })}
      </div>
    )
}