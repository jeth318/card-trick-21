const suits = [ 's','h','d','c', ];
const values = ['2','3','4','5','6','7','8','9','t','j','q','k','a'];

let deck = [];

suits
  .map((suit) => values
    .map((value) => deck
      .push({ suit, value })));

const shuffle = deck => deck
  .map(card => ({ position: Math.random(), value: card }))
  .sort((previousCard, currentCard) => previousCard.position - currentCard.position)
  .map(card => card.value)

export const shuffledDeck = shuffle(deck);
export const shuffledDeckOf21 = shuffle(deck).slice(0, 21);

