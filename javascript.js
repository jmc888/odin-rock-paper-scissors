let humanScore = 0;
let computerScore = 0;
let roundIter = 0;
const defaultBtnColor = "#C4DFE6";
const selectedBtnColor = "#66A5AD";
const humanPlay = document.getElementById("human-play");
const computerPlay = document.getElementById("computer-play");
const humanScoreDisplay = document.getElementById("human-score")
const computerScoreDisplay = document.getElementById("computer-score")
const results = document.getElementById("results");

function getComputerChoice() {
    let randNum = Math.random();
    if (randNum < 1 / 3) {
        computerPlay.innerHTML = "<h2>&#9994</h2>";
        return "rock";
    } else if (randNum < 2 / 3) {
        computerPlay.innerHTML = "<h2>&#128400</h2>";
        return "paper";
    } else {
        computerPlay.innerHTML = "<h2>&#9996</h2>";
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
        humanScoreDisplay.textContent = humanScore;
    } else {
        roundResults.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    results.appendChild(roundResults);
}

function resetGame() {
    results.textContent = "";
    humanScore = 0;
    computerScore = 0
    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    resetPlayBtnColor();
}

function resetPlayBtnColor() {
    document.querySelectorAll(".play-button").forEach((elm) => {
        elm.style.backgroundColor = defaultBtnColor;
    })
}

humanPlay.addEventListener("click", (event) => {

    if (roundIter == 0) {
        resetGame();
    }

    resetPlayBtnColor();

    results.innerHTML += `<p>Round ${++roundIter}:</p>`;
    const humanChoice = event.target.id;
    event.target.style.backgroundColor = selectedBtnColor;

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

        const resetBtn = document.createElement('button');
        resetBtn.textContent = "Reset";
        results.appendChild(resetBtn);
        resetBtn.addEventListener('click', resetGame);

        roundIter = 0;
    }
})


