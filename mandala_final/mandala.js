//Coding a Mandala Art Maker in p5.js - generative art programming//
//From Steve's Makerspace - Feb 28, 2022//
//https://youtu.be/lz_aCw2Um3E//

//RGB Sliders from the p5.js site//
//https://editor.p5js.org/yellowsubmarine/sketches/7jKeK8CGW//

//9.10: Reset a Sketch with Button Click - p5.js Tutorial//
//The Coding Train - Mar 24, 2016//
//https://youtu.be/lm8Y8TD4CTM//

// saveCanvas from p5.js reference and Amy Jo's Week 11.A exercise//
//https://p5js.org/reference/#/p5/saveCanvas//

let x1, x2, y2, x3, y3, y4;

var r;
var g;
var b;

var rslider = 0;
var gslider = 0;
var bslider = 0;

function setup() {
    createCanvas(1200, 1200);
    translate(width/2, height/2);
    rslider = createSlider(0, 255, 0, 5);
    rslider.addClass('red-slider')
    gslider = createSlider(0, 255, 0, 5);
    gslider.addClass('green-slider')
    bslider = createSlider(0, 255, 0, 5);
    bslider.addClass('blue-slider');
    //resetSketch//
    resetSketch();
    var button = createButton("Apply");
    button.mousePressed(resetSketch);
    //saveCanvas//
    var button = createButton("Capture"); 
    button.mousePressed(captureCanvas);     
} 
function captureCanvas(){
    saveCanvas("mandala", "jpg")
}
function resetSketch(){
    background("#666666");
    angleMode(DEGREES);
    
    let petals = round(random(8, 40),0);
    let layers = random(6, 10);
    let ang = 360/petals;
    
    var r = rslider.value();
    var g = gslider.value();
    var b = bslider.value();
    
    for (let j=layers; j>0; j--){
        fill(r, g, b);
        let ly = j/layers;
    //below coordinates are for the curve//
    x1 = random(500*ly, 550*ly);
    x4 = random(450*ly, 465*ly);
    x2 = random(400*ly, 435*ly);
    let maxX2 = x2*tan(ang)*0.9;
    y2 = random(35*ly, maxX2*ly);
    x3 = random(120*ly, 150*ly);
    y3 = random(30*ly, maxX2*ly);

    for(let i = 0; i<petals; i++) {
        stroke(0, 0, 0);
    //single vertex must be duplicated to create the entire shape//
    beginShape();
        curveVertex(x1, 0);
        curveVertex(x1, 0);
        curveVertex(x2, y2);
        curveVertex(x3, y3);
        curveVertex(x4, 0);
        curveVertex(x4, 0);
        endShape();

    beginShape();
        curveVertex(x1, 0);
        curveVertex(x1, 0);
        curveVertex(x2, -y2);
        curveVertex(x3, -y3);
        curveVertex(x4, 0);
        curveVertex(x4, 0);
        endShape();

    // next two lines add a stroke around each shape - i'm leaving it off because i prefer it without//
    //strokeWeight(2);
    //line(x1, 0, x4, 0);
        rotate(ang);   
    }
    // fill placed below has lighter outer ring and a gradient from center outward, lighter to darker// 
    //fill(r, g, b);
    // random increase = larger color variety in the outer petals, less in the inner//
    r=r+random(0, 150);
    g=g+random(0, 150);
    b=b+random(0, 150);
    }
}


