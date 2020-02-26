class Deck {
  constructor(cards) {
    this.cards = cards;
    this.matchedCards = [];
    this.selectedCards = [];
  }

  shuffle() {
    var m = this.cards.length;
    var t;
    var i;

// While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  return this.cards;
}

  addSelected(numberId) {
    if (this.selectedCards.length < 2) {
    this.selectedCards.push(this.cards[numberId]);
  }
}

  checkSelectedCards() {
    if (this.selectedCards[0].sourceImage === this.selectedCards[1].sourceImage) {
      this.moveToMatched(this.selectedCards);
      this.selectedCards = [];
    } else {
      return false;
    }
  }

  clearSelectedCards() {
    this.selectedCards = [];
  }

  moveToMatched(selectedArray) {
    this.matchedCards.push(selectedArray[0]);
    this.matchedCards.push(selectedArray[1]);
    this.selectedCards = [];
    this.matchedCards.forEach((card) => {
      card.match();
    });
  }
}
