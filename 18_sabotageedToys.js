
function revealSabotage(store) {
    const result = new Array(store.length).fill([]).map(() => []);

    store.forEach((floor, floorI) => {
        const isFirstFloor = floorI === 0;
        const isLastFloor = floorI === store.length - 1;

        floor.forEach((element, elementI) => {
            const isFirstElement = elementI === 0;
            const isLastElement = elementI === store[floorI].length - 1;
            const isSabotagedToy = element === "*";
            const suroundingElements = [];

            if (isSabotagedToy) {
                result[floorI].push(element);
            } else {
                if (!isFirstFloor) {
                    suroundingElements.push(store[floorI - 1][elementI]);
                    !isFirstElement && suroundingElements.push(store[floorI - 1][elementI - 1]);
                    !isLastElement && suroundingElements.push(store[floorI - 1][elementI + 1]);
                }
                if (!isLastFloor) {
                    suroundingElements.push(store[floorI + 1][elementI]);
                    !isFirstElement && suroundingElements.push(store[floorI + 1][elementI - 1]);
                    !isLastElement && suroundingElements.push(store[floorI + 1][elementI + 1]);
                }
                !isFirstElement && suroundingElements.push(store[floorI][elementI - 1]);
                !isLastElement && suroundingElements.push(store[floorI][elementI + 1]);
                const newElement = suroundingElements.filter((element) => element === "*").length || " ";
                result[floorI].push(newElement.toString());
            }

        })
    });

    return result;
  }

  const a = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
  ];
  console.log(revealSabotage(a));