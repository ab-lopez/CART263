/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let ocean = []; // new array
let droplets = [];
let staticSound;
let stormSound;

let oceanInitial = 500; // how many particles initially, will add to it

let reverb = 0;


/**
Description of preload
*/
function preload() {
    staticSound = loadSound('assets/sounds/static.mp3');
    stormSound = loadSound('assets/sounds/storm.mp3');
}


/**
Description of setup
*/
function setup() {
    createCanvas(400, 400); // create canvas!
    for(let i = 0; i < oceanInitial; i++){   // for loop... create 200 water particles for ocean
        ocean[i] = new WaterParticle(random(5, 390), random(250, 390), random(10,100));
    } 
    makeNewGuys();
}


/**
Description of draw()
*/
function draw() {
    background(100);

    displayHelp();

    for(let i = 0; i < oceanInitial; i++){   // for all water particles...
        ocean[i].display(); // display them
       // ocean[i].drop();    // make em fall
       ocean[i].physicsVid();
    }

    for(let i = 0; i < droplets.length; i++){   // for all water particles...
        droplets[i].display(); // display them
        droplets[i].physicsVid();
    }

}

class WaterParticle {
    constructor(x, y, size) {
        this.x = x; // random x coordinate
        this.y = y; // random y coordinate
        this.size = size

        this.xVel = random(-2,2);
        this.yVel = 0;
        this.xAcc = 0;
        this.yAcc = 0.05;
    }
    display() {
        fill(0); // fill black
        ellipse(this.x, this.y, this.size);
    }

    physicsVid(){ // like the falling!

            this.x += this.xVel;
            this.y += this.yVel;
            this.xVel += this.xAcc;
            this.yVel += this.yAcc; 

            if(this.y >= 400){ // bouncing off floor
                this.yVel *= -0.95;
            }

            if(this.x >= 390 || this.x <= 5){ // bounce off walls
                this.xVel *= -1;
            }
    }
}

class WaterDroplet{
    constructor(x, y, size) {
        this.x = x; // random x coordinate
        this.y = y; // random y coordinate
        this.size = size

        this.xVel = 0;
        this.yVel = 0;
        this.xAcc = 0;
        this.yAcc = 0.05;
    }
  
    display() {
        fill(0); // fill black
        ellipse(this.x, this.y, this.size);
    }

    physicsVid(){ // like the falling!

        this.xVel = 0;

        this.x += this.xVel;
        this.y += this.yVel;
        this.xVel += this.xAcc;
        this.yVel += this.yAcc; 
    }
}

function makeNewGuys() {
    drippingWater();
    setInterval(drippingWater, ((random(2, 20))*1000));

}

function drippingWater() {
    let newParticle = new WaterDroplet(200, 0, 10);
    droplets.push(newParticle);
}

function keyPressed(){
    staticSound.play();
    staticSound.setVolume(0.01);
    staticSound.loop();

    stormSound.play();
    stormSound.setVolume(0.03);
    stormSound.loop(); 
}

function mousePressed(){
    reverb += 0.01;
    staticSound.amp(reverb);

    if(reverb >= 0.05){
    stormSound.setVolume(0.03 - reverb);
    }
}

function displayHelp(){
    textSize(32);
    fill(130);
    text('help. help?', 130, 250);
}