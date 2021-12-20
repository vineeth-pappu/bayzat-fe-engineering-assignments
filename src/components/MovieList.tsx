import { differenceInDays, fromUnixTime } from "date-fns";
import { Movie } from "../movies";


export default function MovieList(props: { movies: any; searchStr: any; callToAction: any; }) {

    const { movies, searchStr, callToAction } = props

    return (
        <div>
        
        {movies.map((movie: Movie) => {
          if (!movie.title.includes(searchStr)) {
            return false;
          }

          return (
            <div
              id="movie"
              style={{ width: 400, height: 100, border: "1px solid black" }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                let l = 0;
                function updateColor(newl: number) {
                  l = newl;
                  el.style.backgroundColor = `#64c864${20 + l * 5}`;
                  if (l < 10) {
                    setTimeout(() => updateColor(l + 1), 25);
                  }
                }
                setTimeout(() => updateColor(l + 1), 25);
              }}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#64c86420")
              }
            >
              <div id="movie-title">{movie.title}</div>
              <div>
                Release date:{" "}
                {differenceInDays(new Date(), fromUnixTime(movie.release_date))}{" "}
                days ago
              </div>
              
              { callToAction(movie) }

            </div>
          );
        })}
      </div>
    )
}