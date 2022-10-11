"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function ATM() {
    var _a = User(), AccountNumber = _a[0], AccountPin = _a[1];
    console.log('Account Number:', AccountNumber);
    console.log('Account Password:', AccountPin);
    var AccntNumbr = (0, readline_sync_1.question)("Enter Account Number: ");
    var AccntPswrd = (0, readline_sync_1.question)("Enter PIN: ");
    var validInput = isNumber(AccntNumbr) && isNumber(AccntPswrd);
    if (validInput) {
        var CardNumber = parseInt(AccntNumbr);
        var CardPin = parseInt(AccntPswrd);
        if (CardNumber === AccountNumber) {
            if (CardPin === AccountPin) {
                console.log('Successfull');
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
        console.log('Account Number:', AccountNumber);
        console.log('Account Title:', UserName);
        console.log('Account Type:', AccountType);
    }
    function CheckBalance() {
        console.log('Current Balance:', AccountBalance);
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
    Details();
    CheckBalance();
    Withdrwal();
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
// ATM()
ATM_Functions();
