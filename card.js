class Card {
  constructor(uniqueId, sourceImage) {
    this.matchInfo = uniqueId;
    this.matched = false;
    this.sourceImage = sourceImage;
  }
  match() {
    this.matched = true;
  }
};
