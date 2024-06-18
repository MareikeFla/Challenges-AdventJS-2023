// https://adventjs.dev/challenges/2023/4

function decode(message) {
    const array = Array.from(message);
    let result = [[]];
    let depth = 0;
    array.forEach((char) => {
        if (char === "(") {
            depth++;
            result[depth] = [];
        }
        else if (char === ")") {
            const currentLevel = result[depth].reverse();
            const parentLevel = result[depth - 1];
            parentLevel.push(...currentLevel);
            depth--;
        }
        else {
            result[depth].push(char);
        }
    })
    return result[0].join("");
  }

const a = 'hola (odnum)'
// hola mundo

const b = '(olleh) (dlrow)!'
// hello world!

const c = 'sa(u(cla)atn)s'
// santaclaus

console.log(decode(a))