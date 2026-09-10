import type { ISelectedMovie } from "../../types";
import { SelectedMovie } from "./SelectedMovie";

interface SelectedMovieListProps {
  selectedMovies: ISelectedMovie[];
  onRemoveFromSelectedMovies: (movieId: number) => void;
}

export function SelectedMovieList({
  selectedMovies,
  onRemoveFromSelectedMovies,
}: SelectedMovieListProps) {
  return selectedMovies.map((selectedMovie) => (
    <SelectedMovie
      selectedMovie={selectedMovie}
      key={selectedMovie.id}
      onRemoveFromSelectedMovies={onRemoveFromSelectedMovies}
    />
  ));
}
