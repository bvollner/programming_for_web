let blockX = 0;
let blockY = 0;
let drawTimer;
let blockColor = 0;
const speed = 50;
const distance = 2;

function setup() {
    createCanvas(500, 500);
    background(155);
}

function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

function keyTyped () {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 0, 255);
    console.log("converted number", keyToNumber);
    blockColor = keyToNumber;
}
window.setTimeout (() => {
    drawTimer = window.setInterval(() => {
        if(blockY - 50 <= height) {
            drawBlock(blockX, blockY, blockColor);
            blockY += distance;
        } else{
            blockY = 0;
            blockX += 50;
        }
        if(blockY - 50 > height && blockX - 50 >width){
            window.clearInterval(drawTimer);
            alert("Done");
        }
    }, speed);
        
}, 1500);