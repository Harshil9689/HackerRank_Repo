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
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
     * Write your code here.
     */
    var a=s.split(":");
        var s3=a[2];
         var s1=a[0];
            var s2=a[1];
        var rep="";
        if(s3.includes("PM")&&parseInt(s1)<12)
        {
            s1=parseInt(s1)+12+"";
            var index=s3.indexOf("P");
            s3=s3.substring(0,index);
        }
        if(s3.includes("AM")&&parseInt(s1)>=12)
        {
            var zer="0";
            rep=parseInt(s1)-12+"";
            s1=zer+rep;
            var index=s3.indexOf("A");
            s3=s3.substring(0,index);
            
        }
        if(s3.includes("AM"))
        {
           var index=s3.indexOf("A");
            s3=s3.substring(0,index); 
        }
        if(s3.includes("PM"))
        {
           var index=s3.indexOf("P");
            s3=s3.substring(0,index); 
        }
    
      
        s=s1+":"+s2+":"+s3;
        
        
        return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
