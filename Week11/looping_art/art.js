let rotateBy = 15;
let rotateArm = 15;

function setup() {
    createCanvas(1000, 1000);
    background("#cccccc");
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy/ 360);
    noFill();

    // ellipse //
    stroke("#ffffff");
    strokeWeight(1.25);
    ellipse(100, 200 + (2 * alt), 300 - (3 * alt));    
}

function draw() {
    translate(500, 500);
    rotate(rotateBy);
    makeArm(rotateArm);
    rotateBy += 15;
    rotateArm += 5
}

function mousePressed() {
    noLoop();
}
