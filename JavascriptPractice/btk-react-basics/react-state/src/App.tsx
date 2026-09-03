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

      <h2>
        <i> {sculpture.name} </i> by {sculpture.artist}
      </h2>
      <h3>
        (
          { index + 1 } of { sculptureList.length }
        )
      </h3>
      <img src={ sculpture.url } alt={ sculpture.alt }></img>
      <p>{ sculpture.description }</p>
    </>
  )
}

export default App