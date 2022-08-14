let options = ["ROCK", "PAPER", "SCISSORS"];
let counter = 0;
let aiCounter = 0;

// Returns a random option for computer choice
function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("You win this round");
            ++counter;
        }
    else if (playerSelection == "ROCK" && computerSelection == "ROCK" ||
        playerSelection == "PAPER" && computerSelection == "ROCK" ||
        playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
            console.log("This round is a draw")
    }
    else {
        console.log("AI wins this round");
        ++aiCounter;
    }
}

function game() {
    // 5 rounds per game
    for (let i = 0; i < 5; ++i) {
        // get initial choices
        console.log(`Game ${i+1}`);
        let playerChoice = prompt("Please pick 'Rock', 'Paper', or 'Scissors':");
        if (playerChoice == null) return;
        let upperCaseChoice = playerChoice.toUpperCase();
        const computerChoice = getComputerChoice();

        // prompt player for valid choice if initial choice is incorrect
        while (upperCaseChoice != options[0] && upperCaseChoice != options[1] && upperCaseChoice != options[2]) {
                alert(`'${playerChoice}' is not a valid option.`)
                playerChoice = prompt("Please pick 'Rock', 'Paper', or 'Scissors' (case-insensitive):");
                if (playerChoice == null) return;
                upperCaseChoice = playerChoice.toUpperCase();
        }

        // decide on the winner
        playRound(playerChoice.toUpperCase(), computerChoice);
    }

    decideWinner();
}

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
}