import {
  Navbar,
  NavLogo,
  NavSearch,
  NavSearchResults,
} from "./components/Navbar";
import { Main } from "./components/Main";
import { movie_list } from "./data";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <>
      <Navbar>
        <NavLogo />
        <NavSearch />
        <NavSearchResults movies={movies} />
      </Navbar>
      <Main movies={movies} />
    </>
  );
}

export default App;
