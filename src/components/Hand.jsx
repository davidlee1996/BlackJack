import React from 'react';
import Card from './Card';
import { calculateHandTotal } from '../utils/blackjackLogic';

const Hand = ({ title, cards, hideSecondCard = false }) => {
  // Hide second card if specified (typically for dealer while playing)
  const visibleCards = hideSecondCard
    ? cards.map((card, i) =>
        i === 1 ? { ...card, faceDown: true } : card
      )
    : cards;

  // Only count face-up cards for scoring
  const total = calculateHandTotal(
    visibleCards.filter((card) => !card.faceDown)
  );

  // Red if busted
  const totalClass = total > 21 ? 'text-red-500' : 'text-white';

  return (
    <div className="mb-4">
      <h2 className={`font-semibold text-xl font-casino mb-2 ${totalClass}`}>
        {title} (Total: {total})
      </h2>
      <div className="flex flex-wrap">
        {visibleCards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
