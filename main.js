// card instance variables
var card0 = new Card(0, 'assets/bey1.jpg');
var card1 = new Card(1, 'assets/bey1.jpg');
var card2 = new Card(2, 'assets/bey2.jpg');
var card3 = new Card(3, 'assets/bey2.jpg');
var card4 = new Card(4, 'assets/bey3.jpeg');
var card5 = new Card(5, 'assets/bey3.jpeg');
var card6 = new Card(6, 'assets/bey4.jpg');
var card7 = new Card(7, 'assets/bey4.jpg');
var card8 = new Card(8, 'assets/bey5.jpg');
var card9 = new Card(9, 'assets/bey5.jpg');
var cards = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9];
var deck = new Deck(cards);
// DOM elements
var gamePage = document.querySelector('.game-page');
var cardDivs = document.querySelectorAll('.card-wrapper');
var winnerPage = document.querySelector('.winner-page');
var entirePage = document.querySelector('.entire-page');
var totalTimeDisplay = document.querySelector('.total-time-display');
var startTimer;
var endTimer;
var gameTime;

window.onload = createGame();

gamePage.addEventListener('click', revealImage);

function createGame() {
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
  startTimer = Date.now();
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
      var numberId = event.target.getAttribute('data-id');

      deck.addSelected(numberId);
    }
  }

function hideMatches() {
  var cardClicked = document.querySelectorAll(`[data-face-up*="true"]`);
  cardClicked.forEach(card => card.style.visibility = 'hidden');
  showMatchCount();
  showWinnerPage();
}

function showMatchCount() {
  var displayMatches = document.querySelector('.number-of-matches');
  var matches = Number(displayMatches.innerText);
  matches++;
  displayMatches.innerText = `${matches}`;
}

function showWinnerPage() {
  if (deck.matchedCards.length === 10) {
    winnerPage.classList.remove('hidden');
    entirePage.classList.add('hidden');
  }
  endTimer = Date.now();
  timer();
  totalTimeDisplay.innerText = `${gameTime} seconds`;
}

//timer build out

function timer () {
  gameTime = (endTimer - startTimer) / 1000;
  return gameTime;
}
