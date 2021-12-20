import {
    Routes,
    Route
  } from "react-router-dom";
import MoviesHome from "../containers/MoviesHome";

export default function MovieRoutes() {
    
  return (
    <Routes>
        <Route path="/" element={<MoviesHome />} />
    </Routes>
  )
}
