// import functions and grab DOM elements
import { games } from './games-data.js';
import { renderGame } from './render-one.js';
// initialize global state
const gameList = document.getElementById('game-list');

function displayGames() {
    gameList.innerHTML = '';

    for (let game of games) {
        const gameEl = renderGame(game);
        gameList.append(gameEl);
    }
}

displayGames();

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
