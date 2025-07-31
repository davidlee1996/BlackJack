import React from 'react';
import Hand from './Hand';
import Controls from './Controls';

const GameBoard = ({
  playerHand,
  dealerHand,
  gameStatus,
  message,
  onHit,
  onStand,
  onRestart,
}) => {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">BlackJack</h1>

      <Hand
        title="Dealer's Hand"
        cards={dealerHand}
        hideSecondCard={gameStatus === 'playing'}
      />
      <Hand title="Your Hand" cards={playerHand} />

      <Controls
        onHit={onHit}
        onStand={onStand}
        onRestart={onRestart}
        disabled={gameStatus !== 'playing'}
      />

      {message && <div className="mt-4 text-center text-lg">{message}</div>}
    </div>
  );
};

export default GameBoard;
