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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let result_array = [0, 0];

    for (let i = 0; i < a.length; i++) {
        //console.log(a[i], b[i]);
        if (a[i] > b[i]) {
            //console.log(result_array);
            result_array[0] += 1;
            //console.log(result_array);
        }
        else if(a[i] < b[i])
        {
            //console.log(result_array);
            result_array[1] += 1;
            //console.log(result_array);
        }
    }

    return result_array;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
