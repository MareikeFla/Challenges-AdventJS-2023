function transformTree(tree) {
    const result = [];
    const test = {value: 1, left: 1}

    tree.forEach((value) => {
        const object = {value};
        if (value !== null) {
            object.left = {};
            object.right = {};
        }
        result.push(object);
    })

 
      //  const left = 2 * i + 1;
       // const right = 2 * i + 2;

        
    return result
  }

console.log(transformTree([3, 1, 0, 8, 12, null, 1]));