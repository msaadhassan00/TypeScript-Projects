import { question } from "readline-sync";

function WordCount()
{
    const str :string = question("Enter String:")
    console.log("Words in given String: ",str.split(" ").length)
}

WordCount()