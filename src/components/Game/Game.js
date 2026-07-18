import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('playing');

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess.toUpperCase() === answer) {
      setStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  }

  function handleRestartGame() {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGuesses([]);
    setStatus('playing');
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults validatedGuesses={validatedGuesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        status={status}
        validatedGuesses={validatedGuesses}
      />
      {status === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestartGame={handleRestartGame}
        />
      )}
      {status === 'lost' && (
        <LostBanner answer={answer} handleRestartGame={handleRestartGame} />
      )}
    </>
  );
}

export default Game;
