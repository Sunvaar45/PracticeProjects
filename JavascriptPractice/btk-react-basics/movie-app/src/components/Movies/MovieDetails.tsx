import { useEffect } from "react";

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

          console.log("Movie Details:", data);
        } catch (error) {
          console.error(error);
        }
      }

      getMovieDetails();
    },
    [selectedMovieId, API_KEY],
  );

  return (
    <div>
      <p className="form-label">Selected Movie ID: {selectedMovieId}</p>
      <button className="btn btn-outline-secondary" onClick={onUnselectMovie}>
        Cancel
      </button>
    </div>
  );
}
