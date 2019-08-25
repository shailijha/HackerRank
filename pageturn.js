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
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    const last_page = n;
    const first_page = 1;
    let last_pages = new Array();

    let front_turns = 1;
    let last_turns = 1;

    if (last_page % 2 == 0) {
        last_pages.push(last_page);
    } else {
        last_pages.push(last_page);
        last_pages.push(last_page-1);
    }
    if (p == first_page || last_pages.indexOf(p) != -1) {
        return 0;
    } else {
        //number of turns from front
        while (p != 2 * front_turns && p != (1 + 2 * front_turns)) {
            front_turns += 1;
        }
        //number of turns from last
        if (last_page % 2 == 0) {
            while (p != (last_page - 2 * last_turns) && p != (last_page - 2 * last_turns + 1)) {
                last_turns += 1;
            }
        } else {
            while (p != (last_page - 2 * last_turns - 1) && p != (last_page - 2 * last_turns)) {
                last_turns += 1;
            }
        }
    }
    return front_turns < last_turns ? front_turns : last_turns;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
