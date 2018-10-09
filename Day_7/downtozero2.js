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
 * Complete the downToZero function below.
 */
let k = [];
for(let i=5;i<1000000;i++) k[i]=-1;
    k[0]=0;
    k[1]=1;
    k[2]=2;
    k[3]=3;
    k[4]=3;
let counter=3;
function downToZero(n) {
    if(k[n]!=-1) {
        return k[n];
    };
    
    for( let i=3;i<n;i++){
       
        for(var j=2;j<=i;j++){
            let nij=i*j;
            if (nij>n) break;
            if((k[nij]==-1)||(k[nij]>k[i]+1) ) k[nij]=k[i]+1;
            if (nij==n){
                                  
            } 
        };

        if((k[i+1]==-1)||(k[i+1]>k[i]+1) ){
            k[i+1]=k[i]+1;
        }
    }
    return k[n];
  
    }


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let result = downToZero(n);

        ws.write(result + "\n");
    }

    ws.end();
}
