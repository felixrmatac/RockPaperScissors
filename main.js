let choices = ["rock", "paper", "scissors"];
let rounds = 5;
let score = [0, 0];
let playerSelection = '';
let computerSelection = '';

function playerSelectionPrompt() {
    //Set the value of the player's selection
    if (playerSelection = prompt('Lets Play Rock, Paper or Scissors. Choose your item.     The score is You: ' + score[0] + ' ' + 'Computer: ' + score[1])) {
        playerSelection = playerSelection.toLowerCase();

        //Compare is the input given are correct
        if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            if (confirm('Wrong Input.  You can only choose between: Rock, Paper or Scissors. Do you want to try again?')) {
                //If the user want's to play again the, selection prompt will appear again
                playerSelectionPrompt()
            } else {
                goodBye()
            }
        } else {
            playRound();
        }
    } else {
        goodBye()
    }
}

function playRound() {
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    if (score[0] == rounds - 1) {
        if (confirm('You won the game! do you want to play again?')) {
            resetGame();
        } else {
            goodBye()
        }

    } else if (score[1] == rounds - 1) {
        if (confirm('The Computer won the game! do you want to play again?')) {
            resetGame();
        } else {
            goodBye()
        }
    }
    else {
        if (playerSelection === computerSelection) {
            alert("You have tied");
            playerSelectionPrompt()
        } else if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "scissors" && computerSelection == "rock" ||
            playerSelection == "paper" && computerSelection == "scissors") {
            score[1] += 1
            alert('Computer Win!')
            playerSelectionPrompt()
        } else {
            score[0] += 1
            alert('You Win!')
            playerSelectionPrompt()
        }
    }



}


function goodBye() {
    alert('it was a pleasure to play with you!')
}

playerSelectionPrompt()

function resetGame() {
    score = [0, 0];
    playerSelectionPrompt()
}

console.log(playerSelection);
console.log(computerElection);