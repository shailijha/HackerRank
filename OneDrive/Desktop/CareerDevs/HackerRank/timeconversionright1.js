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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    s = s.split(':');
    let last_val = s[s.length - 1];

    let am_index = -1;
    let pm_index = -1;
    let temp = '';

    if (last_val.indexOf('AM') > -1) {
        am_index = last_val.indexOf('AM');
        temp = s[s.length - 1];
        temp = temp.substring(0, am_index);
    } else if (last_val.indexOf('PM') > -1) {
        pm_index = last_val.indexOf('PM');
        temp = s[s.length - 1];
        temp = temp.substring(0, pm_index);
    }
    s[s.length - 1] = temp;

    if (am_index > -1) {
        if (s[0] == '12') {
            s[0] = '00';
        }
    }
    else if (pm_index > -1 && s[0].indexOf('12') == -1 && am_index == -1) {
        s[0] = 12 + parseInt(s[0]);
    }
    return s.join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
