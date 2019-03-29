import random

deck = {'Ace of Spades':1, '2 of Spades':2, '3 of Spades':3,
        '4 of Spades':4, '5 of Spades':5, '6 of Spades':6,
        '7 of Spades':7, '8 of Spades':8, '9 of Spades':9,
        '10 of Spades':10, 'Jack of Spades':10,
        'Queen of Spades':10, 'King of Spades': 10,
        'Ace of Hearts':1, '2 of Hearts':2, '3 of Hearts':3,
        '4 of Hearts':4, '5 of Hearts':5, '6 of Hearts':6,
        '7 of Hearts':7, '8 of Hearts':8, '9 of Hearts':9,
        '10 of Hearts':10, 'Jack of Hearts':10,
        'Queen of Hearts':10, 'King of Hearts': 10, 'Ace of Clubs':1,
        '2 of Clubs':2, '3 of Clubs':3, '4 of Clubs':4, '5 of Clubs':5,
        '6 of Clubs':6,'7 of Clubs':7, '8 of Clubs':8, '9 of Clubs':9,
        '10 of Clubs':10, 'Jack of Clubs':10,
        'Queen of Clubs':10, 'King of Clubs': 10,
        'Ace of Diamonds':1, '2 of Diamonds':2, '3 of Diamonds':3,
        '4 of Diamonds':4, '5 of Diamonds':5, '6 of Diamonds':6,
        '7 of Diamonds':7, '8 of Diamonds':8, '9 of Diamonds':9,
        '10 of Diamonds':10, 'Jack of Diamonds':10,
        'Queen of Diamonds':10, 'King of Diamonds': 10}

def value(hand):
    hand_value = 0
    for i in hand:
        hand_value += i
    return hand_value

def main():
    deck_list = list(deck.values())
    random.shuffle(deck_list)
    player1_hand = []
    player2_hand = []
    player1_hand.append(deck_list.pop())
    player2_hand.append(deck_list.pop())
    player1_hand.append(deck_list.pop())
    player2_hand.append(deck_list.pop())

    while True:
        print("Player 1's hand is ", player1_hand, "The value is ", value(player1_hand))
        if value(player1_hand) > 21:
            print("Player 1 is out!")
            break
        response = input('Player 1, would you like to draw another card? Please respond Yes or No: ')
        if response.lower() == 'no':
            break
        else:
            player1_hand.append(deck_list.pop())

    while True:
        print("Player 2's hand is ", player2_hand, "The value is ", value(player2_hand))
        if value(player2_hand) > 21:
            print("Player 2 is out!")
            break
        response = input('Player 2, would you like to draw another card? Please respond Yes or No: ')
        if response.lower() == 'no':
            break
        else:
            player2_hand.append(deck_list.pop())

    if (value(player1_hand) > value(player2_hand)) and value(player1_hand) <= 21:
        print('The winner is Player 1 with a score of ', value(player1_hand))
    elif (value(player2_hand) > value(player1_hand)) and value(player2_hand) <= 21:
        print('The winner is Player 2 with a score of ', value(player2_hand))
    else:
        print('There are no winners.')

if __name__ == "__main__":
    while True:
        main()
        rematch = input('Respond No if you want to quit. Type anything else if you want to play another game: ')
        if rematch.lower() == 'no':
            break
