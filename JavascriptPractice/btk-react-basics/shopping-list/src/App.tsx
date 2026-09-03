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
  const [title, setTitle] = useState("aaa");

  function handleFormSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    // console.log(event);
  }

  return (
    <form className="form" onSubmit={ handleFormSubmit }>
      <input type="text" placeholder="Add an item" value={ title } 
        onChange={(event) => {
          setTitle(event.target.value);
          console.log(event.target.value);
        }}
      />
      <select>
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
