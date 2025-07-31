import React from 'react';

const Controls = ({ onHit, onStand, onRestart, disabled }) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={onHit} disabled={disabled}>
        Hit
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={onStand} disabled={disabled}>
        Stand
      </button>
      <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" onClick={onRestart}>
        Restart
      </button>
    </div>
  );
};

export default Controls;
