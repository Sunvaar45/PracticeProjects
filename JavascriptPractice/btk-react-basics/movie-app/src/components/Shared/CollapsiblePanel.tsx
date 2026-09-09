import { useState } from "react";
import { ToggleButton } from "./ToggleButton";

interface CollapsiblePanelProps {
  children: React.ReactNode;
}

export function CollapsiblePanel({ children }: CollapsiblePanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapsible-panel">
      <ToggleButton isOpen={isOpen} onToggle={handleToggle} />

      {isOpen && children}
    </div>
  );
}
