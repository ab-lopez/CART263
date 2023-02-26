/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

// Declare colour variables
let blue, bgBlue, bgPink; // bg colours
let fgSand, fgPink, fgPlum; // foreground colours
let bBlue, bHLight; // bubble colours

let bubbleArray = []; // array for bubbles
let bubbleCount = 0; // bubble counter... increases to display + move each bubble
                     // that is added to the array

"use strict";


/**
Description of preload
*/
function preload() {

// assign color variables:
blue = color(68, 156, 154); // background colours... ocean
bgBlue = color(143, 179, 194); // bg coral
bgPink = color(116, 142, 166);

fgSand = color(212, 176, 191); // foreground colours...
fgPink = color(204, 120, 156); // coral
fgPlum = color(150, 81, 114);

bBlue = color(94, 191, 189, 200); // bubble colours
bHLight = color(126, 222, 220, 200);

}


/**
Description of setup
*/
function setup() {

createCanvas(800, 500); // create a canvas
bubbleTimer(); // start bubble timer to create bubbles.. only needs to run once
               // hence why its in setup


}


/**
Description of draw()
*/
function draw() {

background(blue); // background to blue


for(let i = 0; i < bubbleCount; i++){ // for each bubble in the array according to the bubble counter...
    bubbleArray[i].display(); // display bubbles
    bubbleArray[i].bubblesUp(); // make bubbles rise
}

// separate functions so that
displayBGCoral(); // display bg coral
displayFGCoral(); // display foreground coral

}

function mousePressed(){
    print(mouseX, mouseY);
}

// function to display background coral
// essentially draws it by creating a shape by listing each vertex
function displayBGCoral(){
noStroke();

//background coral, purple
{
    fill(bgPink);

    beginShape(); // far right coral
    vertex(800, 0);
    vertex(775, 0);
    vertex(775,65);
    vertex(780, 95);
    vertex(775, 115);
    vertex(730, 90);
    vertex(720, 45);
    vertex(710, 45);
    vertex(700, 70);
    vertex(735, 120);
    vertex(760, 130);
    vertex(780, 130);
    vertex(800, 170);
    endShape();

    beginShape(); // middle
    vertex(640, 375);
    vertex(665, 365);
    vertex(655, 350);
    vertex(710, 305);
    vertex(725, 245);
    vertex(710, 240);
    vertex(695, 300);
    vertex(680, 295);
    vertex(685, 220);
    vertex(665, 215);
    vertex(660, 225);
    vertex(665, 300);
    vertex(660, 315);
    vertex(615, 300);
    vertex(610, 295);
    vertex(590, 190);
    vertex(580, 195);
    vertex(575, 230);
    vertex(590, 295);
    vertex(570, 305);
    vertex(510, 270);
    vertex(495, 275);
    vertex(495, 290);
    vertex(575, 330);
    vertex(605, 325);
    vertex(630, 340);
    vertex(630, 350);
    vertex(600, 360);
    vertex(580, 380);
    vertex(560, 360);
    vertex(550, 370);
    vertex(550, 380);
    vertex(590, 410);
    vertex(600, 405);
    vertex(595, 390);
    vertex(645, 360);
    endShape();
}

// background coral, blue
{
fill(bgBlue);
beginShape()
vertex(800, 500);
vertex(800, 270);
vertex(790, 240);
vertex(780, 242);
vertex(775, 255);
vertex(785, 290);
vertex(785, 340);
vertex(760, 345);
vertex(740, 320);
vertex(740, 260);
vertex(770, 235);
vertex(780, 225);
vertex(785, 200);
vertex(780, 195);
vertex(770, 195);
vertex(763, 220);
vertex(745, 235);
vertex(735, 230);
vertex(750, 155);
vertex(750, 70);
vertex(740, 65);
vertex(735, 65);
vertex(725, 100);
vertex(730, 150);
vertex(725, 205);
vertex(715, 210);
vertex(700, 180);
vertex(700, 145);
vertex(690, 140);
vertex(680, 165);
vertex(700, 220);
vertex(725, 220);
vertex(720, 265);
vertex(725, 315);
vertex(715, 320);
vertex(700, 305);
vertex(695, 285);
vertex(685, 285);
vertex(675, 305);
vertex(705, 335);
vertex(715, 340);
vertex(715, 350);
vertex(675, 355);
vertex(630, 375);
vertex(620, 395);
vertex(550, 415);
vertex(535, 395);
vertex(555, 305);
vertex(555, 285);
vertex(545, 210);
vertex(535, 205);
vertex(520, 220);
vertex(520, 250);
vertex(535, 305);
vertex(525, 340);
vertex(510, 345);
vertex(495, 320);
vertex(480, 320);
vertex(475, 345);
vertex(505, 390);
vertex(505, 405);
vertex(490, 420);
vertex(490, 435);
vertex(365, 445);
vertex(220, 500);
endShape(); 
}

// baground sand details...
{
    fill(bgPink);

    beginShape();
    vertex(800, 400);
    vertex(800, 365);
    vertex(750, 370);
    vertex(675, 400);
    vertex(670, 415);
    vertex(595, 445);
    vertex(555, 455);
    vertex(540, 500);
    vertex(800, 500);
    vertex(800, 465);
    vertex(745, 475);
    vertex(715, 470);
    vertex(800, 440);
    endShape();
}


}

