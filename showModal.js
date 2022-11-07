export default function showModal (counter) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const youWin = document.createElement('p');
    youWin.innerText = 'Вы победили';
    const countOfMoves = document.createElement('p');
    countOfMoves.innerText = `Количество ходов - ${counter}`
    const restartButton = document.createElement('p');
    restartButton.addEventListener('click', () => location.reload());
    restartButton.innerText = 'Restart';
    restartButton.classList.add('button');
    document.body.append(wrapper);
    wrapper.append(youWin);
    wrapper.append(countOfMoves);
    wrapper.append(restartButton);
}