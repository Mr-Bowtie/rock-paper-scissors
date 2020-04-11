const player = document.querySelector('.playerTally');
const comp = document.querySelector('.computerTally');
const banner = document.querySelector(".banner");
const playerDisplay = document.querySelector("#playerChoice");
const compDisplay = document.querySelector("#computerChoice");
const tie = document.querySelector("#tie");
let playerScore = 0;
let computerScore = 0; 

function random(number) {
    return Math.floor(Math.random()*number);
}

function computerPlay() {
    options = ['rock', 'paper', 'scissors'];
    return options[random(3)];
}

function displayRound(player, computer, isTie=false) {
    playerDisplay.textContent = `${player}`;
compDisplay.textContent = `${computer}`;
(isTie) ? tie.textContent = "Tie!" : tie.textContent = "" ;
}

function clicker(e) {
    const btn = document.querySelector(`.btn[id="${e.target.id}"]`);
    if (!btn) return;
    let answer = btn.id.toString();
    playRound(answer, computerPlay());
}

function scorekeeper() {
    player.textContent = `${playerScore}`;
    comp.textContent = `${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                
                computerScore += 1;
                scorekeeper();
                displayRound(playerSelection, computerSelection,);
            }
            else if ( computerSelection === 'scissors') {
                playerScore += 1;
                scorekeeper();
                displayRound(playerSelection, computerSelection);
            }
            else {
                displayRound(playerSelection, computerSelection, true);
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                playerScore += 1;
                scorekeeper();
                displayRound(playerSelection, computerSelection);
            }
            else if (computerSelection === 'scissors') {
                computerScore += 1;
                scorekeeper();
                displayRound(playerSelection, computerSelection);
            }
            else {
                displayRound(playerSelection, computerSelection, true);
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                playerScore += 1;
                scorekeeper();
                displayRound(playerSelection, computerSelection);
            }
            else if ( computerSelection === 'rock') {
                computerScore += 1;
                scorekeeper();
                displayRound(playerSelection, computerSelection);
            }
            else {
                displayRound(playerSelection, computerSelection, true);
            }
            break;
        default: {
            return "Error, only enter rock, paper, or scissors please."
        }
            break;
    }
}



document.addEventListener('click', clicker);



