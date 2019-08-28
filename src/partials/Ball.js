import { SVG_NS } from "../settings";
import Board from "./Board";
import Game from "./Game";
import pingSound from "../../public/sounds/pong-01.wav";
import pingSound2 from "../../public/sounds/pong-02.wav";
import goal from "../../public/sounds/goal.wav";
//import { runInThisContext } from "vm";

export default class Ball {
    constructor(radius, boardWidth, boardHeight, colour = "white") {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1; //used in vx to set/change the direction for start and goal
        this.colour = colour;

        this.reset();

        this.finalX;
        this.finalY;

        this.ping = new Audio(pingSound);
        this.ping2 = new Audio(pingSound2);
        this.goalSound = new Audio(goal);
    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while (this.vy === 0) {
            this.vy = (Math.floor(Math.random() * 10 - 5));  // can take the Math.floor off 
        }
        console.log("vy", this.vy);

        this.vx = (this.direction * (6 - Math.abs(this.vy))) * (this.boardWidth / 512);

        console.log("vx", this.vx);

        this.finalX = this.x;
        this.finalY = this.y;
    }

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if (hitLeft || hitRight) {
            this.vx = -this.vx;
        } else if (hitTop || hitBottom) {
            this.vy *= -1;        // should use the same syntax, but just for learning purpose.
        }

        this.finalX = this.x;
        this.finalY = this.y;
    }

    paddleCollision(player1, player2) {
        if ((this.y >= player2.y && this.y <= player2.y + player2.height) ||
            (this.y >= player1.y && this.y <= player1.y + player2.height)) {
            if (this.vx > 0) {
                if (this.x + this.radius >= player2.x &&
                    this.x + this.radius <= player2.x + player2.width) {
                    this.vx = -this.vx;
                    this.ping.play();
                }
            } else {
                if (this.x - this.radius <= player1.x + player1.width &&
                    this.x - this.radius >= player1.x) {
                    this.vx = -this.vx;
                    this.ping2.play();
                }
            }
        }
        this.finalX = this.x;
        this.finalY = this.y;
    }

    goal(player) {
        player.score++;
        this.goalSound.play();
        this.reset();
        this.direction = -this.direction;
        console.log(player.score);
    }

    render(svg, player1, player2) {

        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(player1, player2);

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', this.colour);
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        svg.appendChild(circle);

        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;

        if (rightGoal) {
            this.goal(player1);
            if (player2.height >= 10) {
                player2.height -= 5;
            }
            if (player1.height <= 100) {
                player1.height += 5;
            }
        } else if (leftGoal) {
            this.goal(player2);
            if (player1.height >= 20) {
                player1.height -= 10;
            }
            if (player2.height <= 200) {
                player2.height += 10;
            }
        }
    }
}
