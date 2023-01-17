/**
Tic Tac Toe
Abigail Lopez 40203553

I'm bad at tic tac toe. This is a tic tac toe game! Kachow.

I couldn't figure out how to get it to reset. I'm sure there's an easier way
to do this without the magic square, and I'm sure I could figure out how to 
make it reset and keep score if I had a counter variable or something,
but without looking up the answer I don't know how to do it :/

Glad the base game works tho! Wahoo :D

*/

"use strict";

let playerOne = true; // var to determine which player's turn it is

let xPos; // coordinates for where precisely the x/y are going
let yPos;

let playerOneWins = false; // variables to determine what the outcome of the match is
let playerTwoWins = false; // when they turn true, it will display the message of who wins
let drawMatch = false;

let playerOneTallyr1 = 0;
let playerOneTallyr2 = 0;
let playerOneTallyr3 = 0;
let playerOneTallyc1 = 0;
let playerOneTallyc2 = 0;
let playerOneTallyc3 = 0;
let playerOneTallyd1 = 0;
let playerOneTallyd2 = 0;

let playerTwoTallyr1 = 0;
let playerTwoTallyr2 = 0;
let playerTwoTallyr3 = 0;
let playerTwoTallyc1 = 0;
let playerTwoTallyc2 = 0;
let playerTwoTallyc3 = 0;
let playerTwoTallyd1 = 0;
let playerTwoTallyd2 = 0;

let fullBoard = 0;

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
    background(10, 90, 115); // dark teal

    noStroke(); // forgot how to do checkerboards w loops so we're doing it one by one
    fill(15, 115, 145); // light teal
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

function mousePressed(){ // when each player clicks:
    print("mouseX = " + mouseX);
    print("mouseY = " + mouseY);
    wherePutShape(); // determines where to put the shape + makes a note of it to track score
    printShape(); // prints X or O
    playerOne = !playerOne; // changes the turn
    print("player 1's turn? " + playerOne); // confirms whose turn it is
    
    checkWin(); // check to see if someone wins
    
    if(playerOneWins || playerTwoWins || drawMatch){
        displayWin(); // if someone wins/they draw, display the win/draw message
    }
}

function displayWin(){ //display the win
    stroke(10, 90, 115); // dark teal border
    strokeWeight(20); // border
    fill(250, 240, 220); // off white fill
    rect(150, 335, 600, 225, 50); // rectangle background

    if(playerOneWins){
        noStroke();
        textSize(150);
        fill(250, 170, 5); // dark teal
        text('X WINS', 185, 500) // X WINS display message
    }

    if(playerTwoWins){
        noStroke();
        textSize(150);
        fill(190, 235, 30); // dark teal
        text('O WINS', 185, 500) // O WINS display message
    }

    if(drawMatch){
        noStroke();
        textSize(150);
        fill(10, 90, 115); // dark teal
        text('DRAW', 225, 500) // Draw
    }
}

 function printShape(){
    if(playerOne == true){ // print orange X
        noStroke();
        fill(250, 170, 5); // orange
        textSize(300);
        text('X', xPos - 100, yPos + 100);
    }

    if(playerOne == false){ // print green O
        strokeWeight(25);
        stroke(190, 235, 30); // green
        noFill();
        circle(xPos, yPos, 200);
    }
}

