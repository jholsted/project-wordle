import React from 'react';
import Banner from '../Banner';

function WonBanner({ numOfGuesses, handleRestartGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button className="restart-button" onClick={handleRestartGame}>
        Restart Game
      </button>
    </Banner>
  );
}

export default WonBanner;
