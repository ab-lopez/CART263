/**
Triggering Dissociation
Abigail Lopez 40203553

My prompt was "lonely and sad". I really wanted to emulate
the feeling of being lonely and sad and full of despair and
really capture what it feels like to dissociate, when everything
feels so bleak and meaningless.

For me, images of a relentless ocean, dripping water (my friend
brought up the idea of Chinese water torture, which I had never
considered but I think it's a cool idea to mention here), and the
static in your head as you feel worse and worse and worse.

Took sounds from:
- https://www.youtube.com/watch?v=pWhjBUheoyo
- https://www.youtube.com/watch?v=hDKoBxZbwoo

Code from a variety of places:
- https://editor.p5js.org/Jaemi13/sketches/gAS-FB5Sx, to help me figure out gradients
- https://www.youtube.com/watch?v=Mg9Alcygelc and https://www.youtube.com/watch?v=yHDPZdjHQU4
  to help with coding physics

Also got some help with displaying the gradients from chatGPT. 
Thank you AI for taking over the world.
*/

"use strict";

let ocean = []; // new array
let droplets = [];
let staticSound, stormSound; // declare variables for sounds

let oceanInitial = 500; // how many particles initially, will add to it

let reverb = 0; // declare variable for noise reverb

let c1, c2; // colour variables for background
let backgroundColor;


/**
Description of preload
*/
function preload() {
    staticSound = loadSound('assets/sounds/static.mp3'); // load sounds, from https://www.youtube.com/watch?v=pWhjBUheoyo
    stormSound = loadSound('assets/sounds/storm.mp3'); // from https://www.youtube.com/watch?v=hDKoBxZbwoo
}


/**
Description of setup
*/
function setup() {
    createCanvas(400, 400); // create canvas!
    for(let i = 0; i < oceanInitial; i++){   // for loop... create 200 water particles for ocean
        ocean[i] = new WaterParticle(random(5, 390), random(250, 390), random(10,100), 0);
    } 
    makeNewGuys(); // call function to make a droplet
}


/**
Description of draw()
*/
function draw() {
    createGradient();
    image(backgroundColor, 0, 0);

    for(let i = 0; i < oceanInitial; i++){   // for all water particles...
        ocean[i].display(); // display them
       ocean[i].physicsVid(); // function to make particles bounce off walls/bottom of canvas
    }

}

function createGradient(){ // code from https://editor.p5js.org/Jaemi13/sketches/gAS-FB5Sx
                            // i also got coding help from chatGPT. i was having trouble finding code
                            // that would help me copy and redraw a canvas. whoops :P at least now i know! :D
    let c1 = color(100); // grey
    let c2 = color(255); // white

   backgroundColor = createGraphics(width, height);
    for(let y=0; y<height; y++){
        let n = map(y,0,height,0,1);
        let newc = lerpColor(c1,c2,n);
        stroke(newc);
        line(0,y,width, y);
      }
}

class WaterParticle {
    constructor(x, y, size, type) {
        this.x = x; // random x coordinate
        this.y = y; // random y coordinate
        this.size = size // size
        this.type = type; // number, determines if particle is "ocean" (0) or "droplet" (1)

        this.xVel = random(-2,2); // velocities
        this.yVel = 0;
        this.xAcc = 0;
        this.yAcc = 0.05;
    }
    display() {
        fill(0); // fill black
        noStroke();
        ellipse(this.x, this.y, this.size); // create/display particles
    }

    physicsVid(){ // like the falling! from https://www.youtube.com/watch?v=Mg9Alcygelc
                                        // also from https://www.youtube.com/watch?v=yHDPZdjHQU4
           
            if(this.type == 1){ // if "droplet", no bouncing off walls, therefore xVelocity can be 0 to stay straight
                this.xVel = 0;
            }

            this.x += this.xVel;
            this.y += this.yVel;
            this.xVel += this.xAcc;
            this.yVel += this.yAcc; 

            if(this.y >= 400 && this.type == 0){ // bouncing off floor, but only if type is "ocean"
                this.yVel *= -0.99; // reverse the velocity when it bounces off floor, less than -1
                                    // so that it slowly "calms" down. exponential decrease? or something similar
            }

            if(this.x >= 390 || this.x <= 5){ // bounce off walls
                this.xVel *= -1; // no exponential decrease
            }
    }
}

function makeNewGuys() {
    drippingWater(); // call function once to make water go
    setInterval(drippingWater, ((random(2,20))*1000)); // timer to start dripping water
                                                       // runs once every 2-20 seconds to make it irregular 

}

function drippingWater() {
    let newParticle = new WaterParticle(200, 0, 10, 1); // create new water droplet particle
    ocean.push(newParticle); // push the array
    oceanInitial++; // increase variables storing number of ocean initial on screen to make droplet visible
}

function keyPressed(){
    staticSound.play(); // play, set the volume to a certain level, loop
    staticSound.setVolume(0.01); // google doesn't let sound auto play so it has to be linked to a user function
    staticSound.loop();

    stormSound.play();
    stormSound.setVolume(0.03);
    stormSound.loop(); 
}

function mousePressed(){
    reverb += 0.01; // everytime the mouse is clicked, reverb goes up
    staticSound.amp(reverb); // the static noises get louder

    if(reverb >= 0.05){ // at a certain point, the ocean noises will begin to decrease so the static takes precedence
    stormSound.setVolume(0.03 - reverb);
    }
}