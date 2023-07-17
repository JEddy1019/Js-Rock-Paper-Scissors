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



// let player ='rock'; //testing variable
// let CPU = 'paper';   //testing variable

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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', e=>{
    console.log(round('rock'))
});
paper.addEventListener('click', e=>{
    console.log(round('paper'))
});
scissors.addEventListener('click', e=>{
    console.log(round('scissors'))
});


