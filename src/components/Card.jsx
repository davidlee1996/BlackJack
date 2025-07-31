import React from 'react';

const Card = ({ rank, suit, faceDown = false }) => {
  if (faceDown) {
    return (
      <img
        src="/cards/back.png"
        alt="Face-down card"
        className="w-16 h-24 m-1 rounded shadow"
      />
  }

  const suitMap = {
    '♠': 'spades',
    '♥': 'hearts',
    '♦': 'diamonds',
    '♣': 'clubs'
  };

  const fileName = `${rank}_${suitMap[suit]}.png`.toLowerCase();

  return (
    <img
      src={`/cards/${fileName}`}
      alt={`${rank} of ${suit}`}
      className="w-16 h-24 m-1 rounded shadow"
    />
  );
};

export default Card;
