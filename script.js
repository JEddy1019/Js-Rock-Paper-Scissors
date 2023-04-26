// function generateRandomInteger(max) {
//     return Math.floor(Math.random() * max) + 1;
// }

function random(number) {
    const result = Math.floor(Math.random() * number);
    return result;
  }
  

function getComputerChoice(){
    // let num = random(3);
    // console.log(num);
    // let choice;
    // if (num=2){
    //     return choice='rock';
    // }else if (num=1){
    //     return choice='paper'
    // }else if (num=0){
    //     return choice='scissors'
    // }else{
    //     return choice='error' YOU FORGOT SEMI COLEN!
    // }
    let num = random(3);
    console.log(num);
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
console.log(getComputerChoice());
// console.log(random(3));