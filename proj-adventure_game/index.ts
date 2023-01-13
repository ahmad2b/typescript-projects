#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let continueGame = false;

const welcome = async () => {
    const user = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: chalk.bgBlueBright.whiteBright.bold(" What is your name? "),
        }
    ]);

    console.log(chalk.bgGreen.whiteBright(`\n Welcome to the Adventure Game, ${user.name}! \n`));
}

// Enemy variables
let enemies = ["Goblin", "Orc", "Troll", "Dragon"];
let maxEnemyHealth = 100;
let enemyAttackDamage = 25;

// Player variables
let playerHealth = 100;
let playerAttackDamage = 50;
let numHealPotions = 3;
let healPotionHealthAmount = 25;
let healPotionDropChance = 0.5;

let keepRunningGame: boolean;

const game = async () => {

    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth) + 1;
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];

    while (keepRunningGame) {
    console.log(chalk.bgYellow.whiteBright.bold(`\n\t # ${enemy} has appeared! # \n`));
        while(enemyHealth > 0) {
            console.log(chalk.greenBright.italic(`\t Your HP       : ${playerHealth}    `));
            console.log(chalk.greenBright.italic(`\t ${enemy}'s HP    : ${enemyHealth}    `));
            console.log(chalk.greenBright.italic(`\t Potions       : ${numHealPotions}    `));
            console.log(chalk.whiteBright.italic(`\t\n What would you like to do?`));
            console.log(chalk.whiteBright.italic(`\t 1. Attack (Press 1)`));
            console.log(chalk.whiteBright.italic(`\t 2. Drink Heal Potion (Press 2)`));
            console.log(chalk.whiteBright.italic(`\t 3. Run! (Press 3)\n`));
        

            
            const userIn = await inquirer.prompt([
                {
                    type: "input",
                    name: "userIn",
                    message: chalk.whiteBright("Enter your choice: "),
                }
            ]);

            switch (userIn.userIn) {
            case "1":
                let damageDeltoEnemy  = Math.floor(Math.random() * playerAttackDamage) + 1;
                let damageDeltoPlayer = Math.floor(Math.random() * enemyAttackDamage)  + 1;
                enemyHealth  -= damageDeltoEnemy;
                playerHealth -= damageDeltoPlayer;

                console.log(chalk.yellowBright(`\n\t> You striked the ${enemy} for ${damageDeltoEnemy} damage!`));
                console.log(chalk.yellowBright(`\t> You receive ${damageDeltoPlayer} in retaliation!\n`));

                // Check if player has no HP left and is defeated
                if (playerHealth < 1) {
                    console.log(chalk.bgRedBright.blackBright.bold(`\t You have been defeated! `));
                    keepRunningGame = false;
                    break;
                }

                // Check if enemy has no HP left and player wins
                if (enemyHealth <= 1) {
                    console.log(chalk.bgGreen.whiteBright(`\t You have defeated the ${enemy}! \n`));

                    // If player wins, check if they get a heal potion
                    let healPotionDrop = Math.random();
                    if (healPotionDrop <= healPotionDropChance) {
                        numHealPotions++;
                        console.log(chalk.bgGreen.whiteBright(`\t You got a heal potion! Total potions: ${numHealPotions} `));
                    }
                    keepRunningGame = false;
                    break;
                }

                break;

            case "2":
                if( numHealPotions > 0 ) {
                    playerHealth += healPotionHealthAmount;
                    numHealPotions--;

                    console.log(chalk.yellowBright(`\t> You drink a healing potion, healing yourself for ${healPotionHealthAmount}.`));
                    console.log(chalk.yellowBright(`\t> You now have ${playerHealth} HP.`));
                    console.log(chalk.yellowBright(`\t> You have ${numHealPotions} potions left.\n`));
                } else {
                    console.log(chalk.redBright(`\t You have no potions left!`));
                }
                break;
            case "3":
                console.log(chalk.cyanBright(`\n\t You run away from the ${enemy}!\n`));
                await game();
                break;
            default:
                console.log(chalk.bgRed.whiteBright.bold(`\n\t Invalid choice! \n`));
                break;
            }
        }
    }

    if (playerHealth <= 0) {
        console.log(chalk.redBright(`\t You have been defeated!`));
        keepRunningGame = false;
    }
    
}

const runGame = async () => {
    console.clear();
    await welcome();

    do{
        keepRunningGame = true;
        await game();
        
        console.log("\n");
        const playAgain = await inquirer.prompt([
            {
                type: "confirm",
                name: "playAgain",
                message: "Would you like to play again?",
            }
        ]);
        continueGame = playAgain.playAgain;

    } while(continueGame)

    console.log(chalk.bgBlueBright.whiteBright.bold(`\n\t ####################### \n\t # Thanks for playing! # \n\t ####################### `));

}

await runGame();
