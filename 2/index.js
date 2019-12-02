const fs = require('fs');
const data = fs.readFileSync(__dirname + '/input.txt').toString().split(',').map(i => parseInt(i))

let output = data
//console.log(output)
const comp = (data) => {
    for (let i  = 0; i < data.length; ++i) {
        //console.log(data[i])
        //console.log(i)
        if (data[i] == 1 || data[i] == 2) {
            processOpCode(data.slice(i, i+4));
            i = i+3
        } else if (data[i] == 99 ) {
            i = data.length
        }
    }
    return (output);
}

const processOpCode = (codeArr) => {
    console.log(codeArr)
    if (codeArr[0] == 1) {
        output[codeArr[3]] = data[codeArr[1]] + data[codeArr[2]];
        console.log(output)
    } else if (codeArr[0] == 2) {
        output[codeArr[3]] = data[codeArr[1]] * data[codeArr[2]];
    }
}

//processOpCode([1, 1, 1, 4])

console.log(comp(data))