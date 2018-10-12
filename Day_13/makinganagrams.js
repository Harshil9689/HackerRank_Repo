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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
var arr1=new Array(26).fill(0);
    arr1.length=26;
    var arr2 =new Array(26).fill(0);
    arr2.length=26;
    for(let i=0;i<s1.length;i++)
        {
            arr1[s1.charCodeAt(i)-97]++;
            
        }
    for( let j=0;j<s2.length;j++)
        {
            arr2[s2.charCodeAt(j)-97]++;
        }
    var count=0;
    for(let x=0;x<26;x++)
        {
            var add=arr1[x]-arr2[x];
            if(add<0)
                {
                    add=-(add);
                }
            count+=add;
            
        }
    return count;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
