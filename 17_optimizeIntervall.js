function optimizeIntervals(intervals) {
    const sortedIntervals = intervals.sort((a , b) => {return a[0] - b[0] })
    const result = [sortedIntervals[0]];

    for (let i = 1; i < sortedIntervals.length; i++) {
        const [[a, b]] = result.slice(-1);
        const [A, B] = sortedIntervals[i];

        if (B > b) {
        
         if (A <= b) {
            result.pop();
            result.push([a, B]);

        }
        else if (A > b) {
            result.push([A, B])

        }} 
    }

    return result;
  }

  console.log(optimizeIntervals([[1, 2], [5, 5], [7, 9], [8, 12], [2, 3]]
  ))
