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
    /*
     * Write your code here.
     */
    s = s.split(':');
    //console.log(s, s.length);
    //console.log(s[s.length-1]);
    let last_val = s[s.length - 1];
    if (last_val.indexOf('AM') > -1) {
        let temp = s[s.length - 1];
        temp = temp.substring(0, last_val.indexOf('AM'));
        s[s.length - 1] = temp;
        if (s[0] == '12') {
            s[0] = '00';
        }
        //console.log(s.join(':'));
    }

    else if (last_val.indexOf('PM') > -1) {
        let temp = s[s.length - 1];
        let temp1 = s[0];
        temp = temp.substring(0, last_val.indexOf('PM'));
        temp1 = 12 + parseInt(temp1);
        s[s.length - 1] = temp;
        s[0] = temp1;
    }
    console.log(s.join(':'));
    return s.join(':');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
