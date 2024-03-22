//this prompts the player to choice rock, paper, or scissors//
let choices = ("rock", "paper", "scissors");


//this prompts the player to choice rock, paper, or scissors//
function getPlayerSelection() {
    let playerSelected = prompt(`Do you choose rock, paper, or scissors?`).toLocaleLowerCase();
    if(playerSelected === "rock"){
        return playerSelected;
    } else if(playerSelected === "paper") {
        return playerSelected;
    } else if(playerSelected === "scissors") {
        return playerSelected;
    } else {
        return "invalid!";
    }
}


//This gets the computer to choice rock, paper, or scissors.//
function getComputerSelection() {
    let computerSelected = Math.floor(Math.random(choices) * 3);
    if(computerSelected === 0){
        return "rock";
    } else if(computerSelected === 1) {
        return "paper";
    } else if(computerSelected === 2) {
        return "scissors";
    } else {
        return "invalid!";
    }
}

//This alerts to browser each choice.//
alert("Computer chose: " + getComputerSelection() + "\nYou chose: " + getPlayerSelection());



