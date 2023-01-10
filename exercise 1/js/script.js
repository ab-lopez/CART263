/**
Tic Tac Toe
Abigail Lopez

I'm bad at tic tac toe. This is a tic tac toe game! Kachow.

*/

"use strict";

let playerOne = true; // var to determine which player's turn it is

let xPos; // coordinates for where precisely the x/y are going
let yPos;

let playerOneTallyr1;
let playerOneTallyr2;
let playerOneTallyr3;
let playerOneTallyc1;
let playerOneTallyc2;
let playerOneTallyc3;
let playerOneTallyd1;
let playerOneTallyd2;

let playerTwoTallyr1;
let playerTwoTallyr2;
let playerTwoTallyr3;
let playerTwoTallyc1;
let playerTwoTallyc2;
let playerTwoTallyc3;
let playerTwoTallyd1;
let playerTwoTallyd2;

let fullBoard;

/*
Okay so. Re. everything above. We're calculating who wins based off the concept of magic squares
A magic square is when there is a 3x3 grid w/ numbers arranged so that, any row/column/diagonal will add up
to the same number!

Therefore, after each player's turn, they have a "running score" that is based off of where their X or O has
been placed. If there are three in a row, following the logic of magic squares, it will add up to a certain number
and a win can be declared!

There's a tally for each row/column/diagonal, and when blocks are marked off they will count towards
the appropriate tally. 

Also a tally for fullBoard, aka if the board is filled up and no one has won. 
Once the board is filled, the game will clear and reset.
*/

/**
Description of preload
*/
function preload() {

}


/**
Creating the checkerboard!
Going for a teal/orange/yellowy green colour scheme..
*/
function setup() {
    createCanvas(900, 900); // Creating the checkerboard! 
    background(10, 90, 115); // I'm going for a teal/orange/yellow green scheme

    noStroke();
    fill(15, 115, 145);
    square(300, 0, 300);
    square(0, 300, 300);
    square(600, 300, 300);
    square(300, 600, 300);

}


/**
Description of draw()
*/
function draw() {

}

function mousePressed(){
    print("mouseX = " + mouseX);
    print("mouseY = " + mouseY);
    wherePutShape();
    printShape();
    playerOne = !playerOne;
    print(playerOne);
}

 function printShape(){
    if(playerOne == true){ // print orange circle
        fill(250, 170, 5);
        circle(xPos, yPos, 200);
    }

    if(playerOne == false){ // print green circle
        fill(190, 235, 30);
        circle(xPos, yPos, 200);
    }
}

function wherePutShape(){
    if(mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 300){ 
        xPos = 150;
        yPos = 150; // row 1 square 1
    }

    if(mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 300){ 
        xPos = 450;
        yPos = 150; // row 1 square 2
    }


    if(mouseX > 600 && mouseX < 900 && mouseY > 0 && mouseY < 300){ 
        xPos = 750;
        yPos = 150; // row 1 square 3
    }

    if(mouseX > 0 && mouseX < 300 && mouseY > 300 && mouseY < 600){ 
        xPos = 150;
        yPos = 450; // row 2 square 1
    }

    if(mouseX > 300 && mouseX < 600 && mouseY > 300 && mouseY < 600){ 
        xPos = 450;
        yPos = 450; // row 2 square 2
    }

    if(mouseX > 600 && mouseX < 900 && mouseY > 300 && mouseY < 600){ 
        xPos = 750;
        yPos = 450; // row 2 square 3
    }

    if(mouseX > 0 && mouseX < 300 && mouseY > 600 && mouseY < 900){ 
        xPos = 150;
        yPos = 750; // row 3 square 1
    }

    if(mouseX > 300 && mouseX < 600 && mouseY > 600 && mouseY < 900){ 
        xPos = 450;
        yPos = 750; // row 2 square 2
    }

    if(mouseX > 600 && mouseX < 900 && mouseY > 600 && mouseY < 900){ 
        xPos = 750;
        yPos = 750; // row 2 square 3
    }
}