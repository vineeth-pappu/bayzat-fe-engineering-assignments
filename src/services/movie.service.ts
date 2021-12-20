import ApiService from "./api.service"
import { IMovie } from "../models/movie.interface"

export const getMovies = async (): Promise<IMovie[]> => {
    return await ApiService.get('mock/movies.json')
}