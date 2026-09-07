import { getAverage } from "../../utils";

interface SelectedMovieListSummaryProps {
  selectedMovies: {
    Id: string;
    Title: string;
    Poster: string;
    Rating: number;
    Duration: number;
  }[];
}

export function SelectedMovieListSummary({
  selectedMovies,
}: SelectedMovieListSummaryProps) {
  const averageRating = getAverage(selectedMovies.map((movie) => movie.Rating));
  const averageDuration = getAverage(
    selectedMovies.map((movie) => movie.Duration),
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
