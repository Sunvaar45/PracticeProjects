
function App() {
  function handleNextClick() {
    alert('next');
  }

  function handlePreviousClick() {
    alert('previous');
  }

  return (
    <>
      <button onClick={ handleNextClick }>Next</button>
      <button onClick={ handlePreviousClick }>Previous</button>
    </>
  )
}

export default App
