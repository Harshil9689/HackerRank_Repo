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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the larrysArray function below.
function larrysArray(A) {
    if (A.length < 3) {
        // console.log('NO')
        return 'NO';
    };
    let sorted = A.slice().sort((a, b) => a-b);
    let count = 0;
    for (let i = 0; i < A.length-2; i++) {
        let curr = A[i], dest = sorted[i];
        
        if (curr === dest) {
            continue;
        } else {
            //do rotations less than 3
            let indexOfDest = A.indexOf(dest);
            
            if ((indexOfDest-i) < 3) {
                rotate(A, i, i+2, dest, indexOfDest);
            } else {
                while (A[i] !== dest) {
                    let max = indexOfDest - i > 1 ? indexOfDest : i+2;
                    let min = indexOfDest - i > 1 ? indexOfDest - 2 : i;
                    rotate (A, min, max, dest, indexOfDest);
                    indexOfDest = A.indexOf(dest);
                }
            }
        }
    }
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== sorted[i]) {
            // console.log('NO');
            return 'NO';
        }
    }
    
    // console.log('YES');
    return 'YES';
}

function rotate (array, min, max, dest, indexOfDest) {
    while (indexOfDest !== min) {
        //rotate
        let minVal = array[min], maxVal = array[max], midVal = array[min+1];
        array[min] = maxVal;
        array[min+1] = minVal;
        array[max] = midVal;
        indexOfDest = array.indexOf(dest); //index of dest
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const A = readLine().split(' ').map(ATemp => parseInt(ATemp, 10));

        let result = larrysArray(A);

        ws.write(result + "\n");
    }

    ws.end();
}