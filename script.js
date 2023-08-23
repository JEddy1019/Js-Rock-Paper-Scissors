const results = document.querySelector('.results');
const runningScore = document.querySelector('.running-score');
const div = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const cpuScore = document.querySelector('#cpu-score');
const winner = document.querySelector('.winner');
let playerCount = 0;
let cpuCount = 0;
let winStatementCheck = 1; // if one win statement is already displayed, the other won't be
let scoreCount = round();

function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
  }
  
function getComputerChoice(){  
    let num = random(3);
    let choice;
    switch (num){
        case num = 2:
            return choice = 'rock';
            break;
        case num = 1:
            return choice = 'paper';
            break;
        case num = 0:
            return choice = 'scissors';
            break;
        default:
            return choice = 'error';
    }
}

function round (player){
    let result;
    let CPU = getComputerChoice();
    let score = 0;

    if (((CPU == 'rock') && (player =='rock')) || ((CPU == 'paper') && (player =='paper')) || ((CPU == 'scissors') && (player =='scissors')) ){
        score = 0;
        return result = ['Draw!', score];
    }else if(((CPU =='rock') && (player == 'paper')) || ((CPU =='paper') && (player == 'scissors')) || ((CPU == 'scissors') && (player == 'rock'))){
        score = 1;
        return result = [`You win! ${player} beats ${CPU}!`, score];
    }else if(((CPU == 'rock') && (player == 'scissors')) || ((CPU == 'paper') && (player == 'rock')) ||  ((CPU == 'scissors') && (player == 'paper'))){
        score = 2;
        return result = [`You lose! ${CPU} beats ${player}!`, score];
    }else{
        return result = ['error', score];
    }
    return score;
}

rock.addEventListener('click', e=>{
    let answer = round('rock');
    div.textContent = `${answer[0]}`;
    results.append(div);

    if (answer[1] === 1){
        playerCount= playerCount+1;
        div2.textContent = `${playerCount}`;
        playerScore.append(div2);
    }
    if (answer[1] === 2){
        cpuCount= cpuCount+1;
        div3.textContent = `${cpuCount}`;
        cpuScore.append(div3);
    }

    if (playerCount== 5 && winStatementCheck == 1){
        div4.textContent = 'The Player has won the game! Refresh page for a new game';
        winner.append(div4);
        winStatementCheck = 0;
    }

    if (cpuCount == 5 && winStatementCheck == 1){
        div4.textContent = 'The Computer has won the game! Refresh page for a new game';
        winner.append(div4);
        winStatementCheck = 0;
    }

});

paper.addEventListener('click', e=>{
    let answer = round('paper');
    div.textContent = `${answer[0]}`;
    results.append(div);

    if (answer[1] === 1){
        playerCount= playerCount+1;
        div2.textContent = `${playerCount}`;
        playerScore.append(div2);
    }
    if (answer[1] === 2){
        cpuCount= cpuCount+1;
        div3.textContent = `${cpuCount}`;
        cpuScore.append(div3);
    }

    if (playerCount== 5 && winStatementCheck == 1){
        div4.textContent = 'The Player has won the game! Refresh page for a new game';
        winner.append(div4);
        winStatementCheck = 0;
    }

    if (cpuCount == 5 && winStatementCheck == 1){
        div4.textContent = 'The Computer has won the game! Refresh page for a new game';
        winner.append(div4);
        winStatementCheck = 0;
    }
});

scissors.addEventListener('click', e=>{
    let answer = round('scissors');
    div.textContent = `${answer[0]}`;
    results.append(div);

    if (answer[1] === 1){
        playerCount= playerCount+1;
        div2.textContent = `${playerCount}`;
        playerScore.append(div2);
    }
    if (answer[1] === 2){
        cpuCount= cpuCount+1;
        div3.textContent = `${cpuCount}`;
        cpuScore.append(div3);
    }

    if (playerCount== 5 && winStatementCheck == 1){
        div4.textContent = 'The Player has won the game! Refresh page for a new game';
        winner.append(div4);
        winStatementCheck = 0;
    }

    if (cpuCount == 5 && winStatementCheck == 1){
        div4.textContent = 'The Computer has won the game! Refresh page for a new game';
        winner.append(div4);
        winStatementCheck = 0;
    }
});














