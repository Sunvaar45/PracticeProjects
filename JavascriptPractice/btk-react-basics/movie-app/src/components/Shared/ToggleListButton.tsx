interface ToggleListButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ToggleListButton({ isOpen, onToggle }: ToggleListButtonProps) {
  return (
    <button onClick={onToggle} className="btn btn-outline-primary mb-2">
      {isOpen ? (
        <i className="bi bi-chevron-up"></i>
      ) : (
        <i className="bi bi-chevron-down"></i>
      )}
    </button>
  );
}
