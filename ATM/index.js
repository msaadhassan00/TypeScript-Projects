"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function ATM() {
    var _a = User(), AccountBalance = _a[0], AccountNumber = _a[1], UserName = _a[2], AccountType = _a[3], AccountPin = _a[4];
    //ATM Functions
    function Details() {
        console.log('Account Number:', AccountNumber);
        console.log('Account Title:', UserName);
        console.log('Account Type:', AccountType);
    }
    function CheckBalance() {
        console.log('Current Balance:', AccountBalance);
    }
    function MoneyTransfer() {
        var AccountBalance = User()[0];
        console.log("Account Balance: ", AccountBalance);
        var TransferAccountNumber = (0, readline_sync_1.question)("Enter Account Number: ");
        var TransferMoney = (0, readline_sync_1.question)("Enter Transfer Money: ");
        var validInput = isNumber(TransferAccountNumber) && isNumber(TransferMoney);
        if (validInput) {
            var Amnt2 = parseInt(TransferMoney);
            var RemainingAccountBalance = AccountBalance - Amnt2;
            console.log(RemainingAccountBalance);
        }
    }
    function Withdrwal() {
        var WithdrwalAmount = (0, readline_sync_1.question)('Enter Amount: ');
        var validInput = isNumber(WithdrwalAmount);
        if (validInput) {
            var Amnt = parseInt(WithdrwalAmount);
            var CurrentBalance = AccountBalance - Amnt;
            console.log(CurrentBalance);
        }
        else {
            console.log('Invalid');
        }
    }
    console.log('Account Number:', AccountNumber);
    console.log('Account Password:', AccountPin);
    var AccntNumbr = (0, readline_sync_1.question)("Enter Account Number: ");
    var AccntPswrd = (0, readline_sync_1.question)("Enter PIN: ");
    var validInput = isNumber(AccntNumbr) && isNumber(AccntPswrd);
    function Machine() {
        if (validInput) {
            var CardNumber = parseInt(AccntNumbr);
            var CardPin = parseInt(AccntPswrd);
            if (CardNumber === AccountNumber) {
                if (CardPin === AccountPin) {
                    console.log("===============================");
                    console.log('Press 1 for Details');
                    console.log('Press 2 for Withdrwal Amount');
                    console.log('Press 3 for Transfer Money');
                    console.log('Press 4 for Check Balance');
                    console.log('Press Ctrl + C to break');
                    console.log("===============================");
                    var Choice = (0, readline_sync_1.question)("Enter: ");
                    var validInput_1 = isNumber(Choice);
                    if (validInput_1) {
                        var Entered_Choice = parseInt(Choice);
                        if (Entered_Choice === 1) {
                            Details();
                            Machine();
                        }
                        if (Entered_Choice === 2) {
                            Withdrwal();
                            Machine();
                        }
                        if (Entered_Choice === 3) {
                            MoneyTransfer();
                            Machine();
                        }
                        if (Entered_Choice === 4) {
                            CheckBalance();
                            Machine();
                        }
                        else {
                            console.log('Wrong Choice');
                        }
                    }
                }
                else {
                    console.log('Invalid Card Pin');
                }
            }
            else {
                console.log('Invalid Card Number');
            }
        }
        else {
            console.log('Invalid Input');
        }
    }
    Machine();
}
function User() {
    var UserName = "John Smith";
    var AccountNumber = AccountNumberGenerator();
    var AccountBalance = AccountBalanceGenerator();
    var AccountPin = AccountPinGenerator();
    var AccountType = "Current";
    return [AccountBalance, AccountNumber, UserName, AccountType, AccountPin];
}
function ATM_Functions() {
    var _a = User(), AccountBalance = _a[0], AccountNumber = _a[1], UserName = _a[2], AccountType = _a[3], AccountPin = _a[4];
    function Details() {
        console.log("===============================");
        console.log('Account Number:', AccountNumber);
        console.log('Account Title:', UserName);
        console.log('Account Type:', AccountType);
        console.log("===============================");
    }
    function CheckBalance() {
        console.log("===============================");
        console.log('Current Balance:', AccountBalance);
        console.log("===============================");
    }
    function MoneyTransfer() {
        var AccountBalance = User()[0];
        console.log("===============================");
        console.log("Account Balance: ", AccountBalance);
        var TransferAccountNumber = (0, readline_sync_1.question)("Enter Account Number: ");
        var TransferMoney = (0, readline_sync_1.question)("Enter Transfer Money: ");
        var validInput = isNumber(TransferAccountNumber) && isNumber(TransferMoney);
        if (validInput) {
            var Amnt2 = parseInt(TransferMoney);
            var RemainingAccountBalance = AccountBalance - Amnt2;
            console.log("Remaining Amount", RemainingAccountBalance);
            console.log("===============================");
        }
    }
    function Withdrwal() {
        var WithdrwalAmount = (0, readline_sync_1.question)('Enter Amount: ');
        var validInput = isNumber(WithdrwalAmount);
        if (validInput) {
            var Amnt = parseInt(WithdrwalAmount);
            var CurrentBalance = AccountBalance - Amnt;
            console.log("===============================");
            console.log(CurrentBalance);
            console.log("===============================");
        }
        else {
            console.log('Invalid');
        }
    }
}
function AccountNumberGenerator() {
    return Math.floor(100000000 + Math.random() * 900000000);
}
function AccountBalanceGenerator() {
    return Math.floor(100000 + Math.random() * 900000);
}
function AccountPinGenerator() {
    return Math.floor(10000 + Math.random() * 90000);
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
ATM();
// ATM_Functions()
