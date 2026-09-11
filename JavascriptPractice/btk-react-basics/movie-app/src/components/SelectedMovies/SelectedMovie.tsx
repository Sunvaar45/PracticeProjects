import type { ISelectedMovie } from "../../types";

interface SelectedMovieProps {
  selectedMovie: ISelectedMovie;
  onRemoveFromSelectedMovies: (movieId: number) => void;
}

export function SelectedMovie({
  selectedMovie,
  onRemoveFromSelectedMovies,
}: SelectedMovieProps) {
  return (
    <div className="card mb-2">
      <div className="row g-0">
        <div className="col-4">
          <img
            className="img-fluid rounded-start"
            src={
              selectedMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500` + selectedMovie.poster_path
                : "/img/no-image.jpg"
            }
            alt={selectedMovie.title}
          ></img>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{selectedMovie.title}</h6>

            {/* rating and duration */}
            <div className="d-flex justify-content-between">
              <p>
                <i className="bi bi-star-fill text-warning me-1"></i>
                <span>{selectedMovie.rating.toFixed(1)}</span>
              </p>
              <p>
                <i className="bi bi-stars text-warning me-1"></i>
                <span>{selectedMovie.userRating.toFixed(1)}</span>
              </p>
              <p>
                <i className="bi bi-hourglass text-warning me-1"></i>
                <span>{selectedMovie.duration} min</span>
              </p>
            </div>

            <button
              className="btn btn-danger"
              onClick={() => onRemoveFromSelectedMovies(selectedMovie.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
