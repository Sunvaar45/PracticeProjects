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
        <div className="col-4">
          {movieDetails && (
            <img
              className="img-fluid rounded"
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500` + movieDetails.poster_path
                  : "/img/no-image.jpg"
              }
              alt={movieDetails.title}
            ></img>
          )}
        </div>
        <div className="col-8"></div>
      </div>
      <button className="btn btn-outline-secondary" onClick={onUnselectMovie}>
        Cancel
      </button>
    </div>
  );
}
