import React from 'react';

const Controls = ({ onHit, onStand, onRestart, disabled }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="bg-casino-gold hover:bg-yellow-400 text-black px-4 py-2 rounded font-casino" onClick={onHit} disabled={disabled}>
        Hit
      </button>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-casino" onClick={onStand} disabled={disabled}>
        Stand
      </button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded font-casino" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default Controls;
