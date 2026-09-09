interface MovieDetailsProps {
  selectedMovieId: number;
  onUnselectMovie: () => void;
}

export function MovieDetails({
  selectedMovieId,
  onUnselectMovie,
}: MovieDetailsProps) {
  return (
    <div>
      <p className="form-label">Selected Movie ID: {selectedMovieId}</p>
      <button className="btn btn-outline-secondary" onClick={onUnselectMovie}>
        Cancel
      </button>
    </div>
  );
}
