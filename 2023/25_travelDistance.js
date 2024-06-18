function travelDistance(map) {
    const toArrays = map.split("\n");
    const matrix = toArrays.map(a => [...a])
    const children = Math.max(...matrix.flat().filter((a)=> a !== "." && a !== "S").map(b => Number(b)));
    const targets = {};
    
    
let result = 0;
    // Set start position and children positions
    let position = [0, 0];
    matrix.forEach((floor, i) => {
        floor.forEach((element, j) => {
            if (element === ".") return;
            if (element === "S") {
                position = [i, j]
            }
            else {
                targets[element] = [i, j];
            }
        })

    });

    for (let currentChild = 1; currentChild <= children; currentChild++){
        let count = 0;
        count += Math.abs(position[0] - targets[currentChild][0]);
        count += Math.abs(position[1] - targets[currentChild][1]);
        position = targets[currentChild];
        result += count;

    }


    return result;
  } 



const map = `.....1....
..S.......
..........
....3.....
......2...`

  console.log(travelDistance(map));