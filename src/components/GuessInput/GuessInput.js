import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!guess || guess.length !== 5) {
      alert('Please enter a 5 letter word');
      return;
    }
    console.log({ guess });
    setGuess('');
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
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
