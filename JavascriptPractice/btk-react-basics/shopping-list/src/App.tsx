import { useState } from "react";
import { ItemList } from "./components/ItemList";
import type { IItem } from "./types";
import { Form } from "./components/Form";
import { itemsData } from "./data";

function App() {
  const [items, setItems] = useState<IItem[]>(itemsData);

  function handleAddItem(item: IItem) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems(items => items.map(
      item => item.id === id ? {...item, completed: !item.completed} : item
    ));
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItem={ handleAddItem } />
      <ItemList items={ items } 
        onDeleteItem={ handleDeleteItem }
        onToggleItem={ handleToggleItem } 
      />
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