import { useEffect, useState } from "react";
import type { IMovieDetails, ISelectedMovie } from "../../types";
import { Loading } from "../Shared/Loading";
import { StarRating } from "../Shared/StarRating";

interface MovieDetailsProps {
  selectedMovieId: number;
  onUnselectMovie: () => void;
  API_KEY: string;
  onAddToSelectedMovies: (selectedMovie: ISelectedMovie) => void;
  selectedMovies: ISelectedMovie[];
}

export function MovieDetails({
  selectedMovieId,
  onUnselectMovie,
  API_KEY,
  onAddToSelectedMovies,
  selectedMovies,
}: MovieDetailsProps) {
  const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  function handleAddToSelectedMovies() {
    if (movieDetails) {
      if (selectedMovies.some((movie) => movie.id === movieDetails.id)) {
        onUnselectMovie();
        alert("This movie is already in the selected movies list.");
        return;
      }

      onAddToSelectedMovies({
        id: movieDetails.id,
        poster_path: movieDetails.poster_path,
        title: movieDetails.title,
        rating: userRating,
        duration: movieDetails.runtime,
      });
      onUnselectMovie();
    } else {
      console.error("Movie details are not available.");
    }
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);

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
        } finally {
          setIsLoading(false);
        }
      }

      getMovieDetails();
    },
    [selectedMovieId, API_KEY],
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="border p-2 mb-3">
      <div className="row">
        {movieDetails && (
          <>
            {/* movie poster */}
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

            {/* movie details */}
            <div className="col-8">
              <h6>{movieDetails.title}</h6>
              <p>
                <span className="badge bg-secondary">
                  {movieDetails.release_date}
                </span>
              </p>
              <p>
                <i className="bi bi-star-fill text-warning"></i>
                <span>{movieDetails.vote_average.toFixed(1)}</span>
              </p>
            </div>

            {/* overview, rating, genre badges, buttons */}
            <div className="col-12 border-top p-3 mt-3">
              <p>{movieDetails.overview}</p>
              <p>
                {movieDetails.genres?.map((genre) => (
                  <span key={genre.id} className="badge bg-primary me-1">
                    {genre.name}
                  </span>
                ))}
              </p>

              <div className="my-4">
                <StarRating
                  maxRating={10}
                  starSize="20px"
                  rating={userRating}
                  onUserRatingChange={setUserRating}
                />
              </div>

              <button
                className="btn btn-primary me-1"
                onClick={handleAddToSelectedMovies}
              >
                Add To Section
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={onUnselectMovie}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
