'use strict';

const fs = require('fs');

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

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr,n) {
    // Write your code here
    let i = 0;
    let j = 0;
    let sumDiagonal = [0, 0];

    while (i < n) {
        sumDiagonal[0] += arr[i][i];
        i += 1;
    }
    i = 0;
    j = n - 1;
    while (i < n && j >= 0) {
        sumDiagonal[1] += arr[i][j];
        i += 1;
        j -= 1;
    }

    //console.log(Math.abs(sumDiagonal[0] - sumDiagonal[1]));
    return Math.abs(sumDiagonal[0] - sumDiagonal[1]);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr,n);

    ws.write(result + '\n');

    ws.end();
}
