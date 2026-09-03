import { useState } from 'react';
import { sculptureList } from './data.ts';

function App() {
  const [index, setIndex] = useState(0);
  const sculpture = sculptureList[index];

  function handlePreviousClick() {
    if (index - 1 < 0) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  return (
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={ handleNextClick }>Next</button>

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