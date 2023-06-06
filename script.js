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
        return `Tie Round! You both chose ${playerSelection}.`;
    } 
    
    if (winningConditions[playerSelection] === computerSelection) { 
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    }  
    
    return `You Lose! ${computerSelection} beats ${playerSelection}.`
    
}

// console.log(playRound("rock", getComputerChoice()));