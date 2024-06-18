function distributeGifts(weights) {
  const result = new Array(weights.length).fill([]).map(() => []);
  const directions = [
    [-1, 0], // top
    [1, 0], // bottom
    [0, -1], // left
    [0, 1] // right
  ]

  weights.forEach((layer, layerI) => {
    layer.forEach((value, valueI) => {

      const numbers = [value];

      directions.forEach((direction) => {
        const x = layerI + direction[0];
        const y = valueI + direction[1];
        if (x >= 0 && y >= 0 && x < weights.length && y < weights[layerI].length) {
            numbers.push(weights[x][y]);
        }
      })
      const filteredNumbers = numbers.filter(a => a !== null);

      result[layerI].push(Math.round(filteredNumbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0) / filteredNumbers.length));
    })
  });

  return result;
  }

  const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
  ]
  
  console.log(distributeGifts(input));