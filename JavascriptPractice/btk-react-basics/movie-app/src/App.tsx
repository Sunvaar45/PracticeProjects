import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { movie_list } from "./data";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <>
      <Navbar movies={movies} />
      <Main movies={movies} />
    </>
  );
}

export default App;
