import shuffle from "./shuffle.js";
import countingMoves from "./countingMoves.js";
import checkForMatch from "./checkForMatch.js";
import unFlipCards from "./unFlipCards.js";
import showModal from "./showModal.js";

const cards = document.querySelectorAll('.cards');
shuffle(cards);
let firstCard;
let secondCard;
let counter = 0

function setFlippedCard (targetCard) {
    let countOfFlippedCards = document.getElementsByClassName('flip').length;

    targetCard.classList.add('flip');
    if (firstCard !== targetCard && secondCard !== targetCard ) {
        if (countOfFlippedCards === 0 ) {
            firstCard = targetCard;
        } else if (countOfFlippedCards === 1) {
            secondCard = targetCard;
            counter++;
        } else if (countOfFlippedCards = 2) {
            unFlipCards(firstCard, secondCard);
            firstCard = targetCard;
        }
    }
}


function cardClickHandler () {
    setFlippedCard(this);
    checkForMatch(firstCard, secondCard);
    countingMoves(counter);
    setTimeout(() => {
        const amountOfHiddenCards = document.getElementsByClassName('hide').length;
        if (amountOfHiddenCards === 32) {
            showModal(counter);
        }
    }, 1000);
}

cards.forEach(card => card.addEventListener('click', cardClickHandler));

