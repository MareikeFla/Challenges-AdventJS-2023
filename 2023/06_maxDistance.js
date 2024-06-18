// https://adventjs.dev/en/challenges/2023/6

function maxDistance(movements) {
    const array = Array.from(movements);
    let cL = array.filter((dir) => dir === "<").length;
    let cR = array.filter((dir) => dir === ">").length;
    const cJ = array.filter((dir) => dir === "*").length;
    cL >= cR ? cL += cJ : cR += cJ;
    return Math.abs(cL - cR)
  }

const movements = '>>*<'
 // -> 2

const movements2 = '<<<>'
console.log(result2) // -> 2

const movements3 = '>***>'
// -> 5

console.log(maxDistance(movements))