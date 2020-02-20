class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
  }
  shuffle() {

  }
  addSelected(card) {
    if (this.selectedCards.length < 2) {
    this.selectedCards.push(card);

  }
    //if the card has already been selected do not add it back in
    //if the card has a specific property
    //if even.target has a class of active (meaning it has been clicked on), return/stop function. else push to array
  }
  removeSelected() {
    for (var i = 0; i < this.selectedCards.length; i++){
      if (event.target.getAttribute('data-id') === this.selectedCards[i]) {
        this.selectedCards.splice(i, 1);
      }
    }
  }
  checkSelectedCards() {

  }
  moveToMatched() {

  }
}
