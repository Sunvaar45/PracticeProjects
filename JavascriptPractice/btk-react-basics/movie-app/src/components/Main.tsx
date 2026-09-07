import type { IMovie } from "../types";
import { MovieListContainer } from "./Movies/MovieListContainer";
import { SelectedMovieListContainer } from "./SelectedMovies/SelectedMovieListContainer";

interface MainProps {
  movies: IMovie[];
}

export function Main({ movies }: MainProps) {
  return (
    <main className="container">
      <div className="row mt-2">
        <div className="col-md-9">
          <MovieListContainer movies={movies} />
        </div>
        <div className="col-md-3">
          <SelectedMovieListContainer />
        </div>
      </div>
    </main>
  );
}
