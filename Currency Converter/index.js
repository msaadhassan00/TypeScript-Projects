"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    console.log("--------------------");
    console.log("Currency Converter");
    console.log("--------------------");
    Currency();
    console.log("--------------------");
    var selectCurrency = (0, readline_sync_1.question)("Select Currency:");
    var Amount = (0, readline_sync_1.question)("Enter Amount:");
    Currency();
    var changeCurrency = (0, readline_sync_1.question)("Select Currency You Want to Change:");
    var validInput = isNumber(selectCurrency) && isNumber(Amount) && isNumber(changeCurrency);
    if (validInput) {
        var enteredCurrency = parseInt(selectCurrency);
        var Amnt = parseInt(Amount);
        var CurrChng = parseInt(changeCurrency);
        Converter(enteredCurrency, Amnt, CurrChng);
    }
}
function Currency() {
    console.log(" 0 -> PKR");
    console.log(" 1 -> USD");
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
function Converter(curr, Amnt, ChngCurr) {
    switch (curr) {
        case 0:
            var result = Amnt * 0.0046;
            console.log("Entered PKR Amount in USD is:" + result);
            break;
        case 1:
            var result2 = Amnt * 219.19;
            console.log("Entered USD Amount in PKR is:" + result2);
            break;
        default:
            console.log("^_^");
            break;
    }
}
main();
