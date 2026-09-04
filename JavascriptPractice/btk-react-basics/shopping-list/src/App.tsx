import { useState } from "react";
import { ItemList } from "./components/ItemList";
import type { IItem } from "./types";
import { Form } from "./components/Form";
import { itemsData } from "./data";
import { Summary } from "./components/Summary";
import { Header } from "./components/Header";

function App() {
  const [items, setItems] = useState<IItem[]>(itemsData);
  const itemsCount = items.length;
  const completedItemsCount = items.filter(item => item.completed).length;

  function handleAddItem(item: IItem) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleDeleteAllItems() {
    const confirmDelete = window.confirm("Are you sure you want to delete all items?");
    if (confirmDelete) {
      setItems([]);
    }
  }

  function handleToggleItem(id: number) {
    setItems(items => items.map(
      item => item.id === id ? {...item, completed: !item.completed} : item
    ));
  }

  return (
    <div className="App">
      <Header />
      <Form 
        onAddItem={ handleAddItem }
        onDeleteAllItems={ handleDeleteAllItems }
      />
      <ItemList 
        items={ items } 
        onDeleteItem={ handleDeleteItem }
        onToggleItem={ handleToggleItem } 
      />
      <Summary  
        itemsCount={ itemsCount }
        completedItemsCount={ completedItemsCount }
      />
    </div>
  )
}

export default App;