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
var playAgainButton = document.querySelector('.play-again-button');
var bestTimesDisplay = document.querySelectorAll('.top-time');
//
var startTimer;
var endTimer;
var gameTime;
var recordedTimes = [];
var myStorage = window.localStorage;


window.onload = createGame();

gamePage.addEventListener('click', revealImage);
playAgainButton.addEventListener('click', playAgain);

function createGame() {
  deck.shuffle();
  displayBestTimes();
  for (var i = 0; i < deck.cards.length; i++) {
    gamePage.innerHTML += `
    <div class="card-wrapper">
      <img class="unknown-card id${deck.cards[i].matchInfo}" src="assets/B.jpeg" id="card-${i}"
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
    event.target.src = 'assets/B.jpeg';
    deck.removeSelected(event.target.getAttribute('data-image-source'));
  } else if (deck.selectedCards.length < 2 && event.target.getAttribute('data-face-up') === 'false') {
      event.target.setAttribute('data-face-up', true);
      var cardMatchID = event.target.getAttribute('data-image-source');
      event.target.src = cardMatchID;
      var numberId = Number(event.target.id.slice(5));

      deck.addSelected(numberId);
      if (deck.selectedCards.length === 2) {
        deck.checkSelectedCards(deck.selectedCards);
      }
      hideMatches(deck.matchedCards);
    }
  }

function hideMatches(matches) {
  matches.forEach((match) => {
    var cardId = match.matchInfo;
    document.querySelector(`.id${cardId}`).style.visibility = 'hidden';
  });
  showMatchCount();
  showMatchThumbnails();
  showWinnerPage();
}

function showMatchCount() {
  var displayMatches = document.querySelector('.number-of-matches');
  var matches = deck.matchedCards.length / 2;
  displayMatches.innerText = `${matches}`;
}

function showMatchThumbnails() {
  if (deck.matchedCards.length < 2) {
    return;
  }
  var matchDisplay = document.querySelectorAll('.matchThumbnail');
  switch(deck.matchedCards[deck.matchedCards.length - 1].sourceImage) {
    case "assets/bey1.jpg":
      matchDisplay[0].src = "assets/bey1.jpg";
      break;
    case "assets/bey2.jpg":
      matchDisplay[1].src = "assets/bey2.jpg";
      break;
    case "assets/bey3.jpeg":
      matchDisplay[2].src = "assets/bey3.jpeg";
      break;
    case "assets/bey4.jpg":
      matchDisplay[3].src = "assets/bey4.jpg";
      break;
    case "assets/bey5.jpg":
      matchDisplay[4].src = "assets/bey5.jpg";
      break;
  }
}

function showWinnerPage() {
  if (deck.matchedCards.length === 10) {
    winnerPage.classList.remove('hidden');
    entirePage.classList.add('hidden');
    endTimer = Date.now();
    timer();
    storeBestTimes();
    totalTimeDisplay.innerText = `${gameTime} seconds`;
  }
}

//timer build out

function timer() {
  gameTime = (endTimer - startTimer) / 1000;
  return gameTime;
}

// storing best times in localStorage

function storeBestTimes() {
  if (!myStorage.getItem("bestTimes")) {
    myStorage.setItem('bestTimes', JSON.stringify([]));
  }
  var retrievedTimes = JSON.parse(myStorage.getItem("bestTimes"));
  retrievedTimes.push(gameTime);
  sortBestTimes(retrievedTimes);
  myStorage.setItem("bestTimes", JSON.stringify(retrievedTimes));
  return retrievedTimes;
}

function sortBestTimes(timeArray) {
  timeArray.sort(function(a, b) {
    return a-b;
  });
  if (timeArray.length > 3) {
    timeArray.pop();
  }
  return timeArray;
}

// displaying top 3 times

function displayBestTimes() {
  //get time from local storage
  //set each bestTimesDisplay node to corresponding best time array element
  if (myStorage.length < 1) {
    return;
  }
  var retrievedTimes = JSON.parse(myStorage.getItem("bestTimes"));
  bestTimesDisplay.forEach((time, i) => {
    if (!retrievedTimes[i]) {
      return;
    }
    time.innerText = `${retrievedTimes[i]} SECONDS`;
  });
}

function playAgain() {
  window.location.reload();
}
