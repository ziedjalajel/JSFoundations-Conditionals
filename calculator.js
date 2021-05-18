const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);
const num1 = parseInt (prompt("please enter first number:"))
const num2 = parseInt (prompt("please enter second number:"))
const operator = prompt("please enter operator:")
let result;
if(operator === "+"){result = num1 + num2}
else if(operator ==="-"){result = num1 - num2}
else if(operator ==="*"){result = num1 * num2}
else if(operator ==="/"){result = num1 / num2}
else console.log("please enter a right operator");
if (num1 && num2 !== Number)(console.log("please enter a number"))
else (console.log(result));

