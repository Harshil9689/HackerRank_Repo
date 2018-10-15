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
 * Complete the swapNodes function below.
 */
function swapNodes(indexes, queries) {
    /*
     * Write your code here.
     */
function traverseTree(action, index = 1, depth = 1) {
        let [left, right] = indexes[index - 1];
        if (left !== -1) {
            traverseTree(action, left, depth + 1);
        }
        action(index, depth);
        if (right != -1) {
            traverseTree(action, right, depth + 1);
        }
    }
    let result = [];
    for (let i = 0; i < queries.length; i++){
        let k = queries[i];
        traverseTree((index, depth) => {
            if (depth % k === 0) {
                let [left, right] = indexes[index - 1];
                indexes[index - 1] = [right, left];
            }
        });
        let order = []
        traverseTree((index, depth) => {
            order.push(index);
        })
        result.push(order);
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let indexes = Array(n);

    for (let indexesRowItr = 0; indexesRowItr < n; indexesRowItr++) {
        indexes[indexesRowItr] = readLine().split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = swapNodes(indexes, queries);

    ws.write(result.map(x => x.join(' ')).join("\n") + "\n");

    ws.end();
}
