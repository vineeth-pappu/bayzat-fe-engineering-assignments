import { IMovie } from "../models/movie.interface"

export const getMovies = async (): Promise<IMovie[]> => {
    const res = await fetch('/mock/movies.json')
    return await res.json()
}