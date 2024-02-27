# Assignment

## Problem Statement:
Make an implementation of grade-school classic “rock paper scissors"

### Steps:
1. Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play<br>

   Tip: use the console to make sure this is returning the expected output before moving to the next step!

2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"<br>

    Note: Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation)

3. Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
