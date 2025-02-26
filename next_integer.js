const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter an integer: ', (input) => {
    let number = parseInt(input);
    let nextNumber = number + 1;
    console.log("The next integer is: " + nextNumber);
    rl.close();
});