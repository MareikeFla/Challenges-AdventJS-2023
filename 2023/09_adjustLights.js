// https://adventjs.dev/en/challenges/2023/9

function adjustLights (lights) {

    function check(array, startValue){
        let misMatches = 0;
        array.forEach((value, i) => {
            if (i % 2 ===0) {
                value !== startValue && misMatches++;
            } else {
                value === startValue && misMatches++;
            }
        })
        return misMatches
    }

    const a = check(lights, '🟢');
    const b = check(lights, '🔴');

    return Math.min(a, b);
  }

  const a = ['🟢', '🔴', '🟢', '🟢', '🟢'];
// -> 1 (you change the fourth light to 🔴)
const b = ['🔴', '🔴', '🟢', '🟢', '🔴']; 
// -> 2 (you change the second light to 🟢 and the third to 🔴)

const c = ['🟢', '🔴', '🟢', '🔴', '🟢'];
// -> 0 (they are already alternating)

const d = ['🔴', '🔴', '🔴'];
// -> 1 (you change the second light to 🟢)

console.log(adjustLights(a));