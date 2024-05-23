function createChristmasTree(ornaments, height) {

    const christmasTree = [];
    const ornamentsInfo = {count: 0, ornaments: Array.from(ornaments), numberOfOrnamnts: ornaments.length };

    for (let i = 0; i <= height; i++) {

        // For each row create an array with whitespace at the begining
        if (i < height) {

            const whiteSpace = height - i - 1;
            const ornamentsInRow = 2 * i + 1;
            christmasTree[i] = Array(whiteSpace);
            const treeRow = christmasTree[i];
            treeRow.fill(" ");
    
            // Add the right amount of ornaments in every row and a line breack at the end
            for (let j = 0; j <= ornamentsInRow; j++) {
                if (j === ornamentsInRow) {
                    treeRow.push("\n")
                } else if (j % 2 === 0) {
                    const {count, ornaments, numberOfOrnamnts} = ornamentsInfo;
                    treeRow.push(ornaments[count % numberOfOrnamnts]);
                    ornamentsInfo.count++;
                } else {
                    treeRow.push(" ")
                }
            }

        // Add trunk in the last row    
        } else {
            christmasTree[i] = Array(i - 1);
            const trunk = christmasTree[i];
            trunk.fill(" ");
            trunk.push("|");
            trunk.push("\n");
        }

    }
    // At the end we flat our array and join everything and the tree will rise.
    return christmasTree.flat().join("")
  }

    const foo = createChristmasTree("$€$", 4);

  console.log(foo);

//                i  char sb sf  
//    1           0 = 1 + 0 + 3    1 + 3    4
//   1 1          1 = 2 + 1 + 2    3 + 2    5
//  1 1 1         2 = 3 + 2 + 1    5 + 1    6
// 1 1 1 1        3 = 4 + 3 + 0    7 + 0    7

//    |           4 = 1 + 0 + 3    1 + 3    4

// TREE 
// total height = height + 1

// TOP
// chars = i + 1
// space between (sb) = i
// space front (sf) = height - 1 - i
// characters after space front = 2 * i + 1
// total length = height + i

// BOTTOM 
// index is always = height
// chars = 1
// space between (sb) = 0
// space front (sf) = height -1
// total length = height 