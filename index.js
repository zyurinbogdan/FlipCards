const cards = document.querySelectorAll('.cards');

let flippedCard = false;
let secondFlippedCard = false;
let firstCard;
let secondCard;
let thirdCard;
let blockBoard = false;
let counter = 0;

function flipCard () {
    if (blockBoard) {
        return;
    }

    if (this === firstCard) {
        return;
    }

    this.classList.add('flip');

    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;
        flippedCard = false;
        checkForMatch();
    }

}

function checkForMatch () {
    if (firstCard.dataset.card === secondCard.dataset.card) {
        blockCards();
    } else {
        unFlipCards();
    }
}

function blockCards () {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
}

function unFlipCards () {
    blockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        blockBoard = false;
    }, 1000)

    
}

(function shuffle () {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 12);
        card.style.order = randomOrder;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

