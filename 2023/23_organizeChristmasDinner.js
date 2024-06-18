function organizeChristmasDinner(dishes) {
    dishes.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
      });
    const copyDishes = dishes.map(dish => [...dish])
    copyDishes.forEach(dish => dish.shift());
    const ingridients = copyDishes.flat().sort();

    const result = ingridients.map((ingridient) => [ingridient])

      ingridients.forEach((ingridient) => {
        const ingIndex = result.findIndex((a) => a[0] === ingridient);
   dishes.forEach(dish => {
        if (dish.includes(ingridient)) {
            if (!result[ingIndex].includes(dish[0])){
                result[ingIndex].push(dish[0])

            }
        }
    })
    })

     return result.filter(b => b.length > 2)
   }   
   const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
  ]

  console.log(organizeChristmasDinner(dishes));