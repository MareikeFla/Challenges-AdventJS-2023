// https://adventjs.dev/challenges/2023/2

function manufacture(gifts, materials) {
    const giftList = [];
  
    gifts.forEach((gift) => {
      
      const materialNeeded = Array.from(gift);
      const thingsAvailable = materialNeeded.map((character) => materials.includes(character))
      if (!thingsAvailable.includes(false)) {
        giftList.push(gift);
      }
    })
  
    return giftList;
  }

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

// ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

// ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

// []

console.log(manufacture(gifts1, materials1))