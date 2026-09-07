import {
  Navbar,
  NavLogo,
  NavSearch,
  NavSearchResults,
} from "./components/Navbar";
import { Main } from "./components/Main";
import { movie_list } from "./data";
import { useState } from "react";
import { MovieListContainer } from "./components/Movies/MovieListContainer";
import { MovieList } from "./components/Movies/MovieList";
import { SelectedMovieListContainer } from "./components/SelectedMovies/SelectedMovieListContainer";

function App() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <>
      <Navbar>
        <NavLogo />
        <NavSearch />
        <NavSearchResults movies={movies} />
      </Navbar>

      <Main>
        <div className="row mt-2">
          {/* Movie List */}
          <div className="col-md-9">
            <MovieListContainer>
              <MovieList movies={movies} />
            </MovieListContainer>
          </div>

          {/* Selected Movie List */}
          <div className="col-md-3">
            <SelectedMovieListContainer />
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
