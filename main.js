var card0 = new Card('bey1', 'assets/bey1.jpg');
var card1 = new Card('bey1', 'assets/bey1.jpg');
var card2 = new Card('bey2', 'assets/bey2.jpg');
var card3 = new Card('bey2', 'assets/bey2.jpg');
var card4 = new Card('bey3', 'assets/bey3.jpeg');
var card5 = new Card('bey3', 'assets/bey3.jpeg');
var card6 = new Card('bey4', 'assets/bey4.jpg');
var card7 = new Card('bey4', 'assets/bey4.jpg');
var card8 = new Card('bey5', 'assets/bey5.jpg');
var card9 = new Card('bey5', 'assets/bey5.jpg');
var cards = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9];
var deck = new Deck(cards);
var gamePage = document.querySelector('.game-page');
var cardDivs = document.querySelectorAll('.card-wrapper');
window.onload = displayCards();

gamePage.addEventListener('click', revealImage);

function displayCards() {
  for (var i = 0; i < deck.cards.length; i++) {
    gamePage.innerHTML += `
    <div class="card-wrapper">
      <img class="unknown-card" src="assets/B.jpeg" id="card-${i}"
      data-id="${deck.cards[i].matchInfo}" data-face-up="false"
      data-image-source="${deck.cards[i].sourceImage}"
      data-matched="${deck.cards[i].matched}">
    </div>
    `
  }
}


function revealImage(event) {
  if (event.target.getAttribute('data-face-up') === 'true') {
    event.target.setAttribute('data-face-up', false);
    event.target.src = 'assets/B.jpeg'
    deck.removeSelected();
  } else if (deck.selectedCards.length < 2 && event.target.getAttribute('data-face-up') === 'false') {
      event.target.setAttribute('data-face-up', true);
      var cardMatchID = event.target.getAttribute('data-image-source');
      event.target.src = cardMatchID;
      deck.addSelected(cardMatchID);
    }
  }


//function hidematches
// iterate over the cards array and set the hidden class to any that
// have this.matched = true; (if the data id is in the matched cards array);
