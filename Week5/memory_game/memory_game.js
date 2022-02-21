//let myCard;
const DOWN = "down";
const UP = "up";
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 9,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardFaceArray = [];
let cardBack;
function preload (){
    cardBack = loadImage("images/gumball-01.png");
    cardFaceArray = [
        loadImage("images/champers-01.png"),
        loadImage("images/coachella-01.png"),
        loadImage("images/dapper-01.png"),
        loadImage("images/fancy_dinner-01.png"),
        loadImage("images/house-01.png"),
        loadImage("images/offroad-01.png"),
        loadImage("images/pond-01.png"),
        loadImage("images/prom-01.png"),
        loadImage("images/travel-01.png"),
    ]
}
function setup () {
    createCanvas(1100, 900);
    let selectedFaces = [];
    for( let z = 0; z < 9; z++) {
       const randomIdx = floor(random(cardFaceArray.length));
       const face = cardFaceArray[randomIdx];
       selectedFaces.push(face);
       selectedFaces.push(face);
        // remove used cardface so it's not randomly selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i <6; i++){
            const cardFaceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImage));
            startingX += 150;
        }
        startingY += 200;
        startingX = 100;
    }
}

function draw () {
    background("#336633");
    if (gameState.numMatched === gameState.totalPairs) {
        fill("white");
        textSize(66);
        text("You Won!", 425, 775);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(24);
    text("Attempts: " + gameState.attempts, 100, 750);
    text("Matches: " + gameState.numMatched, 100, 800);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, then trigger flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
         if (gameState.flippedCards[0].cardFaceImage === gameState.flippedCards[1].cardFaceImage){
             //mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty flipped cards array
            gameState.flippedCards.length = 0;
            //increment score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }    
}
}

class Card {
    constructor (x, y, cardFaceImage) {
        this.x = x;
        this.y  = y;
        this.width = 125;
        this.height = 175;
        this.face = DOWN;
        this.cardFaceImage = cardFaceImage;
        this.isMatch = false;
        this.show();
    }
    show () {
        if(this.face === UP || this.isMatch) {
            fill("#aaaaaa");
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImage, this.x, this.y, this.width, this.height); 
        } else {
            fill("#336633");
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y, this.width, this.height);  
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
       if(this.face === DOWN) {
           this.face = UP;
       } else {
           this.face = DOWN;
       }
       this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        // pick random index
        const idx = Math.floor(Math.random() * counter);
        // decreases counter by 1
        counter--;
        // swaps the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}