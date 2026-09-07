import { useState } from "react";
import { MovieList } from "./MovieList";
import { ToggleMovieListButton } from "./ToggleMovieListButton";
import type { IMovie } from "../../types";

interface MovieListContainerProps {
  movies: IMovie[];
}

export function MovieListContainer({ movies }: MovieListContainerProps) {
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

      {movieListIsOpen && <MovieList movies={movies} />}
    </div>
  );
}
