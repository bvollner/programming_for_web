var slider;
var slider2;
var pos;

function setup() {
    createCanvas (750,750);
    angleMode(DEGREES);

    pos = 0.0;
    inc = 3.0; 

    pos2 = 0.0;
    inc2 = 9.0; 

    pos3 = 0.0;
    inc3 = 6.0; 
}

function draw() {

        clear();
        background(51);
        translate(width/2, height/2);

        var mySinVal = sin(pos)
        var mySinVal2 = sin(pos2)
        var mySinVal3 = sin(pos3)
        amplified = mySinVal * 50 
        amplified2 = mySinVal2 * 25
        amplified3 = mySinVal3 * 75 

        for (x = 0; x <= 360; x = x + 5) {
            curve(0, 10, 50, amplified2, amplified, 10, amplified + 100, 500)
            rotate(x);
        }
        for (x = 0; x <= 360; x = x + 15){
            bezier(45, 5, 100, 100, amplified2 + 25, mySinVal2, amplified + 50, 200);
            rotate(x);
            stroke("#66ccff");
            strokeWeight(3);
        }
        for (x = 0; x <= 360; x = x + 15){
            bezier(amplified3, 20, 10, 10, mySinVal3, 90, amplified + 75, 80);
            rotate(x);
            stroke("#66ccff");
            strokeWeight(3);
        }

        pos = pos + inc;
        pos2 = pos2 + inc2;
        pos3 = pos3 + inc3;
}