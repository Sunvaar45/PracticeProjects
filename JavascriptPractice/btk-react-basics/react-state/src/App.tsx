import { sculptureList } from './data.ts';

function App() {
  let index = 0;
  let sculpture = sculptureList[index]; 

  console.log(sculpture);

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