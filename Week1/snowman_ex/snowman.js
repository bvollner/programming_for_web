let grid = undefined;
let stroke1 = prompt("Enter a basic color in lowercase letters", "blue");
let stroke2 = prompt("Enter a second basic color", "gray");
let stroke3 = prompt("Enter a third color", "orange");
let stroke4 = prompt("Enter a fourth color", "black");
function setup() {
    createCanvas(1000, 800);
    grid = loadImage("images/100px_grid.png");
    background("#0d6da4");   
}
function draw() {
    background(grid);
    //snowman legs//
    fill("#f1f1f1");
    strokeWeight(10);
    stroke(stroke1);
    //left leg//
    ellipse(350, 650, 200);
    //right leg//
    ellipse(650, 650, 200);
    //body//
    ellipse(500, 450, 350, 400);
    //head//
    ellipse(500, 200, 200);
    //hat brim//
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat body//
    fill("gray");
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes//
    stroke(stroke4);
    strokeWeight(50);
    point(450, 200);
    point(550, 200);
    //nose//
    fill("orange");
    strokeWeight(10);
    stroke(stroke3);
    triangle(495, 250, 505, 250, 500, 275); 
    //buttons//
    stroke("gray");
    strokeWeight(50);
    point(500, 350);
    point(500, 450);
    point(500, 550);
    //left arm//
    stroke("#291b01");
    strokeWeight(10);
    line(350, 400, 150, 250);
    line(200, 290, 200, 250);
    line(200, 290, 180, 290);
    //right arm//
    stroke("#291b01");
    strokeWeight(10);
    line(675, 400, 800, 250);
    line(775, 290, 775, 250);
    line(775, 290, 800, 290);
    //Ground//
    fill("#fff");
    noStroke();
    quad(0, 800, 0, 720, 1000, 720, 1000, 800); 
}