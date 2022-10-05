import { question } from "readline-sync";

function main()
{
    // let min: string = question("Enter Min Range Number: ")
    // let max: string = question("Enter Maximum Range Number: ")
    console.log('Guess Number between 1 to 10')
    var num :string = question('Enter Your Guess Number: ');
    
    // const validInput :boolean= isNumber(min) && isNumber(max) && isNumber(num);
    const validInput :boolean = isNumber(num);
    if(validInput)
    {
        // const minNum: number = parseInt(min);
        // const maxNum: number = parseInt(max);
        const userNum: number = parseInt(num);
        // Game(minNum,maxNum,userNum)
        Game(userNum)
    }
    else{
        console.log('Invalid Input')
        main()
    }

}

// function Game(minNmber: number, maxNmber: number, userNumber: number)
function Game(userNumber: number)
{
    var guess = 3;

    var computer = RandomNumberGenerator(1, 10)

       if(guess > 0){
            if(computer === userNumber){
                console.log('You Guessed it right')
            }
            else{
                console.log('You Guessed it wrong')
                guess = guess - 1;
                console.log(guess)
            }
       }
       else{
        console.log('No Guess Left')
       }

}

function isNumber(str: string) :boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}

function RandomNumberGenerator(min :number,max :number)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

main()