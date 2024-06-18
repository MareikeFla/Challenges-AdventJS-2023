// https://adventjs.dev/en/challenges/2023/8

function organizeGifts(gifts) {
    const groups = gifts.match(/\d+[a-z]/g);
    let result = [];
    groups.forEach((group) => {
        const number = Number(group.slice(0, group.length -1 ));
        const gift = group.slice(-1);
        let pallets = Math.trunc(number / 50);
        let boxes = Math.trunc((number - (pallets * 50)) / 10);
        let bag = Math.trunc(number - (pallets * 50) - (boxes * 10));
        let bagString = "";
        for (let int = 0; int < pallets; int++) {
            result.push(`[${gift}]`)
        }
        for (let int = 0; int < boxes; int++) {
            result.push(`{${gift}}`)
        }
        for (let int = 0; int < bag; int++) {
            bagString += gift
        }
        if (bag > 0) {
            bagString = "(" + bagString + ")";
            result.push(bagString);
        }
    })
    return result.join("");
  }

console.log(organizeGifts('76a11b'))
// `[a]{a}{a}(aaaaaa){b}(b)`