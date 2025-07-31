import React from 'react';

const Card = ({ rank, suit, faceDown = false }) => {
  if (faceDown) {
    return (
      <div className="border p-2 m-1 text-center w-16 h-24 bg-casino-table text-white rounded shadow font-casino flex items-center justify-center">
        🂠
      </div>
    );
  }

  const isRed = suit === '♥' || suit === '♦';
  const suitColor = isRed ? 'text-red-500' : 'text-white';

  return (
    <div className={`border p-2 m-1 text-center w-16 h-24 bg-white rounded shadow flex flex-col justify-between font-casino text-black`}>
      <div>{rank}</div>
      <div>{suit}</div>
    </div>
  );
};

export default Card;
