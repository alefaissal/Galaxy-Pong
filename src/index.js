import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 1024, 512);
alert('Use a and z for up and down Player One (left Paddle) and arrow up and arrow down for Player Two (left paddle)');

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
