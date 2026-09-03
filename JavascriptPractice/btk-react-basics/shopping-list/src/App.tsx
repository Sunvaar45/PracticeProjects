import { useState } from "react";
import { ItemList } from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <ItemList />
      <Summary />
    </div>
  )
}

function Header() {
  return (
    <h1>Shopping List</h1>
  )
}

function Form() {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const item = {id: Date.now(), title, quantity, completed: false};
    console.log(item);

    setTitle("");
    setQuantity(1);
  }

  return (
    <form className="form" onSubmit={ handleFormSubmit }>
      <input type="text" placeholder="Add an item" value={ title } 
        onChange={(event) => {
          setTitle(event.target.value);
          console.log(event.target.value);
        }}
      />
      <select value={ quantity } 
        onChange={(event) => {
          setQuantity(Number(event.target.value));
          console.log(event.target.value);
        }}
      >
        {
          Array.from({ length: 10 }, (_value, index) => index + 1)
            .map(num => <option key={ num } value={ num }>{ num }</option>)
        }
      </select>
      <button type="submit">Add</button>
    </form>
  )
}

function Summary() {
  return (
    <footer className="summary">
      <p>Total items: 3</p>
    </footer>
  );
}

export default App
