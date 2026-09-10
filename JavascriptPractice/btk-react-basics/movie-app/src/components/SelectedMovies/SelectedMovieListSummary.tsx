import type { ISelectedMovie } from "../../types";
import { getAverage } from "../../utils";

interface SelectedMovieListSummaryProps {
  selectedMovies: ISelectedMovie[];
}

export function SelectedMovieListSummary({
  selectedMovies,
}: SelectedMovieListSummaryProps) {
  const averageRating = getAverage(selectedMovies.map((movie) => movie.rating));
  const averageDuration = getAverage(
    selectedMovies.map((movie) => movie.duration),
  );

  return (
    <div className="card mb-2">
      <div className="card-header">
        <h5>Added {selectedMovies.length} Movies</h5>
        <div className="d-flex justify-content-between">
          <p>
            <i className="bi bi-star-fill text-warning me-1"></i>
            <span>{averageRating.toFixed(1)}</span>
          </p>
          <p>
            <i className="bi bi-hourglass text-warning me-1"></i>
            <span>{averageDuration.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
