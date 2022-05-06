//color picker function: geeksforgeeks.org//
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
    gslider = createSlider(0, 255, 0, 5);
    bslider = createSlider(0, 255, 0, 5);
    resetSketch();
    var button = createButton("Reset");
    button.mousePressed(resetSketch);
}

function resetSketch(){
    background(0);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 100);
    
    let petals = round(random(8, 40),0);
    let layers = random(6, 10);
    let ang = 360/petals;
    let colorPicker;
    
    

    for (let j=layers; j>0; j--){
        let ly = j/layers;
    //below coordinates are for the curve//
    x1 = random(500*ly, 550*ly);
    x4 = random(450*ly, 465*ly);
    x2 = random(400*ly, 435*ly);
    let maxX2 = x2*tan(ang)*0.9;
    y2 = random(35*ly, maxX2*ly);
    x3 = random(120*ly, 150*ly);
    y3 = random(30*ly, maxX2*ly);
    
    
    //fill(colorPicker.color());

    //let hue = random(256);
   // let sat = random(70, 100);
   // let brt = random(70, 100);
    //let alph = random(70, 100);
    //colorPicker = createColorPicker("blue");
    //fill(colorPicker.color(hue, sat, brt, alph));
    var r = rslider.value();
    var g = gslider.value();
    var b = bslider.value();
    fill(r, g, b);
   


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

    //stroke(hue, sat, brt, alph);
    strokeWeight(2);
    line(x1, 0, x4, 0);
        rotate(ang);
    }
}
}
