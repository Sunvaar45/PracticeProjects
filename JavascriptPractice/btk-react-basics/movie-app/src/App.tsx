import {
  Navbar,
  NavLogo,
  NavSearch,
  NavSearchResults,
} from "./components/Navbar";
import { Main } from "./components/Main";
import { movie_list, selected_movie_list } from "./data";
import { useState } from "react";
// import { MovieListContainer } from "./components/Movies/MovieListContainer";
import { MovieList } from "./components/Movies/MovieList";
// import { SelectedMovieListContainer } from "./components/SelectedMovies/SelectedMovieListContainer";
import { ListContainer } from "./components/Shared/ListContainer";
import { SelectedMovieList } from "./components/SelectedMovies/SelectedMovieList";
import { SelectedMovieListSummary } from "./components/SelectedMovies/SelectedMovieListSummary";

function App() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);

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
            <ListContainer>
              <MovieList movies={movies} />
            </ListContainer>
          </div>

          {/* Selected Movie List */}
          <div className="col-md-3">
            <ListContainer>
              <>
                <SelectedMovieListSummary selectedMovies={selectedMovies} />
                <SelectedMovieList selectedMovies={selectedMovies} />
              </>
            </ListContainer>
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
