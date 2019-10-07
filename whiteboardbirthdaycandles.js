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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    // let size = ar.length;

    // //console.log(ar);
    // let maximum = 0;
    // for (let j = 0; j < size; j++) {
    //     if (ar[j] > maximum) {
    //         maximum = ar[j];
    //     }
    // }
    // let blownCandles = 0;
    // for (let i = 0; i < size; i++) {
    //     if (ar[i] == maximum) {
    //         blownCandles += 1;
    //     }
    // }
    // //console.log(blownCandles);
    // return blownCandles;
    let max = ar[0];
    let count = 1;

    for(let idx = 1; idx < ar.length; idx++) {
        if(max < ar[idx]) {
            max = ar[idx];
            count = 1;
        }
        else if(max == ar[idx]) {
            count += 1;
        }
        else
            continue;
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
