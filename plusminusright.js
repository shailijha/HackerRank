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

// Complete the plusMinus function below.
function plusMinus(arr) {
    let size = arr.length;
    let count = [0, 0, 0];
    let result = [0, 0, 0];
    for (let i = 0; i < size; i++) {
        if (arr[i] === 0)
        {
            count[0] += 1;
            //console.log(`${arr[i]} ${count}`);
        }
        else if (arr[i] < 0)
        {
            count[1] += 1;
            //console.log(`${arr[i]} ${count}`);
        }
        else
        {
            count[2] += 1;
            //console.log(`${arr[i]} ${count}`);
        }
    }
    result[0] = count[0] / size;
    result[1] = count[1] / size;
    result[2] = count[2] / size;
    //console.log(`${count}`);
    console.log(`${result[2].toFixed(6)} \n ${result[1].toFixed(6)} \n ${result[0].toFixed(6)}`);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
