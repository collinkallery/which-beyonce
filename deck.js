class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {

  }

  addSelected(numberId) {
    if (this.selectedCards.length < 2) {
    this.selectedCards.push(this.cards[numberId]);
  }
    console.log(this.selectedCards);
  }

  removeSelected(event) {
    for (var i = 0; i < this.selectedCards.length; i++) {
      if (event === this.selectedCards[i].sourceImage) {
        this.selectedCards.splice(i, 1);
      }
    }
    console.log(deck.selectedCards);
  }

  checkSelectedCards() {
    if (this.selectedCards[0].sourceImage === this.selectedCards[1].sourceImage) {
      this.moveToMatched(this.selectedCards);
    }
    console.log(deck.selectedCards);
  }

  moveToMatched(selectedArray) {
    this.matchedCards.push(selectedArray[0]);
    this.matchedCards.push(selectedArray[1]);
    this.selectedCards = [];
    this.matchedCards.forEach((card) => {
      card.match();
    });
    console.log(this.matchedCards);
    console.log(this.selectedCards);
    // hideMatches();
  }

}
