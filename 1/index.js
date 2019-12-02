const fs = require('fs');
const data = fs.readFileSync(__dirname + '/input.txt').toString().split('\n').map(i => parseInt(i))

//part 1
const calcFuel = (fuel) => {return Math.max(Math.floor(fuel / 3) - 2, 0)};
let answer = data.map(i => calcFuel(i)).reduce((prev, cur) => prev + cur);
console.log(answer);
//part 2
const calcFuelPartTwo = (fuelLevel, totalFuel = []) => {
    if (fuelLevel <= 0) {
        return totalFuel.reduce((prev, cur) => prev + cur);
    }
    let newFuel = calcFuel(fuelLevel);
    totalFuel.push(newFuel);
    return calcFuelPartTwo(newFuel, totalFuel);
}

const main = () => {
    let normalFuel = data.map(i => calcFuel(i)).reduce((prev, cur) => prev + cur);
    let addedFuel = data.map(fuel => calcFuelPartTwo(fuel)).reduce((prev, cur) => prev + cur);    
    return addedFuel;
}

console.log(`Part two answer: ${main()}`);
