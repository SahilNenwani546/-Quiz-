#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"



console.log(chalk.bold.magenta(">"),chalk.bold.yellow(">"),chalk.bold.cyan(">"),chalk.bold.gray(">"),chalk.bold.red(">"),chalk.bold.blue(">"),        chalk.bold.green("WELLCOME"), chalk.bold.red("TO"), chalk.bold.blueBright("QUIZ"), chalk.bold.yellow("PROJECT"),      chalk.bold.magenta("<"),chalk.bold.yellow("<"),chalk.bold.cyan("<"),chalk.bold.gray("<"),chalk.bold.red("<"),chalk.bold.blue("<"));
let condition = true;
let Name = await inquirer.prompt(
    [
        {
            name:"Enter",
            type:"input",
            message:chalk.yellow.italic("\nEnter Your Name"),
            validate: function (input) {
                if (input.trim() == "") {
                    return "Please enter a non empty name."
                }
                return true;
            }
        }
    ]
);
console.log(chalk.bold.black.italic.white("\n\tTypescript Quiz\t\n"));
console.log(chalk.bold.italic.cyanBright ("Select the correct answer to following multiple choice questions.\n"));



// creating a object
const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt(
    [
        {
            name: "question_1",
            type: "list",
            message: chalk.whiteBright.italic.bold("Q1. What is extension for typescript file?"),
            choices: ["abc.js", "abc.ts", "tsc abc", "non of the above"]
        },
        {
            name: "question_2",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ1. Which of the following is valid typescript statement?"),
            choices: ['var string a="Hello"; ','string a="Hello"; ','var a:string="Hello";','var a="Hello":string; ']
        },
        {
            name: "question_3",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ1. What is the correct way to check if two values are not equal in Typescript?"),
            choices: [("a == b"), ("a === b"), ("a !==b"), ("a > b")]
        },
        {
            name: "question_4",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ1. What will be the output of following in typescript?\n var a = 12;\n a 'Yes';\n console.log(a);"),
            choices: ["12", "Yes", "12Yes", "Non of the above"]
},
        {
            name: "question_5",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ1. What is the primary difference between TypeScript and JavaScript?"),
            choices: ["Typescript has a larger standard library than javascript.", "TypeScript is a completely different language; they are not related.", "JavaScript can RUN directly in the browser, while TypeScript cannot", "TypeScript is a compiled language, while JavaScript is interpreted." ]
        }
    ]
)

let score: number = 0;

switch (quiz.question_1) {
    case "abc.ts":
        console.log(chalk.cyanBright.bold.italic("1. Correct!"));
        ++score
        break;
    default:
        console.log(chalk.red.bold.italic("1. Incorrect!"));
}
switch (quiz.question_2) {
    case 'var a:string="Hello";':
        console.log(chalk.cyanBright.bold.italic("2. Correct!"));
        ++score
        break;
    default:
        console.log(chalk.red.bold.italic("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "a !==b":
        console.log(chalk.cyanBright.bold.italic("3. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("3. Incorrect!"));
        
}
switch (quiz.question_4) {
    case "12":
        console.log(chalk.cyanBright.bold.italic("4. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("4. Incorrect!"));
        
}
switch (quiz.question_5) {
    case "TypeScript is a compiled language, while JavaScript is interpreted.":
        console.log(chalk.cyanBright.bold.italic("5. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("5. Incorrect!"));
        
}

// console.log(chalk.whiteBright.bold.italic(`Score:${} ${chalk.cyanBright.bold.italic(score)}`));
console.log(chalk.whiteBright.bold.italic(chalk.grey("Dear ") + chalk.magentaBright(Name.Enter,), chalk.bold.yellow("Your ") +  chalk.blue("Score"), chalk.magenta("is"), chalk.whiteBright(": ") + chalk.whiteBright.bold.italic(score) + chalk.red(" out"), chalk.cyan("of ") + chalk.whiteBright.bold.italic("5")));
