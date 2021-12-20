import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MovieRoutes from "./routes/movie.routes";

function App() {
  return (
    <BrowserRouter>
      <MovieRoutes />
    </BrowserRouter>
  )
}

export default App;
