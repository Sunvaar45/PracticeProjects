import {
  Navbar,
  NavLogo,
  NavSearch,
  NavSearchResults,
} from "./components/Navbar";
import { Main } from "./components/Main";
// import { movie_list, selected_movie_list } from "./data";
import { useEffect, useState } from "react";
import { MovieList } from "./components/Movies/MovieList";
import { ListContainer } from "./components/Shared/ListContainer";
import { SelectedMovieList } from "./components/SelectedMovies/SelectedMovieList";
import { SelectedMovieListSummary } from "./components/SelectedMovies/SelectedMovieListSummary";
import type { IMovie } from "./types";
import { Loading } from "./components/Shared/Loading";
import { ErrorMessage } from "./components/Shared/ErrorMessage";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedMovieId, setSelectedMovieId] = useState<null | number>(null);

  function handleSelectMovie(movieId: number) {
    console.log("pressed movie id", movieId);
    setSelectedMovieId(movieId);
  }

  function handleUnselectMovie() {
    setSelectedMovieId(null);
  }

  // helpers
  function handleEmptySearch() {
    setMovies([]);
    setError("");
    setTotalResults(0);
  }

  useEffect(
    function () {
      async function getMovies() {
        if (searchQuery.trim() === "") {
          handleEmptySearch();
          return;
        }

        setIsLoading(true);
        setError("");

        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
          );
          if (!response.ok) {
            throw new Error("Failed to fetch movies.");
          }

          const data = await response.json();
          if (data.total_results === 0) {
            throw new Error("No movies found for the given query.");
          }

          setMovies(data.results);
          setTotalResults(data.total_results);
        } catch (error: unknown) {
          console.error(error);

          if (error instanceof Error) {
            setError(error.message);
          } else {
            setError("An unknown error occurred while fetching movies.");
          }
          setTotalResults(0);
        } finally {
          setIsLoading(false);
        }
      }

      getMovies();
    },
    [searchQuery],
  );

  return (
    <>
      <Navbar>
        <NavLogo />
        <NavSearch
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />
        <NavSearchResults totalResults={totalResults} />
      </Navbar>

      <Main>
        <div className="row mt-2">
          {/* Movie List */}
          <div className="col-md-9">
            <ListContainer>
              {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}

              {isLoading && <Loading />}
              {!isLoading && !error && (
                <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
              )}
              {!isLoading && error && <ErrorMessage message={error} />}
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
