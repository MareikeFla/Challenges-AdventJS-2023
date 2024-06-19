function countHours(year, holidays) {
let extraHours = 0;
holidays.forEach(day => {
    const dateStr = `${year}/${day}`;
    const fullDate = new Date(dateStr);

    if (fullDate.getDay() > 0 && fullDate.getDay() < 6) {
        extraHours += 2;
    }
})

return extraHours;
  }

  



  const year = 1985;
const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']// format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

 // 2 days -> 4 extra hours in the year

console.log(countHours(year, holidays));