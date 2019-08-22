'use strict';

const fs = require('fs');

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let matchingSocks = new Map();
    let counter = 1;
    let matchingSocksCount = 0;
    for (let num = 0; num < ar.length; num++) {
        if (!matchingSocks.has(ar[num])) {
            matchingSocks.set(ar[num], counter)
        } else {
            let temp_count = matchingSocks.get(ar[num]);
            temp_count += 1;
            matchingSocks.set(ar[num], temp_count);
        }
    }

    console.log(matchingSocks);

    for (const v of matchingSocks.values()) {
        if (v > 1) {
            matchingSocksCount += Math.floor((v / 2));
        }
    }

    console.log(matchingSocksCount);

    return matchingSocksCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
