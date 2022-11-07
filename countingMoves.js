export default function countingMoves (counter) {
    let counterElement = document.getElementById('counter');
    counterElement.children[0].innerText = `count: ${counter}`;
}