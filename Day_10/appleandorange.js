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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
 var count1=0;
        var count2=0;
        for(var i=0;i<apples.length;i++)
        {
            apples[i]=apples[i]+a;
        }
        for(var j=0;j<oranges.length;j++)
        {
            oranges[j]=oranges[j]+b;
        }
        for(var k=0;k<apples.length;k++)
        {
            if(apples[k]>=s&&apples[k]<=t)
            {
                count1++;
            }
        }
         for(var l=0;l<oranges.length;l++)
        {
            if(oranges[l]>=s&&oranges[l]<=t)
            {
                count2++;
            }
        }
       console.log(count1);
        console.log(count2);

}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
