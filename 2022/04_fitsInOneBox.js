function fitsInOneBox(boxes) {
    let fits = [];
    boxes.sort((a, b) => {
        return b.l - a.l;
    })
    boxes.forEach((box, i) => {
        if (i > 0) {
            const {l: currentL, w: currentW, h: currentH} = box;
            const {l: prevL, w: prevW, h: prevH} = boxes[i - 1];
            if (currentL < prevL && currentW < prevW && currentH < prevH) {
                fits.push(true);
            } else {
                fits.push(false);
            }          
        }

    })
    console.log(fits);
    return !fits.includes(false);

  }

const boxes = [
    { l: 1, w: 4, h: 1 },
    { l: 3, w: 4, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]

  console.log(fitsInOneBox(boxes));