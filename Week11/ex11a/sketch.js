// The Coding Train, Coding Challenge #16//
var angle
var axiom = "F";
var sentence = axiom;
var len = 150;

var rules = [];
rules[0] = {
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
    len *= 0.5;
    var nextSentence = "";
    for (var i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);
      var found = false;
      for (var j = 0; j < rules.length; j++) {
        if (current == rules[j].a) {
          found = true;
          nextSentence += rules[j].b;
          break;
        }
      }
      if (!found) {
        nextSentence += current;
      }
    }
    sentence = nextSentence;
    createP(sentence);
    turtle();
}
// the turtle is what is going to draw, this is where it gets funky //
function turtle() {
    resetMatrix();
    translate(width/2, height - len);
    stroke(255);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);

        if (current == "F") {
            line (0, 0, 0, -len);
            translate(0, -len);
        } else if (current == "+") {
            rotate(angle);
        } else if (current == "-") {
            rotate(-angle);
        } else if (current == "[") {
            push();
        } else if (current == "]") {
            pop();
        } 
    }
}

function setup() {
    createCanvas(800, 800);
    angle = radians(25);
    background(51);
    //createP(axiom);
    turtle();
    var button = createButton("Generate");
    button.mousePressed(generate);
}
