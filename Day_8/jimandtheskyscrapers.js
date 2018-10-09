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

// Complete the solve function below.
function solve(arr) {
let stack = [];
    let routeNum = 0;
    let j = 0;
    stack.push(arr[0]);
    
    stack = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1].value < arr[i]) {
            stack.pop();
        }

        if (stack.length == 0 || stack[stack.length - 1].value > arr[i]) {
            stack.push({
                value: arr[i],
                counter: 1
            });
        } else {
            routeNum += stack[stack.length - 1].counter;
            stack[stack.length - 1].counter += 1;
        }
    }
    
    return routeNum*2;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = solve(arr);

    ws.write(result + "\n");

    ws.end();
}
