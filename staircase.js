'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    let num_spaces = n - 1;
    let num_symbols = n - num_spaces;
    let str = '';
    while (num_spaces >= 0 && num_symbols <= n) {
        str = '';
        for (let i = 0; i < num_spaces; i++) {
            str += ' ';
        }
        for (let j = 0; j < num_symbols; j++) {
            str += '#';
        }
        num_spaces -= 1;
        num_symbols += 1;
        console.log(str);
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
