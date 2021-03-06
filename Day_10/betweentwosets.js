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
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    /*
     * Write your code here.
     */
 var total=0;
       for(var i=1;i<=100;i++)
       {
           var acount=0;
           var bcount=0;
           for(var j=0;j<a.length;j++)
           {
               if(i%a[j]==0)
               {
                   acount++;
               }
           }
           if(acount==a.length)
           {
               for(var k=0;k<b.length;k++)
               {
                   if(b[k]%i==0)
                   {
                       bcount++;
                   }
               }
           }
           if(bcount==b.length)
           {
               total++;
           }
       }
        return total;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}
