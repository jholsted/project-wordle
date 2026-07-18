import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer, handleRestartGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="restart-button" onClick={handleRestartGame}>
        Restart Game
      </button>
    </Banner>
  );
}

export default LostBanner;
