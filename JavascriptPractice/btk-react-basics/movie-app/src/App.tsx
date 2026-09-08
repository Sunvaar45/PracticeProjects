import {
  Navbar,
  NavLogo,
  NavSearch,
  NavSearchResults,
} from "./components/Navbar";
import { Main } from "./components/Main";
// import { movie_list, selected_movie_list } from "./data";
import { useState } from "react";
import { MovieList } from "./components/Movies/MovieList";
import { ListContainer } from "./components/Shared/ListContainer";
import { SelectedMovieList } from "./components/SelectedMovies/SelectedMovieList";
import { SelectedMovieListSummary } from "./components/SelectedMovies/SelectedMovieListSummary";
import type { IMovie } from "./types";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);
  const [totalResults, setTotalResults] = useState(0);

  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=batman`,
  )
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
      console.log(data);
      setTotalResults(data.total_results);
    });

  return (
    <>
      <Navbar>
        <NavLogo />
        <NavSearch />
        <NavSearchResults totalResults={totalResults} />
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
