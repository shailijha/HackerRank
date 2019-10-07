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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    // let numValleys = 0;
    // let path = 0;
    // s = s.split('');
    // for (let num = 0; num < n; num++) {
    //     if (s[num] == 'U') {
    //         path += 1;
    //         //console.log('path in U: ',path);
    //     }
    //     else if (s[num] == 'D') {
    //         if (path == 0 && path - 1 == -1 && num != n - 1) {
    //             numValleys += 1;
    //             console.log('numvalleys if ', numValleys);
    //         }
    //         path -= 1;
    //         //console.log('path in D: ', path);
    //         if (path < 0) {
    //             console.log(numValleys);
    //             continue;
    //         }
    //     }
    // }
    // //console.log(`Final path is ${path}`);
    // console.log(numValleys);
    // return numValleys;
    let num_valleys = 0;
    let path_sum = 0;
    let path_array = s.split('');
    for(let idx = 0; idx < n; idx++) {
        path_sum += pathWeightage(path_array[idx]);
        if(path_sum == -1)
            num_valleys += 1;
    }

    return num_valleys;
}

function pathWeightage(char) {
    switch(char) {
        case 'U':
            return 1;
            break;
        case 'D':
            return -1;
            break;
        default:
            return 'Invalid input';
            break;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
