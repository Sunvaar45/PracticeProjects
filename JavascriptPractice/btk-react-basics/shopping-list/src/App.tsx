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
  return (
    <form className="form">
      <input type="text" placeholder="Add an item" />
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
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
