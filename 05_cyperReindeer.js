// https://adventjs.dev/challenges/2023/5

function cyberReindeer(road, time) {
    let ourRoad = road;
    let hiddenSymbol = "."
    const progress = [road];
    for (let count = 1; count < time; count++) {
        const currentPosition = ourRoad.indexOf("S");
        if (count === 5) {
            ourRoad = ourRoad.replaceAll("|", "*")
        }
        if (ourRoad[currentPosition + 1] !== "|") {
            const nextHiddenSymbol = ourRoad[currentPosition + 1];
            ourRoad = ourRoad.substring(0, currentPosition) + hiddenSymbol + "S" + ourRoad.substring(currentPosition + 2)
            hiddenSymbol = nextHiddenSymbol;
        }
        progress.push(ourRoad)
    }
    return progress
  }

const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)
console.log(result);
/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
