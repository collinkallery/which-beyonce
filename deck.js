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
    if (this.selectedCards.length === 2) {
      this.checkSelectedCards(this.selectedCards);
    }
  }

  removeSelected() {
    for (var i = 0; i < this.selectedCards.length; i++){
      if (event.target.getAttribute('data-image-source') === this.selectedCards[i]) {
        this.selectedCards.splice(i, 1);
      }
    }
  }

  checkSelectedCards(selectedArray) {
    if (selectedArray[0] === selectedArray[1]) {
      console.log(this.selectedCards);
      this.moveToMatched(selectedArray);
    }
  }

  moveToMatched(selectedArray) {
    this.matchedCards.push(selectedArray);
    deck.selectedCards = [];
    console.log(this.matchedCards);
    console.log(this.selectedCards);
    hideMatches();

    //STEP 4 once two cards match, set this.matched = true
    // if any cards have this.matched = true, set them to hidden
  }
}
