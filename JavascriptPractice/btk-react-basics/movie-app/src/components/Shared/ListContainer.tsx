import { useState } from "react";
import { ToggleListButton } from "./ToggleListButton";

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
      <ToggleListButton isOpen={isOpen} onToggle={handleToggle} />

      {isOpen && children}
    </div>
  );
}
