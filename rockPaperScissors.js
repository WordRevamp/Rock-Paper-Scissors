const choices = ["rock", "paper", "scissors"]; 
       

    function playRound(playerSelection,computerSelection) { 
        

        if (computerSelection == "rock") {
            if (playerSelection == "paper") {
                return "You Win:"
            } if (playerSelection == "scissors"){
                return "You Lose:"
            } else {
                return "It's a Tie:"
            }
        }
        if (computerSelection == "paper") {
            if (playerSelection == "scissors") {
                return "You Win:"
            } if (playerSelection == "rock") {
                return "You Lose:"
            } else {
                return "It's a Tie:"
            }

        }
        if (computerSelection == "scissors") {
            if (playerSelection == "rock") {
                return "You Win:"
            } if (playerSelection == "paper"){
                return "You Lose:"
            } else {
                return "Its a Tie:"
            }
        }
 
    }
    
    function verifyInput(input) {
        if (input == null) {
            window.prompt("Select between Rock, Paper, or Scissors!")
        }
    }

    function computerPlay() { 
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playerPlay() {
        let input = window.prompt("Select between Rock, Paper, or Scissors!")
        if (input == null) {
            verifyInput();
        }
        return input.toLowerCase(); 

    }

    function game() {
        let playerCount = 0;
        let computerCount = 0;
        let tieCount = 0;

        for (let i = 0; i < 5; i++) {
            let playerSelection = playerPlay(); 
            let computerSelection = computerPlay();
            let results = playRound(playerSelection,computerSelection);
            console.log(results); 
            if (results.includes("Win")) {
                playerCount++;
            } else if (results.includes("Lose")) {
                computerCount++;
            } else {
                tieCount++;
            }
        } 
        if (playerCount > computerCount) {
            console.log("You Defeated the Computer: " + playerCount + " to " + computerCount + ".")
        } else if (playerCount < computerCount) {
            console.log("The Computer Defeated You: " + computerCount + " to " + playerCount + ".")
        } else {
            console.log("This Game Ends in a Tie!")
        }

    }