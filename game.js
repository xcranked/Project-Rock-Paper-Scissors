//this defines what choices there are.//
const choices = ("rock", "paper", "scissors");

//This gets the computer to choice rock, paper, or scissors.//
function computerSelection() {
    const selection = Math.floor(Math.random(choices) * 3);
    alert("Computer chose: " + selection);
}computerSelection();
