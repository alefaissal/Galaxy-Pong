import './styles/game.css';
import Game from './partials/Game';

// create a game instance
const game = new Game('game', 1024, 512);
alert("Instruction for playing using the keyboard:" + "\n" +
  "a and z for up and down Player One (left Paddle)" + "\n" +
  "arrow up and arrow down for Player Two (left paddle)" + "\n" +
  "c and b  for change sizes of: ball and paddles" + "\n" +
  "m and n for deploy and finish Multi Balls");

(function gameLoop() {
  game.render();
  requestAnimationFrame(gameLoop);
})();
