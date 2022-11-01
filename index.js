const cards = document.querySelectorAll('.cards');

let firstCard;
let secondCard;
let blockBoard = false;
let counter = 0;

function setFlippedCard (targetCard) {
    let countOfFlippedCards = document.getElementsByClassName('flip').length;

    targetCard.classList.add('flip');

    if (countOfFlippedCards === 0) {
        firstCard = targetCard;
    } else if (countOfFlippedCards === 1) {
        secondCard = targetCard;
    } else if (countOfFlippedCards = 2) {
        unFlipCards();
        firstCard = targetCard;
    }

    

}

function checkForMatch () {
    let countOfFlippedCards = document.getElementsByClassName('flip').length;
    if (firstCard.dataset.card === secondCard.dataset.card && countOfFlippedCards === 2) {
        blockCards();
    }
}

function blockCards () {
    firstCard.remove();
    secondCard.remove();
    
}

function unFlipCards () {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip'); 
}

(function shuffle () {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 12);
        card.style.order = randomOrder;
    });
})();

function cardClickHandler () {
    setFlippedCard(this);
    checkForMatch();
}

cards.forEach(card => card.addEventListener('click', cardClickHandler));

