import { differenceInDays, fromUnixTime } from "date-fns";

export default function Movie(props: { movie: any; callToAction: any; }) {
    
    const { movie, callToAction } = props
    
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
    )
}