function setup() {
    createCanvas (200,200);
}
function createTile() {
    translate (0,0);
    fill("#4a0594"); 
    rect(0, 0, 200, 200);
    fill("#006092");
    rect(100, 0, 200, 100,);
    rect(0, 100, 100, 200);
    // intersecting lines //
    stroke("white");
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    line(100, 200, 100, 0);
    line(0,100, 200, 100);
    // white triangle corners, center square //
    fill("white");
    square(75, 75, 50);
    triangle(175, 0, 200, 25, 200, 0);
    triangle(175, 200, 200, 175, 200, 200);
    triangle(0, 175, 25, 200, 0, 200);
    triangle(0, 0, 25, 0, 0, 25);
    // center circles //
    noFill();
    stroke("#4a0594");
    strokeWeight(10);
    circle(100, 100, 200);
    stroke("#006092");
    circle(100, 100, 100);
}
function draw() {
    createTile();
}