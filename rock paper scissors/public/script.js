let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

let roundWin = document.querySelector('#roundWin');
let matchWin = document.querySelector('#matchWin');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');

let playerSelection = '';
let computerSelection = '';

let playerPoints = 0;
let computerPoints = 0;

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    checkIfGameEnd();
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    checkIfGameEnd();
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    checkIfGameEnd();
});

function getComputerChoice() {

    rand = Math.floor(Math.random() * 3);
    let choice;

    switch (rand) {
        case (0):
            choice  = 'rock';
            break;
        case(1):
            choice = 'paper';         // Generates a random number between 0 and 2 and assigns a hand sign to the number
            break;
        case (2):
            choice = 'scissors';
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundWin.textContent = 'A tie. No one gets points.';
        playerScore.textContent = `Your points: ${playerPoints}`;
        computerScore.textContent = `Opponents points: ${computerPoints}`;
    } else {
        switch (playerSelection) {

            case ('rock'):
                if (computerSelection === 'paper') {
                    computerPoints += 1;
                    roundWin.textContent = `Opponent played ${computerSelection}. He gets a point.`;
                    playerScore.textContent = `Your points: ${playerPoints}`;
                    computerScore.textContent = `Opponents points: ${computerPoints}`;
                } else {
                    playerPoints += 1;
                    roundWin.textContent = `Opponent played ${computerSelection}. You get a point.`;
                    playerScore.textContent = `Your points: ${playerPoints}`;
                    computerScore.textContent = `Opponents points: ${computerPoints}`;
                }
                break;

            case ('paper'):
                if (computerSelection === 'scissors') {
                    computerPoints += 1;
                    roundWin.textContent = `Opponent played ${computerSelection}. He gets a point.`;
                    playerScore.textContent = `Your points: ${playerPoints}`;
                    computerScore.textContent = `Opponents points: ${computerPoints}`;
                } else {
                    playerPoints += 1;
                    roundWin.textContent = `Opponent played ${computerSelection}. You get a point.`;
                    playerScore.textContent = `Your points: ${playerPoints}`;
                    computerScore.textContent = `Opponents points: ${computerPoints}`;
                }
                break;

            case ('scissors'):
                if (computerSelection === 'rock') {
                    computerPoints += 1;
                    roundWin.textContent = `Opponent played ${computerSelection}. He gets a point.`;
                    playerScore.textContent = `Your points: ${playerPoints}`;
                    computerScore.textContent = `Opponents points: ${computerPoints}`;
                } else {
                    playerPoints += 1;
                    roundWin.textContent = `Opponent played ${computerSelection}. You get a point.`;
                    playerScore.textContent = `Your points: ${playerPoints}`;
                    computerScore.textContent = `Opponents points: ${computerPoints}`;
                }
                break;
        }
    }
}

function checkIfGameEnd() {
    if (playerPoints === 5) {
        matchWin.textContent = 'You won the match.';
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints === 5) {
        matchWin.textContent = 'You lost the match.';
        playerPoints = 0;
        computerPoints = 0;
    } else {
        matchWin.textContent = '';
    }
}