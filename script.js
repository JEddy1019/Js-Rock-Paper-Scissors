// function generateRandomInteger(max) {
//     return Math.floor(Math.random() * max) + 1;
// }

function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
  }
  

function getComputerChoice(){
    
    let num = random(3);
    // console.log(num);
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
// console.log(getComputerChoice());

let player ='rock'; //testing variable
// let CPU = 'paper';   //testing variable

function round (CPU, player){
    let result;
    // CPU = CPU.toLowerCase();//testing variable
    player = player.toLowerCase();

    // switch (CPU, player){

    //     case (CPU = 'rock') && (player ='rock'):
    //     case (CPU = 'paper') && (player ='paper'):
    //     case (CPU = 'scissors') && (player ='scissors'):
    //         return result = 'Draw!';
    //         break;

    //     case (CPU = 'rock') && (player = 'paper'):
    //     case (CPU = 'paper') && (player = 'scissors'):    
    //     case (CPU = 'scissors') && (player = 'rock'):
    //         return result = `You win! ${player} beats ${CPU}!`;
    //         break;

    //     case (CPU = 'rock') && (player = 'scissors'):
    //     case (CPU = 'paper') && (player = 'rock'): 
    //     case (CPU = 'scissors') && (player = 'paper'):
    //         return result = `You lose! ${CPU} beats ${player}!`;
    //         break; 

    //     default:
    //         return result = 'error';
    // }


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
// console.log(round(CPU, player));
console.log(round(getComputerChoice(), player));
