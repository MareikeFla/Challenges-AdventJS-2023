function getStaircasePaths(steps, maxJump) {
    const result = [];

    const numbers = Array.from({ length: maxJump }, (_, i) => i + 1);
    function backtrack(remaining, combination) {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        } else if (remaining < 0) {
            return;
        }

        for (let number of numbers) {
            combination.push(number);
            backtrack(remaining - number, combination);
            combination.pop();
        }
    }

    backtrack(steps, []);
    return result;
}


  console.log(getStaircasePaths(3, 3)) 
  // [[1, 1, 1], [1, 2], [2, 1], [3]]);