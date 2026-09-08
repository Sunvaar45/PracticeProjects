import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

interface ListContainerProps {
  children: React.ReactNode;
}

export function ListContainer({ children }: ListContainerProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="movie-list">
      <ToggleButton isOpen={isOpen} onToggle={handleToggle} />

      {isOpen && children}
    </div>
  );
}
