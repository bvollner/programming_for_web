
let startingX = 300;
let startingY = 100;
let myCards = [];
let startingId = 0;
function setup () {
    createCanvas(1500, 750);
    background(155);
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 6; i++) {
            rect(startingX, startingY, 125, 175);
            myCards.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150;
            startingId++;
        }
        startingY += 200;
        startingX = 300;
    }
    
    console.log(myCards);
}