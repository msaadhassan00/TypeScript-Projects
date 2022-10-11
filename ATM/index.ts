import { question } from 'readline-sync'

function ATM()
{
    const [ AccountNumber, AccountPin ] = User();
    console.log('Account Number:',AccountNumber)
    console.log('Account Password:',AccountPin)

    const AccntNumbr :string = question("Enter Account Number: ");
    const AccntPswrd :string = question("Enter PIN: ");

    const validInput :boolean= isNumber(AccntNumbr) && isNumber(AccntPswrd);
    
    if(validInput)
    {
        const CardNumber: number = parseInt(AccntNumbr);
        const CardPin: number = parseInt(AccntPswrd);
        
        if(CardNumber === AccountNumber){
            if(CardPin === AccountPin){
                console.log('Successfull')
            }
            else{
                console.log('Invalid Card Pin')
            }
        }
        else{
            console.log('Invalid Card Number')
        }

    }
    else{
        console.log('Invalid Input')
    }
}

function User() 
{
    const UserName = "John Smith"
    const AccountNumber: number = AccountNumberGenerator()
    const AccountBalance: number = AccountBalanceGenerator()
    const AccountPin: number = AccountPinGenerator()
    const AccountType :string = "Current"
    return [ AccountBalance, AccountNumber, UserName, AccountType, AccountPin ] as const;
}

function ATM_Functions()
{

   const [ AccountBalance, AccountNumber, UserName, AccountType, AccountPin ] = User() 

    function Details(){
        console.log('Account Number:', AccountNumber);
        console.log('Account Title:', UserName);
        console.log('Account Type:', AccountType);
    }

    function CheckBalance(){
        console.log('Current Balance:', AccountBalance);
    }

    function Withdrwal(){
        const WithdrwalAmount :string = question('Enter Amount: ')
        const validInput :boolean= isNumber(WithdrwalAmount)
        if(validInput){
            const Amnt = parseInt(WithdrwalAmount)
            const CurrentBalance = AccountBalance - Amnt
            console.log(CurrentBalance)
        }
        else{
            console.log('Invalid')
        }
    }

    Details()
    CheckBalance()
    Withdrwal()
}

function AccountNumberGenerator()
{
    return Math.floor(100000000 + Math.random() * 900000000);
}

function AccountBalanceGenerator()
{
    return Math.floor(100000 + Math.random() * 900000);
}

function AccountPinGenerator()
{
    return Math.floor(10000 + Math.random() * 90000);
}

function isNumber(str: string) :boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum
}


// ATM()
ATM_Functions()

