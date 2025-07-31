import React from 'react';
import './Card.css';

const Card = ({ rank, suit, faceDown = false }) => {
  const suitMap = {
    '♠': 'spades',
    '♥': 'hearts',
    '♦': 'diamonds',
    '♣': 'clubs'
  };

  const fileName = `${rank}_${suitMap[suit]}.png`.toLowerCase();

  return (
    <div className="card-container w-16 h-24 m-1">
      <div className={`card-inner ${faceDown ? '' : 'flipped'}`}>
        {/* Front = actual card face */}
        <div className="card-face card-front">
          <img
            src={`/cards/${fileName}`}
            alt={`${rank} of ${suit}`}
            className="w-16 h-24 rounded shadow"
          />
        </div>
        {/* Back = face-down card */}
        <div className="card-face card-back">
          <img
            src="/cards/back.png"
            alt="Card back"
            className="w-16 h-24 rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
