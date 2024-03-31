#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 5):",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations ! You guess a correct number");
}
else {
    console.log("Sorry ! You guess a wrong number");
}
