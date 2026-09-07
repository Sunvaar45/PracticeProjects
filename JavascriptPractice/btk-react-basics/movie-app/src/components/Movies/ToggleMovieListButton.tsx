interface ToggleMovieListButtonProps {
  movieListIsOpen: boolean;
  onToggleMovieList: () => void;
}

export function ToggleMovieListButton({
  movieListIsOpen,
  onToggleMovieList,
}: ToggleMovieListButtonProps) {
  return (
    <button
      onClick={onToggleMovieList}
      className="btn btn-outline-primary mb-2"
    >
      {movieListIsOpen ? (
        <i className="bi bi-chevron-up"></i>
      ) : (
        <i className="bi bi-chevron-down"></i>
      )}
    </button>
  );
}
