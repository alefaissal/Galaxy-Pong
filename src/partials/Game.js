import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import PowerUp from './PowerUp';
import { SVG_NS, KEYS } from "../settings";

export default class Game {

  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    this.paddleWidth = 8 * (width / this.width); /// think about this more.
    this.paddleHeight = 56 * (width / this.width);
    this.boardGap = 10 * (width / this.width);

    this.ballRadius = 8;

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

    this.ball = new Ball(this.ballRadius, this.board.width, this.board.height, 'grey');

    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    });


  }// end of constructor



  render() {

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
    this.ball.render(svg);
  }
}