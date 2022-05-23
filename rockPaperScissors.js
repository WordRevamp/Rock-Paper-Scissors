const choices = ["rock", "paper", "scissors"]; 

function game() {
    playRound();
}

function playRound() {
const playerSelection = playerChoice();
const computerSelcetion = computerChoice();
}

function playerChoice() {
    let input = prompt('Type Rock, Paper or Scissors'); 
    while (input == null) {
        input = prompt('Type Rock, Paper or Scissors');

    }
    input = input.toLowerCase(); 
    let check = validateInput(input)
    if (check == true) {
        console.log(input);
    }
    //console.log(input);
}

function computerChoice() {
    return choices[Math.floor(Math.random() * gameOptions.length)];

}

function validateInput(arr) {
    if (choices.includes(arr)) {
        return true; 
    } 
        return false;
    }

game();