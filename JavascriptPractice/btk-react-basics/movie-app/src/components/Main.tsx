import { useState } from "react";
import { movie_list, selected_movie_list } from "../data";
import { getAverage } from "../utils";

export function Main() {
  const [movies, setMovies] = useState(movie_list);
  const [selectedMovies, setSelectedMovies] = useState(selected_movie_list);
  const [movieListIsOpen, setMovieListIsOpen] = useState(true);
  const [selectedMovieListIsOpen, setSelectedMovieListIsOpen] = useState(true);

  const averageRating = getAverage(
    selected_movie_list.map((movie) => movie.Rating),
  );
  const averageDuration = getAverage(
    selected_movie_list.map((movie) => movie.Duration),
  );

  return (
    <main className="container">
      <div className="row mt-2">
        <div className="col-md-9">
          {/* movie list */}
          <div className="movie-list">
            <button
              onClick={() => setMovieListIsOpen(!movieListIsOpen)}
              className="btn btn-outline-primary mb-2"
            >
              {movieListIsOpen ? (
                <i className="bi bi-chevron-up"></i>
              ) : (
                <i className="bi bi-chevron-down"></i>
              )}
            </button>

            {movieListIsOpen && (
              <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
                {movies.map((movie) => (
                  <div className="col mb-2" key={movie.Id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={movie.Poster}
                        alt={movie.Title}
                      ></img>
                      <div className="card-body">
                        <h6 className="card-title">{movie.Title}</h6>
                        <div>
                          <span className="badge bg-secondary">
                            {movie.Year}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-3">
          {/* selected movie list */}
          <div className="movie-list">
            <button
              onClick={() =>
                setSelectedMovieListIsOpen(!selectedMovieListIsOpen)
              }
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
        </div>
      </div>
    </main>
  );
}
