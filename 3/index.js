const fs = require('fs');
const initialData = fs.readFileSync('input.txt').toString().split('\n');
const set1 = initialData[0].split(',');
const set2 = initialData[1].split(',');
console.log(set2)

const genCoords = async (dataset) => {
    let currentx = 0;
    let currenty = 0;
    let coords = [];

    for (let i = 0; i < dataset.length; i++) {
        let numchange = dataset[i].slice(1);
        let instr = dataset[i].slice(0, 1);
        if (instr === 'R') {
            currentx += parseInt(numchange);
            console.log(`Moving right by ${parseInt(numchange)} Current coords: x: ${currentx}, y: ${currenty}`)
            coords.push([currentx, currenty]);
        }
        if (instr === 'L') {
            currentx -= parseInt(numchange);
            console.log(`Moving left by ${parseInt(numchange)} Current coords: x: ${currentx}, y: ${currenty}`)
            coords.push([currentx, currenty]);
        }
        if (instr === 'D') {
            currenty -= parseInt(numchange);
            console.log(`Moving Down by ${parseInt(numchange)} Current coords: x: ${currentx}, y: ${currenty}`)
            coords.push([currentx, currenty]);
        }
        if (instr === 'U') {
            currenty += parseInt(numchange);
            console.log(`Moving up by ${parseInt(numchange)} Current coords: x: ${currentx}, y: ${currenty}`)
            coords.push([currentx, currenty]);
        }
    }
    return coords;
}

const findIntersections = async () => {
    let set1Coords = await genCoords(set1);
    let set2Coords = await genCoords(set2);
    console.log(set1Coords)
    console.log(set2Coords)
    let intersections = await set2Coords.filter(coords => {set1Coords.includes(coords);});
    console.log(intersections)
}

findIntersections();