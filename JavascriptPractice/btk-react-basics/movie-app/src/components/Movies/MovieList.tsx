import { useState } from "react";
import { movie_list } from "../../data";
import { Movie } from "./Movie";

export function MovieList() {
  const [movies, setMovies] = useState(movie_list);

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.Id} />
      ))}
    </div>
  );
}
