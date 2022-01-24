function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(125);
    }
    square(mouseX, mouseY, 80, 10);
  }