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
    // player = player.toLowerCase();

    if (((CPU == 'rock') && (player =='rock')) || ((CPU == 'paper') && (player =='paper')) || ((CPU == 'scissors') && (player =='scissors')) ){
        return result = 'Draw!';
    }else if(((CPU =='rock') && (player == 'paper')) || ((CPU =='paper') && (player == 'scissors')) || ((CPU == 'scissors') && (player == 'rock'))){
        return result = `You win! ${player} beats ${CPU}!`;
    }else if(((CPU == 'rock') && (player == 'scissors')) || ((CPU == 'paper') && (player == 'rock')) ||  ((CPU == 'scissors') && (player == 'paper'))){
        return result = `You lose! ${CPU} beats ${player}!`;
    }else{
        return result = 'error';
    }

}

// function game (){
//     for (let x = 0;x<5; x++){
//         let player = prompt('Choose between rock, paper and scissors.');
//         let count = x + 1;
//         console.log(`Round ${count}!`);
//         console.log(round(getComputerChoice(), player));
//     }
//     console.log('Game has finished!');
// }
// console.log(game());

const results = document.querySelector('.results');
const runningScore = document.querySelector('.running-score');
const winner = document.createElement('div');
const div = document.createElement('div');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', e=>{
    div.textContent = `${round('rock')}`;
    results.append(div);
});
paper.addEventListener('click', e=>{
    div.textContent = `${round('paper')}`;
    results.append(div);
});
scissors.addEventListener('click', e=>{
    div.textContent = `${round('scissors')}`;
    results.append(div);
});






