import React from 'react';

const Card = ({ rank, suit, faceDown = false }) => {
  if (faceDown) {
    return (
      <div className="border p-2 m-1 text-center w-16 h-24 bg-gray-600 rounded shadow flex items-center justify-center text-white font-bold">
        🂠
      </div>
    );
  }

  const isRed = suit === '♥' || suit === '♦';
  const suitColor = isRed ? 'text-red-500' : 'text-black';

  return (
    <div className={`border p-2 m-1 text-center w-16 h-24 bg-white rounded shadow flex flex-col justify-between ${suitColor}`}>
      <div>{rank}</div>
      <div>{suit}</div>
    </div>
  );
};

export default Card;
