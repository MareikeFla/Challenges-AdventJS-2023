// https://adventjs.dev/en/challenges/2023/14

function maxGifts(houses) {
    if (houses.length === 0) return 0;
    if (houses. length === 1) return houses[0];

    let chain = new Array(houses.length).fill(0);
    chain[0] = houses[0];
    chain[1] = Math.max(houses[0], houses[1]);

    for (let i = 2; i < houses.length; i++) {
        chain[i] = Math.max(chain[i - 1], houses[i] + chain[i - 2]);
    }

    return chain[houses.length - 1];

  }



  const a =[2, 4, 2] // 4 (4)
  const b =[5, 1, 1, 5] // 10 (5 + 5)
  const c =[4, 1, 1, 4, 2, 1] // 9 (4 + 4 + 1)
  const d =[1, 3, 1, 3, 100] // 103 (3 + 100)

  console.log(maxGifts(a));