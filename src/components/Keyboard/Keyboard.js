import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Keyboard({ validatedGuesses, tentativeGuess, setTentativeGuess }) {
  const keys = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map((character) => ({
    character,
    status: undefined,
  }));

  validatedGuesses.forEach((letters) => {
    console.log({ letters });
    letters.forEach(({ letter, status }) => {
      const key = keys.find((key) => key.character === letter);
      if (key && key.status !== 'correct') {
        if (status === 'correct') {
          key.status = 'correct';
        } else if (status === 'misplaced' && key.status !== 'correct') {
          key.status = 'misplaced';
        } else if (status === 'incorrect' && !key.status) {
          key.status = 'incorrect';
        }
      }
    });
  });

  return (
    <div className="keyboard">
      {keys.map(({ character, status }) => (
        <div key={character} className={`keyboard-key ${status || ''}`}>
          <button
            type="button"
            key={character}
            onClick={() => {
              const nextGuess = tentativeGuess + character;
              nextGuess.length < NUM_OF_GUESSES_ALLOWED &&
                setTentativeGuess(nextGuess);
            }}
          >
            {character}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
