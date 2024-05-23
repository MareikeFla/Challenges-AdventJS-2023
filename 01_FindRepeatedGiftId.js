// https://adventjs.dev/challenges/2023/1

function findFirstRepeated(gifts) {
    let result = -1;
    let currentLastIndex = gifts.length;

    gifts.forEach((id) => {
      const isMultipleId = gifts.filter(gift => gift === id ).length > 1;
      const lastIndex = gifts.findLastIndex(gift => gift === id);

      if (isMultipleId && lastIndex < currentLastIndex ) {
          result = id;
          currentLastIndex = lastIndex;
      }
  
    })
    return result;
  }

const giftIds = [2, 1, 3, 5, 3, 2] // 3
const giftIds2 = [1, 2, 3, 4] // -1
const giftIds3 = [5, 1, 5, 1] // 5

console.log(findFirstRepeated(giftIds))