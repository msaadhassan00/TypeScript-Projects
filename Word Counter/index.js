"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function WordCount() {
    var str = (0, readline_sync_1.question)("Enter String:");
    console.log("Words in given String: ", str.split(" ").length);
}
WordCount();
