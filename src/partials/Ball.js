import { SVG_NS } from "../settings";

export default class Ball {
    constructor(radius, boardWidth, boardHeight, colour = "white") {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.colour = colour;
        this.cx = this.boardWidth / 2;
        this.cy = this.boardHeight / 2;
    }


    render(svg) {
        let circle = document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'fill', this.colour);
        circle.setAttributeNS(null, 'r', this.radius);

        circle.setAttributeNS(null, "cx", this.cx);
        circle.setAttributeNS(null, "cy", this.cy);

        svg.appendChild(circle);
    }

    // circle id="ball" r="8" cx="256" cy="128" fill="white" 

}