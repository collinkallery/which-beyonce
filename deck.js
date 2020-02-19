class Deck {
  constructor() {
    this.cards = [];
    this.matchedCards = [];
    this.selectedCards = [];
  }
  shuffle() {

  }
  checkSelectedCards() {

  }
  moveToMatched() {

  }
  populateDeck() {
    for (var i = 0; i < 10; i++) {
      var card = new Card;
      this.cards.push(card);
    }
  }
}
