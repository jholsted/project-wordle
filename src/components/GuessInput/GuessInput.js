import React from 'react';
import Keyboard from '../Keyboard';

function GuessInput({ validatedGuesses, handleSubmitGuess, status }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        disabled={status !== 'playing'}
      />
      <Keyboard
        validatedGuesses={validatedGuesses}
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
      />
    </form>
  );
}

export default GuessInput;
