let options = ["ROCK", "PAPER", "SCISSORS"];
let counter = 0;
let aiCounter = 0;

// Returns a random option for computer choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

// compares player and ai choice to decide on winner
function playRound(playerSelection, computerSelection) {
    const score = document.querySelector('#score');
    const rdWinner = document.querySelector('#round-winner');
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            rdWinner.textContent = "You won this round!"
            ++counter;
        }
    else if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
            rdWinner.textContent = "This round is a draw"
    }
    else {
        rdWinner.textContent = "AI won this round!"
        ++aiCounter;
    }

    score.textContent = `You: ${counter} || AI: ${aiCounter}`;
    if (counter == 5 || aiCounter == 5) decideWinner();
}

function playerChoice(playerSelection) {
    playRound(playerSelection, getComputerChoice());
}

// function game() {
//     // 5 rounds per game
//     while (counter < 5 && aiCounter < 5) {
//         // get initial choices
        
//         const computerChoice = getComputerChoice();

        
//         // decide on the winner
//         playRound(playerChoice.toUpperCase(), computerChoice);
//     }

//     decideWinner();
// }

function decideWinner() {
    if (counter > aiCounter) {
        console.log("Congratulations! You have won the game!");
    }
    else if (counter < aiCounter) {
        console.log("AI wins the game");
    }
    else if (counter == aiCounter) {
        console.log("This game resulted in a draw")
    }
    else {
        console.warn("Hmmmm...Something went wrong")
    }
    disableOptions();
    playAgain();
}

function disableOptions() {
    const btns = document.querySelectorAll('.choice');
    btns.forEach((btn)=> {
        btn.disabled = true;
    });
}

function enableOptions() {
    const btns = document.querySelectorAll('.choice');
    btns.forEach((btn)=> {
        btn.disabled = false;
    });
}

function playAgain() {
    const btn = document.createElement('button');
    const restart = document.querySelector('#play-again');
    btn.className = "reset";
    btn.textContent = "Play Again";
    console.log(restart);
    restart.appendChild(btn);

    btn.addEventListener("click", () => {
        counter = 0;
        aiCounter = 0;
        restart.removeChild(btn);
        enableOptions();

        const score = document.querySelector('#score');
        const rdWinner = document.querySelector('#round-winner');
        score.textContent = "";
        rdWinner.textContent = "";
    });
}

