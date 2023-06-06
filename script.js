playerWonRound = false;
computerWonRound = false;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)]; //Math.floor is needed since Math.random will return a decimal number that cannot be indexed by an array
}

function playRound(playerSelection, computerSelection) {
    const winningConditions = {
        rock: "scissors", 
        paper: "rock",
        scissors: "paper"
    };

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        console.log(`Tie Round! You both chose ${playerSelection}.`);
        return;
    } 
    
    if (winningConditions[playerSelection] === computerSelection) { 
        playerWonRound = true;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        return;
    }  
    
    computerWonRound = true;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
}

function game() {
    humanWinCount = 0;
    computerWinCount = 0;

    for(let i=1; i <= 5; i++) {
        console.log(`Round ${i}:\n`);
        var userChoice = prompt("Enter Rock, Paper, or Scissors.");
        playRound(userChoice, getComputerChoice());
        
        if(playerWonRound === true) { //Checks if human player won most recent round
            humanWinCount++;
            playerWonRound = false;
        } else if(computerWonRound === true){ //Checks if computer won most recent round
            computerWinCount++;
            computerWonRound = false;
        }
    }

    if (humanWinCount === computerWinCount) {
        console.log(`Tie Game. Player and Computer both won ${humanWinCount} rounds.`);
    } else if (humanWinCount > computerWinCount) {
        console.log(`You won the game! You won ${humanWinCount} rounds, beating Computer's score of ${computerWinCount}.`);
    } else {
        console.log(`You lost the game :( Computer won ${computerWinCount} rounds, beating your score of ${humanWinCount}.`);
    }
}

game();
// console.log(playRound("rock", getComputerChoice()));