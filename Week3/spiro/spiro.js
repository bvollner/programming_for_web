let rotateBy = 15;
let rotateArm = 15;
let stroke1 = prompt("Enter a basic color in lowercase letters", "gray");
let stroke2 = prompt("Enter a second basic color", "white");
let stroke3 = prompt("Enter a third color", "green");

function setup() {
    createCanvas(1000, 1000);
    background("#cccccc");
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy/ 360);
    noFill();

    // ellipse //
    stroke(stroke1);
    strokeWeight(1.25);
    ellipse(100, 200 + (2 * alt), 300 - (3 * alt));

     // square //
    stroke(stroke2);
    strokeWeight(1);
    square(20, 20 + alt, 20 * (1.5 * alt));

    // triangle //
    stroke(stroke3);
    strokeWeight(.25);
    triangle(100 + alt, 100 - alt, 0 + alt, 0 - alt, 150 + alt, 250 - alt);    
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
