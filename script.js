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

    playerWonRound = false;
    computerWonRound = false;
    const resultsDiv = document.getElementById('results');

    playerSelectionLowerCase = playerSelection.toLowerCase();
    computerSelectionLowerCase = computerSelection.toLowerCase();

    if(playerSelectionLowerCase === computerSelectionLowerCase) {
        resultsDiv.textContent = (`Tie Round! You both chose ${playerSelection}.`);
        return;
    } else if (winningConditions[playerSelectionLowerCase] === computerSelectionLowerCase) { 
        resultsDiv.textContent = (`You Win! ${playerSelection} beats ${computerSelection}.`);
        playerWonRound = true;
        return;
    }  else {
        resultsDiv.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}.`);
        computerWonRound = true;
        return;
    }

    // resultsDiv.textContent = (`You Lose! ${computerSelection} beats ${playerSelection}.`);
}

function displayResultText() {
    const resultText = document.getElementById('result');
    
    if (playerWonRound) {
        resultText.textContent = 'You win! Rock beats Scissors.';
    } else if (computerWonRound) {
        resultText.textContent = 'You lose! Paper beats Rock.';
    } else {
        resultText.textContent = 'It\'s a tie!';
    }
}


function game() {
    humanWinCount = 0;
    computerWinCount = 0;

    roundText = document.getElementById('round');
    let round = 1; // Initialize the round count

    const buttons = document.querySelectorAll('button');

    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        // Update the video source based on the clicked option
        const humanAnimation = document.getElementById('human-animation');
        const computerAnimation = document.getElementById('computer-animation');
        
        if (button.textContent === 'Rock') {
            humanAnimation.src = 'assets/rock.gif';
        } else if (button.textContent === 'Paper') {
            humanAnimation.src = 'assets/paper.gif';
        } else if (button.textContent === 'Scissors') {
            humanAnimation.src = 'assets/scissors.gif';
        }
        
        // Determine the computer's choice and set its GIF accordingly
        const computerChoice = getComputerChoice();
        if (computerChoice === 'Rock') {
            computerAnimation.src = 'assets/rock_flipped.gif';
        } else if (computerChoice === 'Paper') {
            computerAnimation.src = 'assets/paper_flipped.gif';
        } else if (computerChoice === 'Scissors') {
            computerAnimation.src = 'assets/scissors_flipped.gif';
        }
        

        // Play the animations
        humanAnimation.style.display = 'block';
        computerAnimation.style.display = 'block';

            if (round <= 5) {
                roundText.textContent = `Round ${round}\n`; // Update the round display
                playRound(button.textContent, computerChoice);
                
                // Increment round
                round++;
                
                if(playerWonRound === true) {
                    humanWinCount++;
                    playerWonRound = false;
                } else if(computerWonRound === true){
                    computerWinCount++;
                    computerWonRound = false;
                }

                if (round > 5) {
                    buttons.forEach( (button) => {
                        button.disabled = true;
                    });

                    // Update the winner display
                    const winner = document.getElementById('winner');
                    if (humanWinCount === computerWinCount) {
                        winner.textContent = `Tie Game. Player and Computer both won ${humanWinCount} rounds.`;
                    } else if (humanWinCount > computerWinCount) {
                        winner.textContent = `You won the game! You won ${humanWinCount} rounds, beating Computer's score of ${computerWinCount}.`;
                    } else {
                        winner.textContent = `You lost the game :( Computer won ${computerWinCount} rounds, beating your score of ${humanWinCount}.`;
                    }
                }

            }
        });
    });
}


game();