function wherePutShape(){ // determines coordinates for where to print the shape
    if(mouseX > 0 && mouseX < 300 && mouseY > 0 && mouseY < 300){ 
        xPos = 150;
        yPos = 150; // if in row 1 square 1... magic square number: 2

        if(playerOne){ // the magic square is added to player one's tally if it's their turn
            playerOneTallyr1 = playerOneTallyr1 + 2;
            playerOneTallyc1 = playerOneTallyc1 + 2;
            playerOneTallyd1 = playerOneTallyd1 + 2;
        }
        else{ // and player two if not
            playerTwoTallyr1 = playerTwoTallyr1 + 2;
            playerTwoTallyc1 = playerTwoTallyc1 + 2;
            playerTwoTallyd1 = playerTwoTallyd1 + 2;
        }

        fullBoard = fullBoard + 2; // keeping score of if the board is fill w/o a win to declare a draw
    }

    if(mouseX > 300 && mouseX < 600 && mouseY > 0 && mouseY < 300){ 
        xPos = 450;
        yPos = 150; // row 1 square 2... MSN: 7


        if(playerOne){
            playerOneTallyr1 = playerOneTallyr1 + 7;
            playerOneTallyc2 = playerOneTallyc2 + 7;
        }
        else{
            playerTwoTallyr1 = playerTwoTallyr1 + 7;
            playerTwoTallyc2 = playerTwoTallyc2 + 7;
        }

        fullBoard = fullBoard + 7;
    }


    if(mouseX > 600 && mouseX < 900 && mouseY > 0 && mouseY < 300){ 
        xPos = 750;
        yPos = 150; // row 1 square 3... MSN: 6


        if(playerOne){
            playerOneTallyr1 = playerOneTallyr1 + 6;
            playerOneTallyc3 = playerOneTallyc3 + 6;
            playerOneTallyd2 = playerOneTallyd2 + 6;
        }
        else{
            playerTwoTallyr1 = playerTwoTallyr1 + 6;
            playerTwoTallyc3 = playerTwoTallyc3 + 6;
            playerTwoTallyd2 = playerTwoTallyd2 + 6;
        }

        fullBoard = fullBoard + 6;
    }

    if(mouseX > 0 && mouseX < 300 && mouseY > 300 && mouseY < 600){ 
        xPos = 150;
        yPos = 450; // row 2 square 1... MSN: 9

        if(playerOne){
            playerOneTallyr2 = playerOneTallyr2 + 9;
            playerOneTallyc1 = playerOneTallyc1 + 9;
        }
        else{
            playerTwoTallyr2 = playerTwoTallyr2 + 9;
            playerTwoTallyc1 = playerTwoTallyc1 + 9;
        }

        fullBoard = fullBoard + 9;
    }

    if(mouseX > 300 && mouseX < 600 && mouseY > 300 && mouseY < 600){ 
        xPos = 450;
        yPos = 450; // row 2 square 2... MSN: 5


        if(playerOne){
            playerOneTallyr2 = playerOneTallyr2 + 5;
            playerOneTallyc2 = playerOneTallyc2 + 5;
            playerOneTallyd1 = playerOneTallyd1 + 5;
            playerOneTallyd2 = playerOneTallyd2 + 5;
        }
        else{
            playerTwoTallyr2 = playerTwoTallyr2 + 5;
            playerTwoTallyc2 = playerTwoTallyc2 + 5;
            playerTwoTallyd1 = playerTwoTallyd1 + 5;
            playerTwoTallyd2 = playerTwoTallyd2 + 5;
        }

        fullBoard = fullBoard + 5;
    }

    if(mouseX > 600 && mouseX < 900 && mouseY > 300 && mouseY < 600){ 
        xPos = 750;
        yPos = 450; // row 2 square 3... MSN: 1

        if(playerOne){
            playerOneTallyr2 = playerOneTallyr2 + 1;
            playerOneTallyc3 = playerOneTallyc3 + 1;
        }
        else{
            playerTwoTallyr2 = playerTwoTallyr2 + 1;
            playerTwoTallyc3 = playerTwoTallyc3 + 1;
        }

        fullBoard = fullBoard + 1;
    }

    if(mouseX > 0 && mouseX < 300 && mouseY > 600 && mouseY < 900){ 
        xPos = 150;
        yPos = 750; // row 3 square 1... MSN: 4

        if(playerOne){
            playerOneTallyr3 = playerOneTallyr3 + 4;
            playerOneTallyc1 = playerOneTallyc1 + 4;
            playerOneTallyd2 = playerOneTallyd2 + 4;
        }
        else{
            playerTwoTallyr3 = playerTwoTallyr3 + 4;
            playerTwoTallyc1 = playerTwoTallyc1 + 4;
            playerTwoTallyd2 = playerTwoTallyd2 + 4;
        }

        fullBoard = fullBoard + 4;
    }

    if(mouseX > 300 && mouseX < 600 && mouseY > 600 && mouseY < 900){ 
        xPos = 450;
        yPos = 750; // row 2 square 2... MSN: 3

        if(playerOne){
            playerOneTallyr3 = playerOneTallyr3 + 3;
            playerOneTallyc2 = playerOneTallyc2 + 3;
        }
        else{
            playerTwoTallyr3 = playerTwoTallyr3 + 3;
            playerTwoTallyc2 = playerTwoTallyc2 + 3;
        }

        fullBoard = fullBoard + 3;
    }

    if(mouseX > 600 && mouseX < 900 && mouseY > 600 && mouseY < 900){ 
        xPos = 750;
        yPos = 750; // row 2 square 3... MSN: 8

        if(playerOne){
            playerOneTallyr3 = playerOneTallyr3 + 8;
            playerOneTallyc3 = playerOneTallyc3 + 8;
            playerOneTallyd1 = playerOneTallyd1 + 8;
        }
        else{
            playerTwoTallyr3 = playerTwoTallyr3 + 8;
            playerTwoTallyc3 = playerTwoTallyc3 + 8;
            playerTwoTallyd1 = playerTwoTallyd1 + 8;
        }
        
        fullBoard = fullBoard + 8;
    }
}

function checkWin(){ // who wins?
    if(playerOneTallyr1 == 15){ // if any of the tallies = 15, we know its a win
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyr2 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyr3 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyc1 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyc2 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyc3 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyd1 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerOneTallyd2 == 15){
        print("PLAYER 1 WIN");
        playerOneWins = true;
    }
    else if(playerTwoTallyr1 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyr2 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyr3 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyc1 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyc2 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyc3 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyd1 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }
    else if(playerTwoTallyd2 == 15){
        print("PLAYER 2 WIN");
        playerTwoWins = true;
    }

    if(fullBoard == 45){ // if board is full and reaches 45, a draw has been reached
        print("DRAW");
        drawMatch = true;
    }
}