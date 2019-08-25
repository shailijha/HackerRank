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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let birdMap = new Map();
    let counter = 0;
    for (let num = 0; num < arr.length; num++) {
        if (birdMap.has(arr[num])) {
            let temp_count = birdMap.get(arr[num]);
            temp_count += 1;
            birdMap.set(arr[num], temp_count);
        } else {
            counter += 1;
            birdMap.set(arr[num], counter);
        }
        counter = 0;
    }

    //console.log(birdMap);

    let value = 0;
    let result = 0;
    for (const [key, val] of birdMap.entries()) {
        //console.log(key, val);
        if (value === val) {
            if (result > key) {
                result = key;
            }
        }
        if (value < val) {
            value = val;
            result = key;
        }
    }
    console.log(result);
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
