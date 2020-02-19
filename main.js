var deck = new Deck;
var topRow = document.querySelector('.unknown-card-top');
var middleRow = document.querySelector('.unknown-card-middle');
var bottomRow = document.querySelector('.unknown-card-bottom');
var card1 = new Card('bey1', 'assets/bey1.jpg');
var card2 = new Card('bey1', 'assets/bey1.jpg');
var card3 = new Card('bey2', 'assets/bey2.jpg');
var card4 = new Card('bey2', 'assets/bey2.jpg');
var card5 = new Card('bey3', 'assets/bey3.jpg');
var card6 = new Card('bey3', 'assets/bey3.jpg');
var card7 = new Card('bey4', 'assets/bey4.jpg');
var card8 = new Card('bey4', 'assets/bey4.jpg');
var card9 = new Card('bey5', 'assets/bey5.jpg');
var card10 = new Card('bey5', 'assets/bey5.jpg');
window.onload = prepareDeck()

function prepareDeck() {
  // deck.populateDeck();
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
