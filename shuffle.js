export default function shuffle (cards) {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 16);
        card.style.order = randomOrder;
    });
}
