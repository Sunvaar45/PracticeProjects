import type { ISelectedMovie } from "../../types";

interface SelectedMovieProps {
  movie: ISelectedMovie;
}

export function SelectedMovie({ movie }: SelectedMovieProps) {
  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-4">
          <img
            className="img-fluid rounded-start"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                : "/img/no-image.jpg"
            }
            alt={movie.title}
          ></img>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.rating.toFixed(1)}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.duration} min</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
