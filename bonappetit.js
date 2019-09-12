'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let billCharged = b;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    bill.splice(k,1);
    // console.log(bill);
    // console.log(bill.reduce(reducer));

    let billActual = (bill.reduce(reducer))/2;

    if(billCharged === billActual) {
        console.log('Bon Appetit');
    } else {
        console.log(billCharged - billActual);
    }
}

function main() {
    const nk = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));

    const b = parseInt(readLine().trim(), 10);

    bonAppetit(bill, k, b);
}
