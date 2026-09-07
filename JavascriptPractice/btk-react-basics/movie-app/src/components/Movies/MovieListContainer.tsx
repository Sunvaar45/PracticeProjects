import { useState } from "react";
import { MovieList } from "./MovieList";
import { ToggleMovieListButton } from "./ToggleMovieListButton";

export function MovieListContainer() {
  const [movieListIsOpen, setMovieListIsOpen] = useState(true);

  function handleToggleMovieList() {
    setMovieListIsOpen(!movieListIsOpen);
  }

  return (
    <div className="movie-list">
      <ToggleMovieListButton
        movieListIsOpen={movieListIsOpen}
        onToggleMovieList={handleToggleMovieList}
      />

      {movieListIsOpen && <MovieList />}
    </div>
  );
}
