'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    
     var count=0;
        var count1=0;
        var count2=0;
        var pos;
        var neg;
        var zer;
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]>0)
            {
                count++;
            }
            else if(arr[i]<0)
            {
                count1++;
            }
            else
            {
                count2++;
            }
        }
        pos=count/(arr.length);
        neg=count1/(arr.length);
        zer=count2/(arr.length);
        console.log(pos.toPrecision(6));
          console.log(neg.toPrecision(6));
          console.log(zer.toPrecision(6));
        


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}