export function renderGame(game) {
    const li = document.createElement('li');
    li.classList.add('game-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = game.name;

    const pEl = document.createElement('p');
    pEl.textContent = game.genre + ' ' + game.release;

    li.append(headerEl, pEl);
    return li;
}
