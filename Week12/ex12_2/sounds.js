var button;
var amp;
let mySound;

function setup() {
    createCanvas(400, 400);
    song = loadSound("../audio/chopin.mp3", loaded);
    amp = new p5.Amplitude();
    background(51);
}

function loaded() {
    button = createButton("play");
    button.mousePressed(togglePlaying);
}

function draw() {
    background (51);

    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.5, 40, 200)

    fill(255, 0, 255);
    ellipse(width/2, height/2, diam, diam);
}

function togglePlaying() {
    if (!song.isPlaying()){
        song.play();
        song.setVolume(0.3);
    } else {
        song.stop();
        button.html("play");
    }
}