function processData(input) {
    //Enter your code here
    
    const queries = input.split('\n');
    const numberOfElements = parseInt(queries[0]);
    const heap = [];
    for (var i = 0; i < numberOfElements; i++) {
        if (queries[i + 1].length > 1) {
            const query = queries[i + 1].split(" ");
            if (query[0] === "1") {
                heap.push(parseInt(query[1]));
            } else if (query[0] === "2") {
                heap.splice(heap.indexOf(parseInt(query[1])), 1);
            }
        } else {
            var min = heap[0];
            if (heap.length === 1) {
                console.log(min);
            } else {
                for (var j = 0; j < heap.length; j++) {
                    if(heap[j] < min){
                        min = heap[j];
                    }
                }
                console.log(min);
            }
        }
    }
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});