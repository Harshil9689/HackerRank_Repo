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
 * Complete the truckTour function below.
 */
function truckTour(petrolpumps) {
    /*
     * Write your code here.
     */
 let n = petrolpumps.length;
    let has_continue = true;
    let petrol = 0;
    let np = 0;
    for(let i=0;((i<n)&&has_continue);i++) {
        let petrol = 0;
        let has_petrol = true;
        for(let j=0;((j<n)&&has_petrol);j++) {
            let index = (j + i)%n;
            petrol += petrolpumps[index][0];
            petrol -= petrolpumps[index][1];
            if(petrol < 0) {
               has_petrol = false; 
            }
        }
        if(has_petrol) {
            np = i;
            has_continue = false;
        }
    }
    return np;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let petrolpumps = Array(n);

    for (let petrolpumpsRowItr = 0; petrolpumpsRowItr < n; petrolpumpsRowItr++) {
        petrolpumps[petrolpumpsRowItr] = readLine().split(' ').map(petrolpumpsTemp => parseInt(petrolpumpsTemp, 10));
    }

    let result = truckTour(petrolpumps);

    ws.write(result + "\n");

    ws.end();
}