// function to display foreground coral
function displayFGCoral(){

noStroke();

//sand
{
    fill(fgSand);

    beginShape();
    vertex(0, 500);
    vertex(655, 500);
    vertex(655, 490);
    vertex(580, 475);
    vertex(550, 455);
    vertex(440, 450);
    vertex(390, 425);
    vertex(320, 420);
    vertex(220, 355);
    vertex(90, 340);
    vertex(0, 290);
    endShape();
}

//sand shade
{
    fill(fgPink);

    beginShape();
    vertex(435, 500);
    vertex(645, 500);
    vertex(595, 485);
    vertex(560, 490);
    vertex(540, 490);
    vertex(455, 470);
    vertex(465, 480);
    vertex(465, 485);
    vertex(415, 490);
    vertex(405, 480);
    vertex(370, 480);
    vertex(370, 490);
    vertex(325, 500);
    endShape();

    beginShape();
    vertex(230, 500);
    vertex(85, 500);
    vertex(25, 455);
    vertex(65, 460);
    vertex(55, 450);
    vertex(65, 450);
    vertex(100, 465);
    vertex(110, 465);
    vertex(115, 460);
    vertex(140, 465);
    vertex(150, 465);
    vertex(155, 460);
    vertex(140, 440);
    vertex(175, 435);
    vertex(190, 450);
    vertex(195, 450);
    vertex(200, 445);
    vertex(215, 455);
    vertex(250, 455);
    vertex(255, 445);
    vertex(260, 445);
    vertex(270, 460);
    vertex(245, 470);
    vertex(240, 480);
    vertex(255, 480);
    vertex(285, 465);
    vertex(320, 490);
    vertex(290, 485);
    vertex(280, 490);
    vertex(295, 500);
    vertex(285, 500);
    vertex(260, 490);
    vertex(240, 490);
    vertex(255, 500);
    endShape();

    beginShape();
    vertex(280, 450);
    vertex(295, 450);
    vertex(345, 485);
    vertex(325, 485);
    endShape();

    beginShape();
    vertex(324, 445);
    vertex(295, 440);
    vertex(325, 455);
    vertex(345, 470);
    vertex(360, 475);
    vertex(365, 475);
    vertex(365, 470);
    vertex(375, 460);
    vertex(390, 460);
    vertex(415, 470);
    vertex(430, 470);
    vertex(450, 460);
    vertex(385, 445);
    vertex(350, 445);
    endShape();

    beginShape();
    vertex(0, 400);
    vertex(0, 445);
    vertex(75, 440);
    vertex(95, 425);
    vertex(110, 415);
    vertex(220, 415);
    vertex(255, 410);
    vertex(185, 405);
    vertex(155, 385);
    vertex(120, 385);
    vertex(45, 370);
    vertex(0, 340);
    vertex(0, 365);
    vertex(15, 380);
    vertex(25, 400);
    vertex(15, 405);
    vertex(20, 415);
    endShape();
}

// dark coral
{
fill(fgPlum);

beginShape(); // far left coral
vertex(45, 375);
vertex(20, 370);
vertex(10, 315);
vertex(0, 310);
vertex(0, 250);
vertex(5, 255);
vertex(15, 255);
vertex(25, 220);
vertex(20, 110);
vertex(30, 80);
vertex(45, 75);
vertex(65, 90);
vertex(70, 115);
vertex(50, 225);
vertex(35, 245);
vertex(35, 270);
vertex(50, 275);
vertex(60, 275);
vertex(70, 235);
vertex(80, 230);
vertex(95, 225);
vertex(95, 255);
vertex(90, 275);
vertex(70, 295);
vertex(50, 305);
vertex(85, 325);
vertex(115, 320);
vertex(140, 320);
vertex(155, 335);
vertex(130, 365);
vertex(145, 370);
vertex(145, 375);
vertex(120, 385);
endShape();

beginShape(); // coral two
vertex(225, 410);
vertex(130, 405);
vertex(125, 400);
vertex(175, 390);
vertex(180, 385);
vertex(200, 380);
vertex(205, 335);
vertex(195, 325);
vertex(195, 300);
vertex(185, 290);
vertex(195, 280);
vertex(210, 275);
vertex(215, 285);
vertex(220, 310);
vertex(225, 310);
vertex(240, 245);
vertex(250, 235);
vertex(260, 240);
vertex(265, 255);
vertex(235, 315);
vertex(235, 335);
vertex(220, 345);
vertex(220, 375);
vertex(235, 385);
vertex(235, 410);
endShape();

beginShape(); //coral 3
vertex(275, 415);
vertex(280, 370);
vertex(255, 355);
vertex(260, 335);
vertex(270, 340);
vertex(290, 360);
vertex(295, 360);
vertex(315, 345);
vertex(315, 335);
vertex(305, 305);
vertex(285, 280);
vertex(285, 265);
vertex(300, 265);
vertex(315, 295);
vertex(335, 280);
vertex(335, 250);
vertex(300, 190);
vertex(310, 180);
vertex(325, 180);
vertex(335, 220);
vertex(355, 250);
vertex(355, 275);
vertex(345, 305);
vertex(350, 310);
vertex(365, 310);
vertex(385, 295);
vertex(395, 295);
vertex(400, 310);
vertex(380, 325);
vertex(340, 325);
vertex(330, 320);
vertex(335, 335);
vertex(340, 345);
vertex(335, 360);
vertex(315, 370);
vertex(310, 380);
vertex(320, 380);
vertex(340, 370);
vertex(350, 370);
vertex(355, 385);
vertex(345, 400);
vertex(330, 400);
vertex(310, 395);
vertex(295, 390);
vertex(295, 410);
endShape();

beginShape(); // bottom thing
vertex(0, 480);
vertex(15, 480);
vertex(55, 470);
vertex(70, 470);
vertex(90, 480);
vertex(85, 500);
vertex(0, 500);
endShape();

beginShape(); //bottom thing pt. 2
vertex(90, 500);
vertex(100, 485);
vertex(110, 485);
vertex(125, 500);
endShape();

beginShape(); // coral right pt.1
vertex(530, 500);
vertex(465, 500);
vertex(475, 490);
vertex(485, 445);
vertex(465, 435);
vertex(465, 425);
vertex(470, 420);
vertex(480, 425);
vertex(490, 430);
vertex(500, 420);
vertex(500, 395);
vertex(485, 385);
vertex(480, 375);
vertex(480, 375);
vertex(490, 365);
vertex(505, 365);
vertex(510, 390);
vertex(520, 385);
vertex(530, 365);
vertex(540, 340);
vertex(550, 335);
vertex(565, 345);
vertex(535, 405);
vertex(520, 415);
vertex(510, 455);
vertex(525, 460);
vertex(540, 465);
vertex(565, 435);
vertex(560, 425);
vertex(560, 420);
vertex(575, 415);
vertex(580, 415);
vertex(580, 425);
vertex(590, 430);
vertex(610, 410);
vertex(605, 380);
vertex(630, 360);
vertex(635, 370);
vertex(635, 380);
vertex(620, 390);
vertex(625, 415);
vertex(625, 420);
vertex(605, 435);
vertex(625, 435);
vertex(645, 415);
vertex(660, 415);
vertex(670, 425);
vertex(640, 450);
vertex(630, 455);
vertex(590, 450);
vertex(575, 455);
vertex(560, 470);
vertex(535, 485);
vertex(520, 470);
vertex(510, 470);
vertex(510, 490);
vertex(520, 490);
endShape();

beginShape(); // coral right pt. 2
vertex(565, 500);
vertex(570, 485);
vertex(565, 480);
vertex(565, 475);
vertex(590, 460);
vertex(610, 465);
vertex(600, 480);
vertex(615, 480);
vertex(635, 465);
vertex(675, 450);
vertex(680, 460);
vertex(680, 475);
vertex(650, 480);
vertex(640, 480);
vertex(620, 500);
endShape();


}

// pink coral... left to right
{
    fill(fgPink);

    beginShape(); // 1
    vertex(100, 385);
    vertex(65, 385);
    vertex(45, 345);
    vertex(40, 305);
    vertex(45, 295);
    vertex(55, 300);
    vertex(60, 315);
    vertex(65, 320);
    vertex(60, 335);
    vertex(70, 345);
    vertex(80, 340);
    vertex(90, 335);
    vertex(95, 300);
    vertex(80, 270);
    vertex(80, 225);
    vertex(85, 215);
    vertex(100, 230);
    vertex(105, 270);
    vertex(115, 280);
    vertex(155, 185);
    vertex(170, 210);
    vertex(170, 230);
    vertex(155, 265);
    vertex(120, 295);
    vertex(115, 335);
    vertex(135, 335);
    vertex(135, 345);
    vertex(125, 355);
    vertex(100, 355);
    vertex(95, 370);
    endShape();

    beginShape(); // 2
    vertex(360, 450);
    vertex(340, 455);
    vertex(330, 440);
    vertex(330, 425);
    vertex(290, 405);
    vertex(285, 385);
    vertex(290, 380);
    vertex(315, 380);
    vertex(330, 410);
    vertex(335, 410);
    vertex(350, 410);
    vertex(365, 390);
    vertex(365, 360);
    vertex(345, 335);
    vertex(355, 320);
    vertex(370, 320);
    vertex(385, 365);
    vertex(380, 395);
    vertex(390, 410);
    vertex(380, 435);
    vertex(395, 440);
    vertex(410, 415);
    vertex(425, 415);
    vertex(440, 425);
    vertex(440, 435);
    vertex(410, 445);
    vertex(410, 460);
    endShape();

}

}

function bubbleTimer(){
    makeBubble(); // call makeBubble function once prior to the interval
    setInterval(makeBubble, 500); // make new bubble every 0.5 seconds
}

function makeBubble(){
    bubbleArray[bubbleCount] = new BubbleParticle(random(width), random(20, 60)); // make a new bubble at index count, w random x, random size
    bubbleCount++; // increase count so the for loop in the draw function knows how many bubbles to display
}

class BubbleParticle {
    constructor(x, size) {
        this.x = x;
        this.y = height;
        this.size = size;
    }

    display() {
        fill(bBlue); // fill bubble blue
        noStroke();
        ellipse(this.x, this.y, this.size); // bubble at random x position, at bottom of screen, random size

        fill(bHLight); // highlight colour
        ellipse((this.x + this.size/5), (this.y - this.size/5), (this.size/5)); // slightly smaller circle as highlight
                                                                                // in relation to bubble position
    }

    bubblesUp() {
        this.y -= 1; // y decreases, making the bubble go "up"
    }
}