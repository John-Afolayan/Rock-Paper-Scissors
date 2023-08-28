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

    const resultsDiv = document.getElementById('results');

    playerSelectionLowerCase = playerSelection.toLowerCase();
    computerSelectionLowerCase = computerSelection.toLowerCase();

    if(playerSelectionLowerCase === computerSelectionLowerCase) {
        resultsDiv.textContent = (`Tie Round! You both chose ${playerSelection}.`);
        return;
    } else if (winningConditions[playerSelectionLowerCase] === computerSelectionLowerCase) { 
        resultsDiv.textContent = (`You Win! ${playerSelection} beats ${computerSelection}.`);
        return;
    }  else {
        resultsDiv.textContent = (`You Lose! beats ${computerSelection} beats ${playerSelection}.`);
    }

    playerWonRound = false;
    computerWonRound = false;
    resultsDiv.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}.`);
}

function game() {
    humanWinCount = 0;
    computerWinCount = 0;

    roundText = document.getElementById('round');
    let round = 1; // Initialize the round count

    const buttonContainer = document.querySelector('#buttons');

    const rockBtn = document.createElement('button');
    rockBtn.textContent = 'Rock';
    buttonContainer.appendChild(rockBtn);
    
    const paperBtn = document.createElement('button');
    paperBtn.textContent = 'Paper';
    buttonContainer.appendChild(paperBtn);

    const scissorsBtn = document.createElement('button');
    scissorsBtn.textContent = 'Scissors';
    buttonContainer.appendChild(scissorsBtn);

    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            roundText.textContent = `Round ${round}\n`; // Update the round display
            playRound(button.textContent, getComputerChoice());
            
            // Increment round
            round++;
            
            if(playerWonRound === true) {
                humanWinCount++;
                playerWonRound = false;
            } else if(computerWonRound === true){
                computerWinCount++;
                computerWonRound = false;
            }

            // Update the winner display
            if (round > 5) {
                const winner = document.getElementById('winner');
                if (humanWinCount === computerWinCount) {
                    winner.textContent = `Tie Game. Player and Computer both won ${humanWinCount} rounds.`;
                } else if (humanWinCount > computerWinCount) {
                    winner.textContent = `You won the game! You won ${humanWinCount} rounds, beating Computer's score of ${computerWinCount}.`;
                } else {
                    winner.textContent = `You lost the game :( Computer won ${computerWinCount} rounds, beating your score of ${humanWinCount}.`;
                }
            }
        });
    });
}


game();