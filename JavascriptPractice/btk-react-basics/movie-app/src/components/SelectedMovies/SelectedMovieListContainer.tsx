import { useState } from "react";
import { selected_movie_list } from "../../data";
import { SelectedMovieListSummary } from "./SelectedMovieListSummary";

export function SelectedMovieListContainer() {
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
  const [selectedMovieListIsOpen, setSelectedMovieListIsOpen] = useState(true);

  return (
    <div className="movie-list">
      <button
        onClick={() => setSelectedMovieListIsOpen(!selectedMovieListIsOpen)}
        className="btn btn-sm btn-outline-primary mb-2"
      >
        {selectedMovieListIsOpen ? (
          <i className="bi bi-chevron-up"></i>
        ) : (
          <i className="bi bi-chevron-down"></i>
        )}
      </button>

      {selectedMovieListIsOpen && (
        <>
          <SelectedMovieListSummary selectedMovies={selectedMovies} />

          {selectedMovies.map((movie) => (
            <div className="card mb-2" key={movie.Id}>
              <div className="row g-0">
                <div className="col-4">
                  <img
                    className="img-fluid rounded-start"
                    src={movie.Poster}
                    alt={movie.Title}
                  ></img>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h6 className="card-title">{movie.Title}</h6>
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
          ))}
        </>
      )}
    </div>
  );
}
