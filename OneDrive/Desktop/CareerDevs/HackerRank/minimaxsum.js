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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let arr_copy = [...arr];
    let minimum = arr[0];
    let maximum = arr[0];
    for (let i = 0; i+1 < arr.length; i++) {
        if (minimum > arr[i+1]) {
            minimum = arr[i+1];
        }
        if (maximum < arr[i+1]) {
            maximum = arr[i + 1];
        }
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    arr.splice(arr.indexOf(maximum), 1);
    arr_copy.splice(arr_copy.indexOf(minimum),1)

    console.log(`${arr.reduce(reducer)} ${arr_copy.reduce(reducer)}`);

}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
