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

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const QUERY = "asdasda";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState("");

  useEffect(function () {
    async function getMovies() {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${QUERY}`,
        );
        const data = await response.json();
        if (data.total_results === 0) {
          console.error("No movies found for the given query.");
          throw new Error("No movies found for the given query.");
        }
        console.log("asdsa");

        setMovies(data.results);
        setTotalResults(data.total_results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }

      setIsLoading(false);
    }

    getMovies();
  }, []);

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
              {/* {isLoading ? <Loading /> : <MovieList movies={movies} />} */}

              {isLoading && <Loading />}
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
