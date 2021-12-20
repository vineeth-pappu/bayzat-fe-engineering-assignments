import { useState } from "react";
import AppInput from "../components/base/AppInput";
import AllMovies from "../containers/AllMovies";
import ShortlistedMovies from "../containers/ShorlistedMovies";

export default function MoviesHome() {
    const [search, setSearch] = useState("");

    return (
        <section className="movies-home">
            <div className="movies-search">
                <AppInput
                    label={'Search Movies: '}
                    type="search"
                    placeholder="Type for searching..."
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                />
            </div>

            <div className="movies-list-wrapper">
                <AllMovies search={search} />
                <ShortlistedMovies search={search} />
            </div>

        </section>
    );
}