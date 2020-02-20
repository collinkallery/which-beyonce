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
    var createdCard = document.createElement('div');
    createdCard.classList.add('unknown-card');
    createdCard.innerText = 'B';
    createdCard.id = `card-${i}`;
    createdCard.setAttribute('data-id', i);
    createdCard.setAttribute('data-face-up', false);
    var wrapper = document.createElement('div');
    wrapper.classList.add('card-wrapper');
    wrapper.appendChild(createdCard);
    gamePage.appendChild(wrapper);
  }
}


function revealImage() {
  if (!event.target.classList.contains('unknown-card')) {
    return;
  }
  if (event.target.getAttribute('data-face-up') === 'false') {
    event.target.setAttribute('data-face-up', true);
    var cardIndex = event.target.getAttribute('data-id');
    var objectCard = deck.cards[cardIndex];
    event.target.innerHTML = objectCard.matchInfo;
    deck.selectedCards.push(objectCard);
  } else {;
    event.target.setAttribute('data-face-up', false);
    event.target.innerHTML = "B";
  }
}
