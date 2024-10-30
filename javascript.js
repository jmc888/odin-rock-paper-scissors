function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < 1 / 3) {
        return "rock";
    } else if (randNum < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors!");
    while (humanChoice) {
        switch (humanChoice.toLowerCase().trim()) {
            case "rock":
            case "paper":
            case "scissors":
                return humanChoice.toLowerCase().trim();
            default:
                humanChoice = prompt("Please enter Rock, Paper or Scissors");
        }
    }
    console.log("You did not play an object.")
}

function playGame() {
    let humanScore = computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
            return;
        } else if (
            (humanChoice == 'rock' && computerChoice == "scissors") ||
            (humanChoice == 'scissors' && computerChoice == "paper") ||
            (humanChoice == 'paper' && computerChoice == "rock")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i}: `);
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore == computerScore) {
        console.log(`Game ended. It's a tie! Your score is ${humanScore} and computer score is ${computerScore}`);
    } else {
        let winner = (humanScore > computerScore) ? "You" : "Computer";
        console.log(`Game ended. ${winner} win! Your score is ${humanScore} and computer score is ${computerScore}`)
    }

}

playGame();