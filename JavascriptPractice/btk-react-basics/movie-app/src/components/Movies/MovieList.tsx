import type { IMovie } from "../../types";
import { Movie } from "./Movie";

interface MovieListProps {
  movies: IMovie[];
  onSelectMovie: (movieId: number) => void;
}

export function MovieList({ movies, onSelectMovie }: MovieListProps) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} onSelectMovie={onSelectMovie} key={movie.id} />
      ))}
    </div>
  );
}
