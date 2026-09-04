import { useState } from "react";
import type { IItem } from "../types";

interface FormProps {
    onAddItem: (item: IItem) => void;
    onDeleteAllItems: () => void;
}

export function Form({ onAddItem, onDeleteAllItems }: FormProps) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a valid item title.");
      return;
    }

    const item = { id: Date.now(), title, quantity, completed: false };
    console.log(item);
    onAddItem(item);

    setTitle("");
    setQuantity(1);
  }

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Add an item" value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          console.log(event.target.value);
        } } />
      <select value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.target.value));
          console.log(event.target.value);
        } }
      >
        {Array.from({ length: 10 }, (_value, index) => index + 1)
          .map(num => <option key={num} value={num}>{num}</option>)}
      </select>
      <button type="submit">Add</button>
      
      <button type="button" 
        onClick={ onDeleteAllItems }
      >Clear</button>
    </form>
  );
}
