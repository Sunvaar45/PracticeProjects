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
import { CollapsiblePanel } from "./components/Shared/CollapsiblePanel";
import { SelectedMovieList } from "./components/SelectedMovies/SelectedMovieList";
import { SelectedMovieListSummary } from "./components/SelectedMovies/SelectedMovieListSummary";
import type { IMovie, ISelectedMovie } from "./types";
import { Loading } from "./components/Shared/Loading";
import { ErrorMessage } from "./components/Shared/ErrorMessage";
import { MovieDetails } from "./components/Movies/MovieDetails";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<ISelectedMovie[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState<null | number>(null);

  function handleSelectMovie(movieId: number) {
    // Toggle selection: if the movie is already selected, unselect it; otherwise, select it
    setSelectedMovieId(selectedMovieId === movieId ? null : movieId);
  }

  function handleUnselectMovie() {
    setSelectedMovieId(null);
  }

  function handleAddToSelectedMovies(selectedMovie: ISelectedMovie) {
    setSelectedMovies([...selectedMovies, selectedMovie]);
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
            <CollapsiblePanel>
              {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}

              {isLoading && <Loading />}
              {!isLoading && !error && (
                <MovieList
                  movies={movies}
                  onSelectMovie={handleSelectMovie}
                  selectedMovieId={selectedMovieId}
                />
              )}
              {!isLoading && error && <ErrorMessage message={error} />}
            </CollapsiblePanel>
          </div>

          {/* Selected Movie List */}
          <div className="col-md-3">
            <CollapsiblePanel>
              {selectedMovieId ? (
                <MovieDetails
                  selectedMovieId={selectedMovieId}
                  onUnselectMovie={handleUnselectMovie}
                  API_KEY={API_KEY}
                  onAddToSelectedMovies={handleAddToSelectedMovies}
                  selectedMovies={selectedMovies}
                />
              ) : (
                <>
                  <SelectedMovieListSummary selectedMovies={selectedMovies} />
                  <SelectedMovieList selectedMovies={selectedMovies} />
                </>
              )}
            </CollapsiblePanel>
          </div>
        </div>
      </Main>
    </>
  );
}

export default App;
