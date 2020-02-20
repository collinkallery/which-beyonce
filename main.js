var deck = new Deck;
var gamePage = document.querySelector('.game-page');
window.onload = prepareDeck();

gamePage.addEventListener('click', revealImage);

function prepareDeck() {
  displayCards();
  console.log(deck.cards);
}

function displayCards() {
  for (var i = 0; i < deck.cards.length; i++) {
    // add B back in at some point
    gamePage.innerHTML += `
    <div class="card-wrapper">
      <img class="unknown-card" id="card-${i}"
      data-id="${deck.cards[i].sourceImage}" data-face-up="false"
      data-matchedInfo="${deck.cards[i].matchedInfo}"
      data-matched="${deck.cards[i].matched}">
    </div>
    `
  }
}


function revealImage(event) {
  if (!event.target.classList.contains('unknown-card')) {
    return;
  }
  if (event.target.getAttribute('data-face-up') === 'false') {
    event.target.setAttribute('data-face-up', true);

    var cardMatchID = event.target.getAttribute('data-id');
    event.target.src = cardMatchID;
    //call push method
    // deck.selectedCards.push(objectCard);
  } else {;
    event.target.setAttribute('data-face-up', false);
    event.target.innerHTML = "B";
  }
}
