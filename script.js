const button = document.querySelectorAll('button');
const result_element = document.querySelector('#result');
const player_score = document.querySelector('#player-score');
const computer_score = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

button.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.name, getComputerChoice());
        console.log(result);
        result_element.textContent = result;
    }
    );
});

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
        playerScore++;
        player_score.textContent = playerScore;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        computer_score.textContent = computerScore;
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}

let game_winner = '';
function playGame() {
    if (playerScore >= 5) {
        winner.textContent = 'Player';
    } else if (computerScore >= 5) {
        winner.textContent = 'Computer';
    }
}
// step 3: Play five rounds:
/*
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
*/