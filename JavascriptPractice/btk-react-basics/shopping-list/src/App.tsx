import { useState } from "react";
import { ItemList } from "./components/ItemList";
import type { IItem } from "./types";
import { Form } from "./components/Form";

function App() {
  const [items, setItems] = useState<IItem[]>([]);

  function handleAddItem(item: IItem) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItem={ handleAddItem } />
      <ItemList items={ items } />
      <Summary />
    </div>
  )
}

function Header() {
  return (
    <h1>Shopping List</h1>
  )
}

function Summary() {
  return (
    <footer className="summary">
      <p>Total items: 3</p>
    </footer>
  );
}

export default App;