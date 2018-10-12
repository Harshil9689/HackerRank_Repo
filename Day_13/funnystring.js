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

// Complete the funnyString function below.
function funnyString(s) {

var setf= false;
var revFunny = s.split("").reverse().join("");
for(var i=1;i<s.length;i++){
var firstAsciMatch = Math.abs((s[i].charCodeAt(0))-(s[i-1].charCodeAt(0)));
var secAsciMatch = Math.abs((revFunny[i].charCodeAt(0))-(revFunny[i-1].charCodeAt(0)));
if(firstAsciMatch != secAsciMatch){
setf=true;

break;
}
}
if(setf){
return "Not Funny";
}
else{
return "Funny" ;
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
