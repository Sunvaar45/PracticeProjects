import { useState } from "react";
import { ToggleMovieListButton } from "./ToggleMovieListButton";

interface MovieListContainerProps {
  children: React.ReactNode;
}

export function MovieListContainer({ children }: MovieListContainerProps) {
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

      {movieListIsOpen && children}
    </div>
  );
}
