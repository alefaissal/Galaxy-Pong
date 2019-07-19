import { SVG_NS } from "../settings";
import Board from "./Board";
import Game from "./Game";
//import { runInThisContext } from "vm";

export default class Ball {
    constructor(radius, boardWidth, boardHeight, colour = "white") {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1; //used in vx to set the direction to the right
        this.colour = colour;

        this.reset();

    }

    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;
        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);  // can take the Math.floor off 
        }
        console.log("vy", this.vy);
        this.vx = this.direction * (6 - Math.abs(this.vy));
        console.log("vx", this.vx);
    }

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if (hitLeft || hitRight) {
            this.vx = -this.vx;
        } else if (hitTop || hitBottom) {
            this.vy *= -1;        // should keep in the same way before, but just for teaching purpose.
        }
    }



    render(svg) {

        this.x += this.vx;
        this.y += this.vy;


        this.wallCollision();

        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', this.colour);
        circle.setAttributeNS(null, 'r', this.radius);
        circle.setAttributeNS(null, 'cx', this.x);
        circle.setAttributeNS(null, 'cy', this.y);
        svg.appendChild(circle);
    }


}
