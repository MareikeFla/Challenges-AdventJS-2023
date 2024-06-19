function distributeGifts(packOfGifts, reindeers) {
    let totalWeight = 0;
    let reindeerStrength = 0;
    packOfGifts.forEach(gift => totalWeight += gift.length);
    reindeers.forEach(reindeer => reindeerStrength += reindeer.length * 2);
    return Math.floor(reindeerStrength / totalWeight);
  }

  const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]


console.log(distributeGifts(packOfGifts, reindeers));