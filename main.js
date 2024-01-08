import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "please user enter no 01"
    },
    { type: "number",
        name: "num2",
        message: "please user enter no 02"
    }, {
        type: "list",
        name: "operator",
        choices: ["addition(+)", "subtraction(-)", "multiplication(*)", "division(/)"],
        message: "please user enter what operator you want to use"
    }]);
const { num1, num2, operator } = ans;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator === "addition(+)") {
        result = num1 + num2;
    }
    else if (operator === "subtraction(-)") {
        result = num1 - num2;
    }
    else if (operator === "multiplication(*)") {
        result = num1 * num2;
    }
    else if (operator === "division(/)") {
        result = num1 / num2;
    }
    console.log(` your answer is = ${result}`);
}
else {
    console.log("please enter valid input user");
}
