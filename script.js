let playerMove;
let computerMove;
const playerEmoji = document.getElementById('playerEmoji');
const CPUEmoji = document.getElementById('CPUEmoji');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('result');
let playerScore = 1;
let cpuScore = 1;
let drawScore = 1;
const draw = document.getElementById('draw');
const displayPlayerScore = document.getElementById('pscore');
const displayCpuScore = document.getElementById('cscore');
let result2 = "";
let emojis = ["✊","🖐️", "✌️" ];

rock.addEventListener('click', () =>{
    playerMove = 'Rock';
    cMove();

    if (computerMove === 'Rock'){
        result2 = "DRAW!";
        playerEmoji.src = "rock.svg";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " + result2;
    }if(computerMove === 'Scissors'){
        result2 = "YOU WIN!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " + result2;
    }if (computerMove === 'Paper'){
        result2 = "YOU LOSE!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " + result2;
    }
    addScore();
    emojiShow();

});

paper.addEventListener('click', () =>{
    playerMove = 'Paper';
    cMove();

    if (computerMove === 'Rock'){
        result2 = "YOU WIN!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " +result2;
    }if(computerMove === 'Scissors'){
        result2 = "YOU LOSE!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " +result2;
    }if (computerMove === 'Paper'){
        result2 = "DRAW!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " +result2;
    }
    addScore();
    emojiShow();
    
});

scissors.addEventListener('click', () =>{
    playerMove = 'Scissors';
    cMove();

    if (computerMove === 'Rock'){
        result2 = "YOU LOSE!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " +result2;
    }if(computerMove === 'Scissors'){
        result2 = "DRAW!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " +result2;
    }if (computerMove === 'Paper'){
        result2 = "YOU WIN!";
        result.textContent = "You picked " + playerMove + ", Computer picked " + computerMove + ", " +result2;
    }
    addScore();
    emojiShow();
});



function cMove(){
    let randomNumber = Math.floor((Math.random() * 3)+ 1) ;

    if (randomNumber === 1){
        computerMove = 'Rock';
    }
     if(randomNumber === 2){
        computerMove = 'Paper';
    }
    if (randomNumber === 3){
        computerMove = 'Scissors';
    }
}

function addScore(){

    if(result2 === 'YOU WIN!'){
        displayPlayerScore.textContent = "Player Score: " + playerScore++;
    }if (result2 === 'YOU LOSE!'){
        displayCpuScore.textContent = "CPU Score: " + cpuScore++;
    }if (result2 === 'DRAW!'){
        draw.textContent = "DRAW: " + drawScore++;
    }
}

function emojiShow(){

    if (computerMove === 'Rock'){
        CPUEmoji.textContent = emojis[0];
    }
    if (computerMove === 'Paper'){
        CPUEmoji.textContent = emojis[1];
    }
    if (computerMove === 'Scissors'){
        CPUEmoji.textContent = emojis[2]
    }
}

    
