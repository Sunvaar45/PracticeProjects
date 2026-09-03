function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      <List />
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

function List() {
  return (
    <div className="list">
      <ul>
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  )
}

function Item() {
  return (
    <li>
      <span>Fruit</span>
      <button>X</button>
    </li>
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
