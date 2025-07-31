import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Controls from './components/Controls';
import GameBoard from './components/GameBoard';
import { initializeDeck, drawCard, calculateHandTotal } from './utils/blackjackLogic';
import './index.css';

const App = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameStatus, setGameStatus] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newDeck = initializeDeck();
    const player = [drawCard(newDeck), drawCard(newDeck)];
    const dealer = [drawCard(newDeck), drawCard(newDeck)];
    setDeck(newDeck);
    setPlayerHand(player);
    setDealerHand(dealer);
    setGameStatus('playing');
    setMessage('');
  };

  const handleHit = () => {
    const newDeck = [...deck];
    const newCard = drawCard(newDeck);
    const newHand = [...playerHand, newCard];
    setPlayerHand(newHand);
    setDeck(newDeck);

    const total = calculateHandTotal(newHand);
    if (total > 21) {
      setGameStatus('lost');
      setMessage('Bust! You lose.');
    }
  };

  const handleStand = () => {
    const newDeck = [...deck];
    let dealer = [...dealerHand];

    while (calculateHandTotal(dealer) < 17) {
      dealer.push(drawCard(newDeck));
    }

    const playerTotal = calculateHandTotal(playerHand);
    const dealerTotal = calculateHandTotal(dealer);
    setDealerHand(dealer);
    setDeck(newDeck);

    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      setGameStatus('won');
      setMessage('You win!');
    } else if (playerTotal < dealerTotal) {
      setGameStatus('lost');
      setMessage('You lose.');
    } else {
      setGameStatus('tie');
      setMessage("It's a tie.");
    }
  };

  return (
  <GameBoard
    playerHand={playerHand}
    dealerHand={dealerHand}
    gameStatus={gameStatus}
    message={message}
    onHit={handleHit}
    onStand={handleStand}
    onRestart={startNewGame}
  />
  );

};

export default App;
