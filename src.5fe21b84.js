parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vTx+":[function(require,module,exports) {

},{"./../../public/fonts/slkscr-webfont.eot":[["slkscr-webfont.3aa16c63.eot","sYxY"],"sYxY"],"./../../public/fonts/slkscr-webfont.woff":[["slkscr-webfont.33be3349.woff","vAWw"],"vAWw"],"./../../public/fonts/slkscr-webfont.ttf":[["slkscr-webfont.319f3cd3.ttf","F/5P"],"F/5P"],"./../../public/fonts/slkscr-webfont.svg":[["slkscr-webfont.3a0c61f8.svg","N4ns"],"N4ns"]}],"Q9a9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEYS=exports.SVG_NS=void 0;var r="http://www.w3.org/2000/svg";exports.SVG_NS=r;var e={a:"a",z:"z",up:"ArrowUp",down:"ArrowDown",spaceBar:" "};exports.KEYS=e;
},{}],"b6em":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}var n=function(){function i(t,r){e(this,i),this.width=t,this.height=r}return r(i,[{key:"render",value:function(e){var i=document.createElementNS(t.SVG_NS,"rect");i.setAttributeNS(null,"fill","#353535"),i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height);var r=document.createElementNS(t.SVG_NS,"line");r.setAttributeNS(null,"x1",this.width/2),r.setAttributeNS(null,"y1",0),r.setAttributeNS(null,"x2",this.width/2),r.setAttributeNS(null,"y2",this.height),r.setAttributeNS(null,"stroke","white"),r.setAttributeNS(null,"stroke-dasharray","20, 15"),r.setAttributeNS(null,"stroke-width","4"),e.appendChild(i),e.appendChild(r)}}]),i}();exports.default=n;
},{"../settings":"Q9a9"}],"4oVX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var s=function(){function i(t,n,s,h,o){var u=this,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"white",a=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0;e(this,i),this.boardHeight=t,this.width=n,this.height=s,this.x=h,this.y=o,this.speed=5,this.score=0,this.colour=r,this.upKey=a,this.downKey=l,this.keyState={},document.addEventListener("keydown",function(t){u.keyState[t.key]=!0}),document.addEventListener("keyup",function(t){u.keyState[t.key]=!1})}return n(i,[{key:"up",value:function(){this.y>0&&(console.log("move up"),this.y=this.y-this.speed)}},{key:"down",value:function(){this.y<this.boardHeight-this.height&&(console.log("move down"),this.y=this.y+this.speed)}},{key:"render",value:function(e){this.keyState[t.KEYS.a]&&this.upKey===t.KEYS.a&&this.up(),this.keyState[t.KEYS.z]&&this.downKey===t.KEYS.z&&this.down(),this.keyState[t.KEYS.up]&&this.upKey===t.KEYS.up&&this.up(),this.keyState[t.KEYS.down]&&this.downKey===t.KEYS.down&&this.down();var i=document.createElementNS(t.SVG_NS,"rect");i.setAttributeNS(null,"fill",this.colour),i.setAttributeNS(null,"width",this.width),i.setAttributeNS(null,"height",this.height),i.setAttributeNS(null,"x",this.x),i.setAttributeNS(null,"y",this.y),e.appendChild(i)}}]),i}();exports.default=s;
},{"../settings":"Q9a9"}],"aFhp":[function(require,module,exports) {
module.exports="/project2-pong/pong-01.1b08b614.wav";
},{}],"hSOt":[function(require,module,exports) {
module.exports="/project2-pong/pong-02.cf7b17d0.wav";
},{}],"gSQY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=require("../settings"),t=r(require("./Board")),s=r(require("./Game")),h=r(require("../../public/sounds/pong-01.wav")),e=r(require("../../public/sounds/pong-02.wav"));function r(i){return i&&i.__esModule?i:{default:i}}function a(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function o(i,t){for(var s=0;s<t.length;s++){var h=t[s];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(i,h.key,h)}}function n(i,t,s){return t&&o(i.prototype,t),s&&o(i,s),i}var l=function(){function t(i,s,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"white";a(this,t),this.radius=i,this.boardWidth=s,this.boardHeight=e,this.direction=1,this.colour=r,this.reset(),this.finalX,this.finalY,this.ping=new Audio(h.default)}return n(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);console.log("vy",this.vy),this.vx=this.direction*(6-Math.abs(this.vy))*(this.boardWidth/512),console.log("vx",this.vx),this.finalX=this.x,this.finalY=this.y}},{key:"wallCollision",value:function(){var i=this.x-this.radius<=0,t=this.x+this.radius>=this.boardWidth,s=this.y-this.radius<=0,h=this.y+this.radius>=this.boardHeight;i||t?this.vx=-this.vx:(s||h)&&(this.vy*=-1),this.finalX=this.x,this.finalY=this.y}},{key:"paddleCollision",value:function(i,t){(this.y>=t.y&&this.y<=t.y+t.height||this.y>=i.y&&this.y<=i.y+t.height)&&(this.vx>0?this.x+this.radius>=t.x&&this.x+this.radius<=t.x+t.width&&(this.vx=-this.vx,this.ping.play()):this.x-this.radius<=i.x+i.width&&this.x-this.radius>=i.x&&(this.vx=-this.vx,this.ping.play())),this.finalX=this.x,this.finalY=this.y}},{key:"goal",value:function(i){i.score++,this.reset(),console.log(i.score)}},{key:"render",value:function(t,s,h){this.x+=this.vx,this.y+=this.vy,this.wallCollision(),this.paddleCollision(s,h);var e=document.createElementNS(i.SVG_NS,"circle");e.setAttributeNS(null,"fill",this.colour),e.setAttributeNS(null,"r",this.radius),e.setAttributeNS(null,"cx",this.x),e.setAttributeNS(null,"cy",this.y),t.appendChild(e);var r=this.x+this.radius>=this.boardWidth,a=this.x-this.radius<=0;r?(this.goal(s),this.direction=1):a&&(this.goal(h),this.direction=-1)}}]),t}();exports.default=l;
},{"../settings":"Q9a9","./Board":"b6em","./Game":"0vzb","../../public/sounds/pong-01.wav":"aFhp","../../public/sounds/pong-02.wav":"hSOt"}],"lbK0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings"),e=o(require("./Ball"));function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=function(t){function o(){var t;n(this,o);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return u(this,(t=f(o)).call.apply(t,[this].concat(r)))}return c(o,e.default),o}();exports.default=a;
},{"../settings":"Q9a9","./Ball":"gSQY"}],"y/AE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../settings");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}var i=function(){function n(t,r,i,u){e(this,n),this.x=t,this.y=r,this.size=i,this.colour=u}return r(n,[{key:"render",value:function(e,n){var r=document.createElementNS(t.SVG_NS,"text");r.setAttributeNS(null,"x",this.x),r.setAttributeNS(null,"y",this.y),r.setAttributeNS(null,"font-size",this.size),r.setAttributeNS(null,"fill",this.colour),r.setAttributeNS(null,"font-family",'"Silkscreen Web", monotype'),r.textContent=n,e.appendChild(r)}}]),n}();exports.default=i;
},{"../settings":"Q9a9"}],"0vzb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=a(require("./Board")),t=a(require("./Paddle")),i=a(require("./Ball")),h=a(require("./PowerUp")),s=a(require("./Score")),r=require("../settings");function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var h=t[i];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(e,h.key,h)}}function d(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var u=function(){function h(a,n,d){var u=this;l(this,h),this.element=a,this.width=n,this.height=d,this.gameElement=document.getElementById(this.element),this.board=new e.default(this.width,this.height),this.paddleWidth=n/512*8,this.paddleHeight=n/512*56,this.boardGap=n/512*10,this.ballRadius=n/512*6,this.player1=new t.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,"red",r.KEYS.a,r.KEYS.z),this.player2=new t.default(this.height,this.paddleWidth,this.paddleHeight,this.width-(this.boardGap+this.paddleWidth),(this.height-this.paddleHeight)/2,"green",r.KEYS.up,r.KEYS.down),this.score1=new s.default(this.width/4-40,this.height/2+40,150,"skyblue"),this.score2=new s.default(3*this.width/4-40,this.height/2+40,150,"skyblue"),this.ball=new i.default(this.ballRadius,this.board.width,this.board.height,"grey"),document.addEventListener("keydown",function(e){switch(e.key){case r.KEYS.spaceBar:u.pause=!u.pause}})}return d(h,[{key:"showBallXY",value:function(e){e=this.ball,document.getElementById("ballXY").innerHTML="Ball X = "+e.finalX+" Ball Y = "+e.finalY}},{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML="";var e=document.createElementNS(r.SVG_NS,"svg");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"viewBox","0 0 ".concat(this.width," ").concat(this.height)),this.gameElement.appendChild(e),this.board.render(e),this.player1.render(e),this.player2.render(e),this.ball.render(e,this.player1,this.player2),this.showBallXY(e,this.ball),this.score1.render(e,this.player1.score),this.score2.render(e,this.player2.score)}}}]),h}();exports.default=u;
},{"./Board":"b6em","./Paddle":"4oVX","./Ball":"gSQY","./PowerUp":"lbK0","./Score":"y/AE","../settings":"Q9a9"}],"H99C":[function(require,module,exports) {
"use strict";require("./styles/game.css");var e=a(require("./partials/Game"));function a(e){return e&&e.__esModule?e:{default:e}}var r=new e.default("game",1024,512);alert("Use a and z for up and down Player One (left Paddle) and arrow up and arrow down for Player Two (left paddle)"),function e(){r.render(),requestAnimationFrame(e)}();
},{"./styles/game.css":"vTx+","./partials/Game":"0vzb"}]},{},["H99C"], null)
//# sourceMappingURL=/project2-pong/src.5fe21b84.js.map