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

// Complete the poisonousPlants function below.
function poisonousPlants(p) {
let days = 0;
    let len = p.length;
    let stacks = [[p[0]]];
    let curStack = stacks[0];
    let last = p[0];
    
    for(let i = 1; i < len; i += 1) {
        let curItem = p[i];
        if(curItem > last){
            const newStack = [curItem];
            curStack = newStack;
            stacks.push(newStack);
        }
        else {
            curStack.push(curItem);
        }
        last = curItem;
    }
    
    //console.log(stacks);
    
    let changed = true;
    while(changed) {
        let sLen = stacks.length;
        changed = false;
        
        for(let i = sLen - 1; i > 0; i -= 1) {
            const stack = stacks[i];
            const leftStack = stacks[i-1];
            
            if(stack[0] > leftStack[leftStack.length - 1]) {
                changed = true;
                stack.splice(0,1);
                if(!stack.length) {
                    stacks.splice(i,1);
                }
            }
            
        }
        if(changed){
            //console.log(stacks);
            days += 1;
        }
    }
    
    return days;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p);

    ws.write(result + "\n");

    ws.end();
}
