import React from 'react';
import Card from './Card';
import { calculateHandTotal } from '../utils/blackjackLogic';

const Hand = ({ title, cards, hideSecondCard = false }) => {
  const visibleCards = hideSecondCard
    ? cards.map((card, i) =>
        i === 1 ? { ...card, faceDown: true } : card
      )
    : cards;

  const total = calculateHandTotal(
    visibleCards.filter((card) => !card.faceDown)
  );

  return (
    <div className="mb-4">
      <h2 className="font-semibold">{title} (Total: {total})</h2>
      <div className="flex flex-wrap">
        {visibleCards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
