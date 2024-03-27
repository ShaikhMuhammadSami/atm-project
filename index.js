#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 1234;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bold.greenBright("Correct Pin Code !!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select Option",
            type: "list",
            choices: ["withdraw", "check balance", "FastCash"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            },
        ]);
        myBalance -= amountAns.amount;
        console.log(chalk.bold.green(`Your Remaining Balance is ${myBalance}`));
        if (amountAns.amount > myBalance) {
            console.log(chalk.bold.bgRedBright("Insufficient Balance !!!!!"));
        }
        ;
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.bold.green(`Your Balance is ${myBalance}`));
    }
    else if (operationAns.operation === "FastCash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select your Fast Cash",
                type: "list",
                choices: ["2000", "5000", "10000"],
            },
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log(chalk.bold.greenBright(`Your Remaining Balance is ${myBalance}`));
    }
}
else {
    console.log(chalk.bold.bgRed("Incorrect pin Number"));
}
