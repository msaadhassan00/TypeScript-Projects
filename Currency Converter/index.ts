import { question } from 'readline-sync'

function main()
{
    console.log("--------------------")
    console.log("Currency Converter")
    console.log("--------------------")

    Currency()
    console.log("--------------------")
    const selectCurrency :string = question("Select Currency:")
    const Amount :string = question("Enter Amount:")
    Currency()
    const changeCurrency :string = question("Select Currency You Want to Change:")

    const validInput :boolean= isNumber(selectCurrency) && isNumber(Amount) && isNumber(changeCurrency);

    if(validInput){
        const enteredCurrency :number= parseInt(selectCurrency);
        const Amnt :number= parseInt(Amount);
        const CurrChng :number= parseInt(changeCurrency);

        Converter(enteredCurrency,Amnt,CurrChng)

    }

}

function Currency () :void
{
    console.log(" 0 -> PKR")
    console.log(" 1 -> USD")
}

function isNumber(str: string) :boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum
}

function Converter(curr: number, Amnt :number, ChngCurr: number)
{
    switch (curr) {
        case 0:
           const result = Amnt * 0.0046;
            console.log("Entered PKR Amount in USD is:"+ result);
            break;
        case 1:
           const result2 = Amnt * 219.19;
            console.log("Entered USD Amount in PKR is:"+ result2);
            break;
        default:
            console.log("^_^");
            break;
    }
}

main()