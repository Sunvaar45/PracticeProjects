import { MovieListContainer } from "./Movies/MovieListContainer";
import { SelectedMovieListContainer } from "./SelectedMovies/SelectedMovieListContainer";

export function Main() {
  return (
    <main className="container">
      <div className="row mt-2">
        <div className="col-md-9">
          <MovieListContainer />
        </div>
        <div className="col-md-3">
          <SelectedMovieListContainer />
        </div>
      </div>
    </main>
  );
}
