import { useState } from "react";
import { selected_movie_list } from "../../data";
import { SelectedMovieListSummary } from "./SelectedMovieListSummary";
import { SelectedMovieList } from "./SelectedMovieList";

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

          <SelectedMovieList selectedMovies={selectedMovies} />
        </>
      )}
    </div>
  );
}
