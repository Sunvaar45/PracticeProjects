import type { IMovie } from "../../types";
import { Movie } from "./Movie";

interface MovieListProps {
  movies: IMovie[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
