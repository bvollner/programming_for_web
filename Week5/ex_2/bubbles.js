let bubble;

function setup() {
    createCanvas(600, 600);
    bubble = new Bubble ();
}

function draw() {
    background(255);
    bubble.move();
    bubble.show();
    for( let i = 0; i < 10; i++){
        redraw(bubble);
    };
}

class Bubble {
    constructor() {
        this.x = 300;
        this.y = 100;
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