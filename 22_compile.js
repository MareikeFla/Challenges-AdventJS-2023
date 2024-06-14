function compile(code) {
    const sequence = code.split("");
    let returnPoints = {};
    let counter = 0;
    let index = 0;

    while (index < sequence.length) {
        const element = sequence[index];

        switch (element) {
            case "+":
                counter++;
                index++;
                break;
            case "-":
                counter--;
                index++;
                break;
            case "*":
                counter *= 2;
                index++;
                break;
            case "%":
                returnPoints[index] = {visited: false, setTo: index + 1}
                index++;
                break;
            case "<":
                const lastReturn = sequence.lastIndexOf("%", index);
                if (lastReturn >= 0 && returnPoints[lastReturn] && !returnPoints[lastReturn].visited) {
                    index = returnPoints[lastReturn].setTo;
                    returnPoints[lastReturn].visited = true;
                } else {
                    index++;
                }
                break;
            case "¿":
                if (counter <= 0) {
                    index = sequence.indexOf("?", index);
                } else {
                    index++;
                }
                break;
            case "?":
                index++;
                break;
        }
    }

    return counter;
  }



console.log(compile('++%++<'));

//  +: Increments the counter value by 1.
//  *: Multiplies the counter value by 2.
//  -: Subtracts 1 from the counter value.
//  %: Mark a return point. Does not modify the counter.
//  <: Go back once to the last instruction with the % symbol it has seen. If there is no previous %, it does nothing.
//  ¿: Starts a conditional block that executes if the counter is greater than 0.
//  ?: Ends a conditional block.
//
//compile('++*-') // 3
// (1 + 1) * 2 - 1 = 3

//compile('++%++<') // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

//compile('++<--') // 0
// 1 + 1 - 1 - 1 = 0

//compile('++¿+?') // 3
// 1 + 1 + 1 = 3

//compile('--¿+++?') // -2
// - 1 - 1 = -2