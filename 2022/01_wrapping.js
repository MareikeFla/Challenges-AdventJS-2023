function wrapping(gifts) {
    const wrappedGifts = [];

    gifts.forEach(gift => {
        const wrappedGift = "".padStart( gift.length + 2, "*") + "\n" + "*" + gift + "*" + "\n" + "".padStart( gift.length + 2, "*");
        wrappedGifts.push(wrappedGift);
    
    })
    return wrappedGifts;
  }
  

console.log(wrapping(['cat', 'game', 'socks']));