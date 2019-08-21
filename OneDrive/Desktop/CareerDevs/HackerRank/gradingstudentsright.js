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
* Complete the 'gradingStudents' function below.
*
* The function is expected to return an INTEGER_ARRAY.
* The function accepts INTEGER_ARRAY grades as parameter.
*/

function gradingStudents(grades) {
 // 1.if grade > 40 and nearest multiple of 5 - grade < 3, then round it up
 // 2.if grade > 40 and nearest multiple of 5 - grade >= 3, then don't do anything
 // 3.if grade < 38 and nearest multiple of 5 - grade < 3, then round it up, else do nothing
 console.log(grades);
 for (let i = 0; i < grades.length; i++) {
     let five_rem = grades[i] % 5;
     //console.log(five_rem);
     if (grades[i] > 40 && (5 - five_rem) < 3) {
         grades[i] += (5 - five_rem);
         //console.log(gra)
     }
     else if (grades[i] >= 38 && grades[i] < 40 && (5 - five_rem) <= 3) {
         grades[i] += (5 - five_rem);
     }
 }
 //console.log(grades);
 return grades;
}

function main() {
 const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

 const gradesCount = parseInt(readLine().trim(), 10);

 let grades = [];

 for (let i = 0; i < gradesCount; i++) {
     const gradesItem = parseInt(readLine().trim(), 10);
     grades.push(gradesItem);
 }

 const result = gradingStudents(grades);

 ws.write(result.join('\n') + '\n');

 ws.end();
}
