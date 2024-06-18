function autonomousDrive(store, movements) {
    let grid = store.map((floor) => floor.split(''));
    let currentFloorIndex = 0;
    let currentPositionIndex = 0;

    // Find the initial position of "!"
    for (let i = 0; i < grid.length; i++) {
        const position = grid[i].indexOf("!");
        if (position !== -1) {
            currentFloorIndex = i;
            currentPositionIndex = position;
            break;
        }
    }

    // Clear the initial position
    grid[currentFloorIndex][currentPositionIndex] = ".";

    const movementDirections = {
        "R": [0, 1],
        "L": [0, -1],
        "U": [-1, 0],
        "D": [1, 0],
    }

    // Process each movement
    for (const movement of movements) {
        const [floorMovement, positionMovement] = movementDirections[movement];
        const newFloorIndex = currentFloorIndex + floorMovement;
        const newPositionIndex = currentPositionIndex + positionMovement;

        if (
            newFloorIndex >= 0 && newFloorIndex < grid.length &&
            newPositionIndex >= 0 && newPositionIndex < grid[newFloorIndex].length && 
            grid[newFloorIndex][newPositionIndex] === "."
        ) {
            currentFloorIndex = newFloorIndex;
            currentPositionIndex = newPositionIndex;
        }
    }

    // Mark the final position with "!"
    grid[currentFloorIndex][currentPositionIndex] = "!";

    // Convert the grid back to the original store format
    return grid.map((floor) => floor.join(''));
}



// Test the function

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
  ".......",
  "...*!*."
]
*/
