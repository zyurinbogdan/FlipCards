import removeCards from "./removeCards.js";
export default function checkForMatch (firstCard, secondCard) {
    let countOfFlippedCards = document.getElementsByClassName('flip').length;

    if (firstCard.dataset.card === secondCard.dataset.card && countOfFlippedCards === 2) {
        setTimeout(removeCards, 800, firstCard, secondCard);
    }
}