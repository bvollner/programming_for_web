//Tree - Based off of The Coding Train: Coding Challenge #14//
// Wind - Based off of CP2: Wind in the Trees - Jeff Thompson //

var angle = 30;
//perlin noise wind var//
var windSpeed = 50;
var noisePos = 20;
var windInc = 0.01;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES) //CT used PI / 4 but i couldn't get that to work so I switched to degrees//
}

function draw () {
    background("#efefef");
    stroke("#339900");  
    translate(width/2, height);
    rotate(radians(windSpeed)); //wind//
    branch(175);   
}

function branch(len) {
    line(0, 0, 0, 0 -len);
    translate(0, -len);
    if (len > 12) {  
        push (); //push and pop reset the starting point for drawing branches while maintaining previously drawn ones//
        rotate(angle); 
        branch(len * 0.75);
        pop ();
        push ();
        rotate(-angle);
        branch(len * 0.75);
        pop ();
        windSpeed = noise(noisePos) *30;
        noisePos += windInc;
        // Added a third and fourth branches with shorter branch length//
        push ();
        rotate(-angle + 15);
        branch(len * 0.5);
        pop ();
        push ();
        rotate(angle + 15);
        branch(len * 0.5);
        pop ();        
    }
}