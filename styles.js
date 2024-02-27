// Step 1: 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}


// Step 2:
// Player selection to be case-insensitive
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const outcomes = ['rock', 'paper', 'scissors'];
    if (!playerSelection in outcomes) {
        return "Invalid selection. Please choose rock, paper or scissors!";
    } else if (playerSelection == computerSelection.toLowerCase()) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

// step 3:
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const totalRounds = 5;

    for (var i = 1; i <= totalRounds; i++) {
        var playerSelection = prompt("Enter your choice (rock, paper, scissors)");
        var computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result.includes("Won")) {
            playerScore++;

        } else if (result.includes("Lost")) {
            computerScore++;

        }

    }
    return `Player Score in ${i - 1} rounds: ${playerScore} 
            \nComputer Score in ${i - 1} rounds: ${computerScore} 
            \nTied Score in ${i - 1} rounds: ${(i - 1) - (playerScore + computerScore)}`;
}

console.log(playGame());