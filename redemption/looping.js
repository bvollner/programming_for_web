//Based off of Geometric Pattern with "Nested for Loops" in p5.js//
//Computing Masterclass: https://youtu.be/EMIoUxLEYJ4//
let angle=0;

function setup() {
    createCanvas(700, 700);
    //I looked up how to center the canvas on the screen//
    canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto";
    rectMode(CENTER);
    ellipseMode(CENTER);
}

function draw() {
    background(0); 

    for(let i=0; i<700; i+=50) {
        for(let j=50; j<700; j+=50){
    noFill();
    stroke(mouseX-i, i, mouseY-j);
    
   

    let d=dist(mouseX, mouseY, i+width/2, j+height/2);
    let r=d/12;
    
    push();
    translate(i, j);
    ellipse(0, 0, r+25, r+25);
    strokeWeight(4);
    pop();

    push()
    translate(i, j);
    ellipse(0, 0, r/2, r/2);
    strokeWeight(12); 
    pop(); 

    push();
    translate(i, j);
    rotate(-angle)
    rect(0, 0, r, r);
    strokeWeight(18);
    pop(); 

    push();
    translate(i, j);
    rotate(angle)
    rect(0, 0, r/3, r/3);
    strokeWeight(8);
    pop();  

    angle+=0.00015
        }
    }

}

function mousePressed() {
    noLoop();
}