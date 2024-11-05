let humanScore = 0;
let computerScore = 0;
let roundIter = 0;
const playground = document.getElementById("playground");
const results = document.getElementById("results");

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

function playRound(humanChoice, computerChoice) {
    const roundResults = document.createElement('p');

    if (humanChoice == computerChoice) {
        roundResults.textContent = `You played ${humanChoice}. It's a tie!`
    } else if (
        (humanChoice == 'rock' && computerChoice == "scissors") ||
        (humanChoice == 'scissors' && computerChoice == "paper") ||
        (humanChoice == 'paper' && computerChoice == "rock")
    ) {
        roundResults.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    results.appendChild(roundResults);
}

playground.addEventListener("click", (event) => {
    if (roundIter == 0) {
        results.textContent = "";
    }

    results.innerHTML += `<p>Round ${roundIter++}:</p>`;
    const humanChoice = event.target.id;

    playRound(humanChoice, getComputerChoice());
    if (roundIter == 5){
        const gameResults = document.createElement('p');

        if (humanScore == computerScore) {
            gameResults.textContent = `Game ended. It's a tie! Your score is ${humanScore} and computer score is ${computerScore}`;
        } else {
            let winner = (humanScore > computerScore) ? "You" : "Computer";
            gameResults.textContent = `Game ended. ${winner} win! Your score is ${humanScore} and computer score is ${computerScore}`;
        }

        results.appendChild(gameResults);
        roundIter = 0;
    }
})


