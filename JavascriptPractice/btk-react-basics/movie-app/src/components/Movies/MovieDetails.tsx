import { useEffect, useState } from "react";
import type { IMovieDetails } from "../../types";

interface MovieDetailsProps {
  selectedMovieId: number;
  onUnselectMovie: () => void;
  API_KEY: string;
}

export function MovieDetails({
  selectedMovieId,
  onUnselectMovie,
  API_KEY,
}: MovieDetailsProps) {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${selectedMovieId}?api_key=${API_KEY}`,
          );
          if (!response.ok) {
            throw new Error("Failed to fetch movie details.");
          }

          const data = await response.json();
          if (!data) {
            throw new Error("No movie details found for the given ID.");
          }

          console.log(data);
          setMovieDetails(data);
        } catch (error) {
          console.error(error);
        }
      }

      getMovieDetails();
    },
    [selectedMovieId, API_KEY],
  );

  return (
    <div className="border p-2 mb-3">
      <div className="row">
        {movieDetails && (
          <>
            <div className="col-4">
              <img
                className="img-fluid rounded"
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500` +
                      movieDetails.poster_path
                    : "/img/no-image.jpg"
                }
                alt={movieDetails.title}
              ></img>
            </div>

            <div className="col-8">
              <h6>{movieDetails.title}</h6>
              <p>
                <span className="badge bg-secondary">
                  {movieDetails.release_date}
                </span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning"></i>
                <span>{movieDetails.vote_average}</span>
              </p>
            </div>

            <div className="col-12 border-top p-3 mt-3">
              <p>{movieDetails.overview}</p>
              <p>
                {movieDetails.genres?.map((genre) => (
                  <span key={genre.id} className="badge bg-primary me-1">
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
          </>
        )}
      </div>
      <button className="btn btn-outline-secondary" onClick={onUnselectMovie}>
        Cancel
      </button>
    </div>
  );
}
