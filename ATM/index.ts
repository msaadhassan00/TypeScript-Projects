import { question } from 'readline-sync'

function ATM()
{
    const [ AccountBalance, AccountNumber, UserName, AccountType, AccountPin ] = User()

    //ATM Functions
    function Details(){
        console.log('Account Number:', AccountNumber);
        console.log('Account Title:', UserName);
        console.log('Account Type:', AccountType);
    }

    function CheckBalance(){
        console.log('Current Balance:', AccountBalance);
    }

    function MoneyTransfer(){
        const [ AccountBalance ] = User()
        console.log("Account Balance: ",AccountBalance)
        const TransferAccountNumber = question("Enter Account Number: ")
        const TransferMoney = question("Enter Transfer Money: ")
        const validInput :boolean= isNumber(TransferAccountNumber) && isNumber(TransferMoney)
        if(validInput){
            const Amnt2 = parseInt(TransferMoney)
            const RemainingAccountBalance = AccountBalance - Amnt2
            console.log(RemainingAccountBalance)
        }

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

    console.log('Account Number:',AccountNumber)
    console.log('Account Password:',AccountPin)

    const AccntNumbr :string = question("Enter Account Number: ");
    const AccntPswrd :string = question("Enter PIN: ");

    const validInput :boolean= isNumber(AccntNumbr) && isNumber(AccntPswrd);

    function Machine(){
        if(validInput)
    {
        const CardNumber: number = parseInt(AccntNumbr);
        const CardPin: number = parseInt(AccntPswrd);
        
        if(CardNumber === AccountNumber){
            if(CardPin === AccountPin){
                console.log("===============================")
                console.log('Press 1 for Details');
                console.log('Press 2 for Withdrwal Amount');
                console.log('Press 3 for Transfer Money');
                console.log('Press 4 for Check Balance')
                console.log('Press Ctrl + C to break')
                console.log("===============================")
                const Choice = question("Enter: ")

                const validInput :boolean= isNumber(Choice)
                
                if(validInput){
                    const Entered_Choice = parseInt(Choice)

                    if (Entered_Choice === 1 ){
                        Details()
                        Machine()
                    }
                    if (Entered_Choice === 2 ){
                        Withdrwal()
                        Machine()
                    }
                    if (Entered_Choice === 3 ){
                        MoneyTransfer()
                        Machine()
                    }
                    if (Entered_Choice === 4 ){
                        CheckBalance()
                        Machine()
                    }
                    else{
                        console.log('Wrong Choice')
                    }
                   
                }

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
    Machine()
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
        console.log("===============================")
        console.log('Account Number:', AccountNumber);
        console.log('Account Title:', UserName);
        console.log('Account Type:', AccountType);
        console.log("===============================")
    }

    function CheckBalance(){
        console.log("===============================")
        console.log('Current Balance:', AccountBalance);
        console.log("===============================")
    }

    function MoneyTransfer(){
        const [ AccountBalance ] = User()
        console.log("===============================")
        console.log("Account Balance: ",AccountBalance)
        const TransferAccountNumber = question("Enter Account Number: ")
        const TransferMoney = question("Enter Transfer Money: ")
        const validInput :boolean= isNumber(TransferAccountNumber) && isNumber(TransferMoney)
        if(validInput){
            const Amnt2 = parseInt(TransferMoney)
            const RemainingAccountBalance = AccountBalance - Amnt2
            console.log("Remaining Amount",RemainingAccountBalance)
            console.log("===============================")
        }

    }

    function Withdrwal(){
        const WithdrwalAmount :string = question('Enter Amount: ')
        const validInput :boolean= isNumber(WithdrwalAmount)
        if(validInput){
            const Amnt = parseInt(WithdrwalAmount)
            const CurrentBalance = AccountBalance - Amnt
            console.log("===============================")
            console.log(CurrentBalance)
            console.log("===============================")
        }
        else{
            console.log('Invalid')
        }
    }

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


ATM()
// ATM_Functions()

