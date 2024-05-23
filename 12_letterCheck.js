// https://adventjs.dev/en/challenges/2023/12

function checkIsValidCopy(original, copy) {

    if (original.length !== copy.length) {
        return false;
    }

    const characterValidation = [];

        for (let i = 0; i < original.length; i++) {
            const oChar = original[i];
            const cChar = copy[i];
            const chain = [oChar, oChar.toLowerCase(), "#", "+", ":", ".", " "];
            const oIndex = chain.lastIndexOf(oChar);
            const cIndex = chain.lastIndexOf(cChar);
            characterValidation.push(oIndex <= cIndex);
            
        }
    return !characterValidation.includes(false)
  }

// original:  'Santa Claus'
// 1st copy:  'santa cla#s'
// 2nd copy:  'sa#t# cl#+s'
// 3rd copy:  'sa+## c#+:s'
// 4th copy:  's#++. c+:.s'
// 5th copy:  's#+:. c:. s'
 console.log(checkIsValidCopy('Santa Claus', 's#++. c+:.s'))
 
