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
            src={movie.poster_path}
            alt={movie.title}
          ></img>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{movie.Rating}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{movie.Duration} min</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
