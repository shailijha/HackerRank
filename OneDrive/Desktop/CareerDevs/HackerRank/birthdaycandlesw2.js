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
    let size = ar.length;
    let maximum = ar[0];
    let blownCandles = 0;
    if (maximum > ar[1]) {
        blownCandles += 1;
    }
    for (let i = 1; i + 1 < size; i++) {
        console.log(maximum, ar[i + 1], maximum <= ar[i + 1]);
        if (maximum <= ar[i + 1]) {
            maximum = ar[i + 1];
            blownCandles += 1;
            console.log(`maximum: ${maximum},blownCandles: ${blownCandles}`);
        }
    }
    //console.log(blownCandles);
    return blownCandles;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
