const fs = require('fs');
const initialData = fs.readFileSync(__dirname + '/input.txt').toString().split(',').map(i => parseInt(i))

//console.log(output)
const comp = async (data) => {
    for (let i  = 0; i < data.length; ++i) {
        //console.log(data[i])
        //console.log(i)
        if (data[i] == 1 || data[i] == 2) {
            data = await processOpCode(data.slice(i, i+4));
            i = i+3
        } else if (data[i] == 99 ) {
            i = data.length
        }
    }
    return (data);
}

const processOpCode = (codeArr, data) => {
    //console.log(codeArr)
    if (codeArr[0] == 1) {
        data[codeArr[3]] = data[codeArr[1]] + data[codeArr[2]];
        //console.log(output)
    } else if (codeArr[0] == 2) {
        data[codeArr[3]] = data[codeArr[1]] * data[codeArr[2]];
    }

    return data;
}

//part two
const calculateGravityBoost = async (endResult) => {
    try {
        for (let x = 0; x <= 100; x++) {
            for (let y = 0; y <= 100; y++) {
                console.log(`Trying x: ${x}, y: ${y}`);
                let answer = await comp2(initialData, x, y);
                if (answer[0] === endResult) {
                    console.log(`Output: ${answer[0]} - Noun: ${answer[1]} - Verb: ${answer[2]}`)
                    exit();
                }
            }
        } 
    } catch (e) { throw(e)}
    
}

const comp2 = (initial, noun = 12, verb = 2) => {
    let data = [...initial];
    data[1] = noun;
    data[2] = verb;
    for (let i  = 0; i < data.length; ++i) {
        //console.log(data[i])
        //console.log(i)
        if (data[i] == 1 || data[i] == 2) {
            data = processOpCode(data.slice(i, i+4), data);
            i = i+3
        } else if (data[i] == 99 ) {
            i = data.length
        }
    }
    return (data);
}
const generateRandomNumbers = async (range) => {
    let pairs = [];
    for (let x = 0; x < range; x++) {
        for(let y = 0; y < range; y++) {
            pairs.push([x, y])
        }
    }
    return pairs;
}

calculateGravityBoost(19690720).then(pair => {
    console.log('done')
});