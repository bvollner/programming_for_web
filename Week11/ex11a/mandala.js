let x1, x2, y2, x3, y3, y4;


function setup() {
    createCanvas(900, 900);
    background(0);
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 100);
    translate(width/2, height/2);
    let petals = round(random(8, 40),0);
    let layers = random(8, 14);
    let ang = 360/petals;

    for (let j=layers; j>0; j--){
        let ly = j/layers;
    //below coordinates are for the curve//
    x1 = random(205*ly, 255*ly);
    x4 = random(250*ly, 265*ly);
    x2 = random(210*ly, 235*ly);
    let maxX2 = x2*tan(ang)*0.9;
    y2 = random(25*ly, maxX2*ly);
    x3 = random(230*ly, 250*ly);
    y3 = random(25*ly, maxX2*ly);
    
    let hue = random(256);
    let sat = random(70, 100);
    let brt = random(70, 100);
    let alph = random(70, 100);
    fill(hue, sat, brt, alph);


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
    
    stroke(hue, sat, brt, alph);
    strokeWeight(2);
    line(x1, 0, x4, 0);
        rotate(ang);
    }
}
}