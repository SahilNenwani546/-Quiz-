#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.magenta("\t>"),chalk.bold.yellow(">"),chalk.bold.cyan(">"),chalk.bold.gray(">"),chalk.bold.red(">"),chalk.bold.blue(">"),        chalk.bold.green("WELLCOME"), chalk.bold.red("TO"), chalk.bold.blueBright("QUIZ"), chalk.bold.yellow("PROJECT"),      chalk.bold.magenta("<"),chalk.bold.yellow("<"),chalk.bold.cyan("<"),chalk.bold.gray("<"),chalk.bold.red("<"),chalk.bold.blue("<"));
console.log(chalk.magenta("\n........................................................................\n"))

let condition = true;
let Name = await inquirer.prompt(
    [
        {
            name:"Enter",
            type:"input",
            message:chalk.bold.yellow.italic(("\nE"),chalk.bold.whiteBright.italic("n"),chalk.bold.cyan.italic("t"),chalk.bold.red.italic("e"),chalk.bold.greenBright.italic("r "),chalk.bold.blue.italic(" Y"),chalk.bold.green.italic("o"),chalk.bold.whiteBright.italic("u"),chalk.bold.magenta.italic("r "),chalk.bold.gray.italic(" N"),chalk.bold.red.italic("a"),chalk.bold.cyan.italic("m"),chalk.bold.green.italic("e"), chalk.bold.italic.grey(":")),
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
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;
} = await inquirer.prompt(
    [
        {
            name: "question_1",
            type: "list",
            message: chalk.whiteBright.italic.bold("Q1. What is extension for typescript file?"),
            choices: ["A) abc.js", "B) abc.ts", "C) tsc abc", "D) non of the above"]
        },
        {
            name: "question_2",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ2. Which of the following is valid typescript statement?"),
            choices: ['A) var string a="Hello"; ','B) string a="Hello"; ','C) var a:string="Hello";','D) var a="Hello":string; ']
        },
        {
            name: "question_3",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ3. What is the correct way to check if two values are not equal in Typescript?"),
            choices: ["A) (a == b)", "B) (a === b)", "C) (a !==b)", "D) (a > b)"]
        },
        {
            name: "question_4",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ4. What will be the output of following in typescript?\n var a = 12;\n a 'Yes';\n console.log(a);"),
            choices: ["A) 12", "B) Yes", "C) 12Yes", "D) Non of the above"]
},
        {
            name: "question_5",
            type: "list",
            message: chalk.whiteBright.italic.bold("\nQ5. What is the primary difference between TypeScript and JavaScript?"),
            choices: ["A) Typescript has a larger standard library than javascript.", "B) TypeScript is a completely different language; they are not related.", "C) JavaScript can RUN directly in the browser, while TypeScript cannot", "D) TypeScript is a compiled language, while JavaScript is interpreted." ]
        },
        {
            name:"question_6",
            type:"list",
            message:"\nQ6.What is the output of the following experation in Typescript:\n5+'5'?",
            choices: ["A) 55", "B) 10", "C) 5 + 5", "D) Error"]
        },
        {
            name:"question_7",
            type:"list",
            message:"\nQ7.What is the correct way to check if a value is greater than or equal to another value in Typescript?",
            choices: ["A) a >= b", "B) a => b", "C) a <= b", "D) a =< b"]

        },
        {
            name:"question_8",
            type:"list",
            message:"\nQ8.What is the purpose of the cls command?",
            choices: ["A) Changes the color scheme of the command prompt", "B) Clears the command prompt screen", "C) Lists all environment variables", "D) Closes the command prompt window" ]

        },
        {
            name:"question_9",
            type:"list",
            message:"\nQ9.Which symbol is used for type annotations in Typescript?",
            choices: ["A) +=","B) =>","C) =","D) :"]

        },
        {
            name:"question_10",
            type:"list",
            message:"\nQ10.What is the output of the following TypeScriptcode:\n console.log(5 === '5');?",
            choices: ["A) True", "B) false", "C) undefined", "D) null" ]

        }
    ]
)

let score: number = 0;

switch (quiz.question_1) {
    case "B) abc.ts":
        console.log(chalk.cyanBright.bold.italic("1. Correct!"));
        ++score
        break;
    default:
        console.log(chalk.red.bold.italic("1. Incorrect!"));
}
switch (quiz.question_2) {
    case 'C) var a:string="Hello";':
        console.log(chalk.cyanBright.bold.italic("2. Correct!"));
        ++score
        break;
    default:
        console.log(chalk.red.bold.italic("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "C) (a !==b)":
        console.log(chalk.cyanBright.bold.italic("3. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("3. Incorrect!"));
        
}
switch (quiz.question_4) {
    case "A) 12":
        console.log(chalk.cyanBright.bold.italic("4. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("4. Incorrect!"));
        
}
switch (quiz.question_5) {
    case "D) TypeScript is a compiled language, while JavaScript is interpreted.":
        console.log(chalk.cyanBright.bold.italic("5. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("5. Incorrect!"));
        
}
switch (quiz.question_6) {
    case "A) 55":
        console.log(chalk.cyanBright.bold.italic("6. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("6. Incorrect!"));
        
}
switch (quiz.question_7) {
    case "A) a >= b":
        console.log(chalk.cyanBright.bold.italic("7. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("7. Incorrect!"));

}
switch (quiz.question_8) {
    case "B) Clears the command prompt screen":
        console.log(chalk.cyanBright.bold.italic("8. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("8. Incorrect!"));
        
}
switch (quiz.question_9) {
    case "D) :":
        console.log(chalk.cyanBright.bold.italic("9. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("9. Incorrect!"));
        
}
switch (quiz.question_10) {
    case "B) false":
        console.log(chalk.cyanBright.bold.italic("10. Correct!"));
        ++score
        break
    default:
        console.log(chalk.red.bold.italic("10. Incorrect!"));
        
}

console.log(chalk.whiteBright.bold.italic(chalk.grey("Dear ") + chalk.magentaBright(Name.Enter,), chalk.bold.yellow("Your ") +  chalk.blue("Score"), chalk.magenta("is"), chalk.whiteBright(": ") + chalk.whiteBright.bold.italic(score) + chalk.red(" out"), chalk.cyan("of ") + chalk.whiteBright.bold.italic("10")));
