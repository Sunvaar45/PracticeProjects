import type { IMovie } from "../../types";

interface MovieProps {
  movie: IMovie;
}

export function Movie({ movie }: MovieProps) {
  return (
    <div className="col mb-2">
      <div className="card">
        <img
          className="card-img-top"
          src={movie.Poster}
          alt={movie.Title}
        ></img>
        <div className="card-body">
          <h6 className="card-title">{movie.Title}</h6>
          <div>
            <span className="badge bg-secondary">{movie.Year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
