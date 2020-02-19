var deck = new Deck;
var topRow = document.querySelector('.unknown-card-top');
var middleRow = document.querySelector('.unknown-card-middle');
var bottomRow = document.querySelector('.unknown-card-bottom');

window.onload = prepareDeck()

function prepareDeck() {
  deck.populateDeck();
  displayCards();
  console.log(deck.cards);
}

function displayCards() {
  var cardNum = 0;
  for (var i = 0; i < 10; i++) {
    cardNum++
    var createdCard = document.createElement('div');
    createdCard.classList.add('unknown-card');
    createdCard.innerText = 'B';
    if (cardNum <= 4) {
      createdCard.classList.add(`card-${cardNum}`);
      topRow.appendChild(createdCard);
    } else if (cardNum <= 7) {
      createdCard.classList.add(`card-${cardNum}`);
      middleRow.appendChild(createdCard);
    } else if (cardNum <= 10) {
      createdCard.classList.add(`card-${cardNum}`);
      bottomRow.appendChild(createdCard);
    }
  }
}
