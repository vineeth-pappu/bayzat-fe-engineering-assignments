import { useState } from "react";
import "./App.scss";
import MovieList from "./components/MovieList";
import { Movie, movies } from "./movies";

function App() {
  const [leftList, setLeftList] = useState(movies);
  const [rightList, setRightList] = useState([] as Movie[]);
  const [search, setSearch] = useState("");

  const onAddClick = (movie: Movie) => {
    rightList.push(movie);
    setRightList(rightList);

    const newLeftList = leftList.filter((item) => item.id !== movie.id);
    setLeftList(newLeftList);
  };

  const onRemoveClick = (movie: Movie) => {
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
          callToAction={(movie: Movie) => (
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
          callToAction={(movie: Movie) => (
            <button id="remove-button" onClick={() => onRemoveClick(movie)}>
              Remove
            </button>
          )} 
        />
      </div>

    </div>
  );
}

export default App;
