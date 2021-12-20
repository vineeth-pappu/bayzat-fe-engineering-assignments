import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import { IMovie } from "../models/movie.interface";
import { getMovies } from "../services/movie.service";

export default function MoviesHome() {
    const [leftList, setLeftList] = useState([] as IMovie[]);
    const [rightList, setRightList] = useState([] as IMovie[]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        const movies = await getMovies()
        console.log('movies data', movies)
  
        setLeftList(movies)
      }
      
      fetchData()
    }, [])
  
    const onAddClick = (movie: IMovie) => {
      rightList.push(movie);
      setRightList(rightList);
  
      const newLeftList = leftList.filter((item) => item.id !== movie.id);
      setLeftList(newLeftList);
    };
  
    const onRemoveClick = (movie: IMovie) => {
      leftList.push(movie);
      setLeftList(leftList);
  
      const newRightList = rightList.filter((item) => item.id !== movie.id);
      setRightList(newRightList);
    };
  
    return (
      <div className="App">
        <div>
          <input
            placeholder="Type for searcing..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div id="left-movie-container">
          <MovieList 
            movies={leftList} 
            searchStr={search} 
            callToAction={(movie: IMovie) => (
              <button id="add-button" onClick={() => onAddClick(movie)}>
                Add
              </button>
            )} 
          />
        </div>
  
        <div id="right-movie-container">
          <MovieList 
            movies={rightList} 
            searchStr={search} 
            callToAction={(movie: IMovie) => (
              <button id="remove-button" onClick={() => onRemoveClick(movie)}>
                Remove
              </button>
            )} 
          />
        </div>
  
      </div>
    );
}