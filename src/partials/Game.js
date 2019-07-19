import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import PowerUp from './PowerUp';
import Score from './Score';
import { SVG_NS, KEYS } from "../settings";

export default class Game {

  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    this.paddleWidth = 8 * (width / 512); /// think about this more.
    this.paddleHeight = 56 * (width / 512);
    this.boardGap = 10 * (width / 512);

    this.ballRadius = 6 * (width / 512);

    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2),
      "red",
      KEYS.a,
      KEYS.z
    );

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - (this.boardGap + this.paddleWidth)),
      ((this.height - this.paddleHeight) / 2),
      "green",
      KEYS.up,
      KEYS.down
    );

    // this.score1 = new Score(this.width / 2 - 60, 50, 40, 'skyblue');
    // this.score2 = new Score(this.width / 2 + 30, 50, 40, 'skyblue');

    this.score1 = new Score(this.width / 4 - 40, this.height / 2 + 40, 150, 'skyblue');
    this.score2 = new Score(3 * this.width / 4 - 40, this.height / 2 + 40, 150, 'skyblue');

    this.ball = new Ball(this.ballRadius, this.board.width, this.board.height, 'grey');

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    });


  }// end of constructor




  showBallXY(ball) {
    ball = this.ball;
    let text = document.getElementById("ballXY");
    text.innerHTML = "Ball X = " + ball.finalX + " Ball Y = " + ball.finalY;

  }

  render() {
    if (this.player1.score === 10) {
      alert("GAME OVER Player One wins!! Refresh the page to play again");
    }
    if (this.player2.score === 10) {
      alert("GAME OVER Player Two wins!! Refresh the page to play again");
    } else {

      if (this.pause) {
        return;
      }

      this.gameElement.innerHTML = ''; // clear the html before appending to fix a render bug 🐞
      let svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttributeNS(null, "width", this.width);
      svg.setAttributeNS(null, "height", this.height);
      svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
      this.gameElement.appendChild(svg);
      this.board.render(svg);
      this.player1.render(svg);
      this.player2.render(svg);
      this.ball.render(svg, this.player1, this.player2);
      this.showBallXY(svg, this.ball);
      this.score1.render(svg, this.player1.score);
      this.score2.render(svg, this.player2.score);


    }
  }




}