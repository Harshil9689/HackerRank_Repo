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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
var num=1,lower = 1,upper = 1,special = 1;
    var result = 0;
        for(var i = 0;i<n; i++) {
            var asciivalue = password.charCodeAt(i);
            if(asciivalue >= 48 && asciivalue <= 57)
            num = 0;
        else if((asciivalue >=33 && asciivalue <=45) || asciivalue == 64 || asciivalue == 94)
            special = 0;
        else if(asciivalue >=97 && asciivalue <=122)
            lower = 0;
        else if(asciivalue >=65 && asciivalue <= 90)
            upper = 0;
        }
         result = num + lower + upper + special;
        return (n < 6) ? (6-n < result)?result:6-n:result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
