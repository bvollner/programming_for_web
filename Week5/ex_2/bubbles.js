let bubble = [];

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 50; i++){
        let x = random(width)
        let y = random(height)
        bubble[i] = new Bubble (x, y)
}
}

function draw() {
    background(255);
    for (let i = 0; i < bubble.length; i++){
    bubble[i].move();
    bubble[i].show();
}
}

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
}

show() {
    stroke("#339999");
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 30, 30);
}
}