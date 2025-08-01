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
    if (['Jack', 'Queen', 'King'].includes(card.rank)) {
      total += 10;
    } else if (card.rank === 'Ace') {
      aces += 1;
      total += 11; // count as 11 initially
    } else {
      total += parseInt(card.rank);
    }
  }

  // Downgrade Aces from 11 to 1 as needed
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }

  return total;
};

