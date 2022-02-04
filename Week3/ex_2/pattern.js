function setup () {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, outerRingColor, ringColor) {
    translate (originX, originY);
    fill(primaryColor); 
    square(0, 0, 200);
    fill(secondaryColor);
    square(100, 0, 100);
    square(0, 100, 100);
    // intersecting lines //
    stroke("white");
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    line(100, 200, 100, 0);
    line(0,100, 200, 100);   
    // center circles //
    noFill();
    stroke(outerRingColor);
    strokeWeight(10);
    circle(100, 100, 200);
    stroke(ringColor);
    circle(100, 100, 100);
    // white triangle corners, center square //
    fill("white");
    noStroke();
    square(75, 75, 50);
    triangle(175, 0, 200, 25, 200, 0);
    triangle(175, 200, 200, 175, 200, 200);
    triangle(0, 175, 25, 200, 0, 200);
    triangle(0, 0, 25, 0, 0, 25);
}
function draw() {
    createTile(0, 0,"#4a0594","#006092","#4a0594","#006092");
    createTile(0, 200,"#006092","#4a0594","#006092","#4a0594");
    createTile(0, 200,"#4a0594","#006092","#4a0594","#006092");
    createTile(200, -400,"#006092","#4a0594","#006092","#4a0594");
    createTile(0, 200,"#4a0594","#006092","#4a0594","#006092");
    createTile(0, 200,"#006092","#4a0594","#006092","#4a0594");
    createTile(200, -400,"#4a0594","#006092","#4a0594","#006092");
    createTile(0, 200,"#006092","#4a0594","#006092","#4a0594");
    createTile(0, 200,"#4a0594","#006092","#4a0594","#006092");
}