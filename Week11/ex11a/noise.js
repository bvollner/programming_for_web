// This flow field exercise is based off of the Coding Train, Coding Challenge #24//
// https://youtu.be/BjoM9oKOAKY//
// https://github.com/CodingTrain/website/tree/main/CodingChallenges/CC_024_PerlinNoiseFlowField//

var inc = 0.5;
var scl = 100;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
    createCanvas(1200, 800);
    colorMode(HSB, 255);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP("");

    flowfield = new Array(cols * rows);

    for (var i = 0; i < 750; i++) {
    particles[i] = new Particle();
}
background(66);
}

function draw() {

    var yoff = 0;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            var index = x + y * cols;
            var angle = noise(xoff, yoff, zoff) * TWO_PI;
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc;
            stroke(0, 10);
            //push();
                //translate(x * scl, y * scl);
                //rotate(v.heading());
                //line(0, 0, scl, 0);
            //pop();
        }
        yoff += inc;
    
        zoff += 0.004;
}

for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
}    
    //fr.html(floor(frameRate()));
}