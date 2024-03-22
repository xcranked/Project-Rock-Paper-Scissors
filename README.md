# Project-Rock-Paper-Scissors
This is my very first JavaScript program built completely from scratch, based on the Foundations Course from https://www.theodinproject.com

UPDATE 03/21/2024 at 10:47am GMT+3
--------------------------------------
Created function ComputerSelection().

This function allows the script to randomly pick one of three options (rock, paper, or scissors).
I used math.floor to random select an integer of the three options 0 = rock, 1 = paper, 2 = scissors.

For coding purposes I have included a alert function in the code so I can see what choices the rock is selecting and that it is actually selecting one of the three actual possibilities. This will be replaced with "return" as I move forward.


UPDATE 03/21/2024 at 5:16pm GMT+3
--------------------------------------
Renamed function computerSelection to getComputerSelection.

getComputerSelection now uses else if statements to determine if the computer has returned rock, paper, or scissors, else return "Invalid!".

Created function getPlayerSelection that uses a variable prompt to ask the player their choice. It also include .toLocaleLowerCase ensuring that any choice typed in is lowercase.

getPlayerSelection uses else if statements to determine if the typed in answer matches one of the choices, else return "Invalid!".

UPDATE 03/22/2024 at 4:08pm GMT+3
--------------------------------------
CREATED game.html and style.css

game.html is a basic webpage styled in CSS to hold the user interface for playing ROCK-PAPER-SCISSORS.

It took me a while to figure out exactly how I wanted to layout the game, and it might eventually change again. For now, the user interface will be in this layout until the game is complete.