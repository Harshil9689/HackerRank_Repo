'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {

var map=new Map();
         for(var i in arr){
             if(map.get(arr[i])==null)
                 {
                     map.set(arr[i],0);
                 }
             else
                 {
                     var c=map.get(arr[i]);
                     map.set(arr[i],c+1);
                 }
         }
        
        var max=0;
        var result=0;
    var minkey=0;
        for(var [key,value] of map)
        {
           
            if(value>max)
            {
              max=value;
                result=key;
                
            }
            if(value==max&&key<result)
                {
                    result=key;
                }
        }
        return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
