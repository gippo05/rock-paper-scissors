let playerMove;
let computerMove;
const playerEmoji = document.getElementById('playerEmoji');
const CPUEmoji = document.getElementById('CPUEmoji');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
let playerScore = 0;
let cpuScore = 0;
let drawScore = 0;
const draw = document.getElementById('draw');
const displayPlayerScore = document.getElementById('pscore');
const displayCpuScore = document.getElementById('cscore');
let result2 = "";

const rockImage = "assets/rock.jpg";
const paperImage = "assets/paper.jpg";
const scissorsImage = "assets/scissors.jpg";

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

function cMove() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    computerMove = moves[Math.floor(Math.random() * 3)];
}

function updateResult(playerMove, computerMove, resultText, imageSrc) {
    result.textContent = `You picked ${playerMove}, Computer picked ${computerMove}, ${resultText}`;
    image2.setAttribute("src", imageSrc);
}

function addScore(resultText) {
    if (resultText === 'YOU WIN!') {
        displayPlayerScore.textContent = "Player Score: " + ++playerScore;
    } else if (resultText === 'YOU LOSE!') {
        displayCpuScore.textContent = "CPU Score: " + ++cpuScore;
    } else if (resultText === 'DRAW!') {
        draw.textContent = "DRAW: " + ++drawScore;
    }
}

rock.addEventListener('click', () => {
    playerMove = 'Rock';
    cMove();
    image1.setAttribute("src", rockImage);

    if (computerMove === 'Rock') {
        result2 = "DRAW!";
        updateResult(playerMove, computerMove, result2, rockImage);
    } else if (computerMove === 'Scissors') {
        result2 = "YOU WIN!";
        updateResult(playerMove, computerMove, result2, scissorsImage);
    } else {
        result2 = "YOU LOSE!";
        updateResult(playerMove, computerMove, result2, paperImage);
    }
    addScore(result2);
});

paper.addEventListener('click', () => {
    playerMove = 'Paper';
    cMove();
    image1.setAttribute("src", paperImage);

    if (computerMove === 'Rock') {
        result2 = "YOU WIN!";
        updateResult(playerMove, computerMove, result2, rockImage);
    } else if (computerMove === 'Scissors') {
        result2 = "YOU LOSE!";
        updateResult(playerMove, computerMove, result2, scissorsImage);
    } else {
        result2 = "DRAW!";
        updateResult(playerMove, computerMove, result2, paperImage);
    }
    addScore(result2);
});

scissors.addEventListener('click', () => {
    playerMove = 'Scissors';
    cMove();
    image1.setAttribute("src", scissorsImage);

    if (computerMove === 'Rock') {
        result2 = "YOU LOSE!";
        updateResult(playerMove, computerMove, result2, rockImage);
    } else if (computerMove === 'Scissors') {
        result2 = "DRAW!";
        updateResult(playerMove, computerMove, result2, scissorsImage);
    } else {
        result2 = "YOU WIN!";
        updateResult(playerMove, computerMove, result2, paperImage);
    }
    addScore(result2);
});


