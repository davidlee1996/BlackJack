export const initializeDeck = () => {
  const suits = ['♠', '♥', '♦', '♣'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  const deck = [];

  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ rank, suit });
    }
  }

  return shuffle(deck);
};

export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const drawCard = (deck) => {
  return deck.pop();
};

export const calculateHandTotal = (hand) => {
  let total = 0;
  let aces = 0;

  for (let card of hand) {
    const rank = (card.rank || '').toUpperCase();

    if (['JACK', 'QUEEN', 'KING'].includes(rank)) {
      total += 10;
    } else if (rank === 'ACE') {
      aces += 1;
      total += 11;
    } else {
      total += parseInt(rank) || 0;
    }
  }

  // Downgrade Aces from 11 to 1 **only while total is over 21**
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }

  return total;
};
