function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Tie!"
    }

    if ((player === 'rock') && (computer === 'scissors')) {
        return 'You win. Rock beats scissors'
    }

    if ((player === 'scissors') && (computer === 'paper')) {
        return 'You win. Scissors beats paper'
    }

    if ((player === 'rock') && (computer === 'paper')) {
        return 'You lose. Paper beats rock'
    }

    if ((player === 'paper') && (computer === 'scissors')) {
        return 'You lose. Scissors beats paper'
    }

    if ((player === 'paper') && (computer === 'rock')) {
        return 'You win. Paper beats rock'
    }

    if ((player === 'scissors') && (computer === 'rock')) {
        return 'You lose. Scissors beats rock'
    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}


console.log(playGame(5));