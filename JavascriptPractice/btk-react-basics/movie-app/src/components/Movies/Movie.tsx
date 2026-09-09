import type { IMovie } from "../../types";

interface MovieProps {
  movie: IMovie;
  onSelectMovie: (movieId: number) => void;
}

export function Movie({ movie, onSelectMovie }: MovieProps) {
  return (
    <div className="col mb-2">
      <div className="card" onClick={() => onSelectMovie(movie.id)}>
        <img
          className="card-img-top"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
              : "/img/no-image.jpg"
          }
          alt={movie.title}
        ></img>
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div>
            <span className="badge bg-secondary">{movie.release_date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
