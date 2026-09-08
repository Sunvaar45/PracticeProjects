import type { ISelectedMovie } from "../../types";
import { SelectedMovie } from "./SelectedMovie";

interface SelectedMovieListProps {
  selectedMovies: ISelectedMovie[];
}

export function SelectedMovieList({ selectedMovies }: SelectedMovieListProps) {
  return selectedMovies.map((movie) => (
    <SelectedMovie movie={movie} key={movie.id} />
  ));
}
