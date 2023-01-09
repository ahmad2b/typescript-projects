#! /usr/bin/env node
/**
 * Currency Coverter Project Using Live Data from APIs
 * Rules
 * > Welcome Message
 * > Get Input from user for Coversion Type e.g. USD to PKR
 * > Get Input from user for Coversion Amount
 * > Display the Result
 * > More Coversion?
 * > Break the loop
 * > Show Error/ GoodBye Message
 */
import chalk from "chalk";
import inquirer from "inquirer";
let amountT;
let convertF;
let convertT;
async function getValue() {
    const input = await inquirer.prompt([
        {
            name: "amount",
            message: chalk.yellowBright("The amount to be converted: "),
            type: "number"
        },
        {
            name: "convertFrom",
            message: chalk.yellowBright("The currency to be converted from: "),
            type: "string"
        },
        {
            name: "convertTo",
            message: chalk.yellowBright("The currency to be converted to: "),
            type: "string"
        }
    ]);
    amountT = input.amount;
    convertF = input.convertFrom;
    convertT = input.convertTo;
}
var myHeaders = new Headers();
myHeaders.append("apikey", "XEZPPtFn36uFZTjT2Yeg15JSl9RY28a9");
var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
let getCuData = async () => {
    let store;
    await getValue();
    await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${convertT}&from=${convertF}&amount=${amountT}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(`${result}\n`))
        .then(data => store = data)
        .catch(error => console.log('error', error));
    return store;
};
let exit = false;
async function run() {
    do {
        console.clear();
        console.log(chalk.cyanBright("Welcome to Live Currency Coverter\n"));
        await getCuData();
        const againR = await inquirer.prompt([
            {
                name: "runAgain",
                message: "Do You Want To Continue? ",
                type: "confirm",
            }
        ]);
        exit = againR.runAgain;
    } while (exit);
}
run();
