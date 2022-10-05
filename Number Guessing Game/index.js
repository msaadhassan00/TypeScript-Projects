"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    // let min: string = question("Enter Min Range Number: ")
    // let max: string = question("Enter Maximum Range Number: ")
    console.log('Guess Number between 1 to 10');
    var num = (0, readline_sync_1.question)('Enter Your Guess Number: ');
    // const validInput :boolean= isNumber(min) && isNumber(max) && isNumber(num);
    var validInput = isNumber(num);
    if (validInput) {
        // const minNum: number = parseInt(min);
        // const maxNum: number = parseInt(max);
        var userNum = parseInt(num);
        // Game(minNum,maxNum,userNum)
        Game(userNum);
    }
    else {
        console.log('Invalid Input');
        main();
    }
}
// function Game(minNmber: number, maxNmber: number, userNumber: number)
function Game(userNumber) {
    var guess = 3;
    var computer = RandomNumberGenerator(1, 10);
    if (guess > 0) {
        if (computer === userNumber) {
            console.log('You Guessed it right');
        }
        else {
            console.log('You Guessed it wrong');
            guess = guess - 1;
            console.log(guess);
        }
    }
    else {
        console.log('No Guess Left');
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function RandomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
main();
