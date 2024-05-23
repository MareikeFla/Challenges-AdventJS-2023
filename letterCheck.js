// 
// The characters from A to Z degrade from capital letters to lower-case letters (A-Z ⇒ a-z)
// Letters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒ " "
// Once the letters have degraded into the symbols, they can continue to degrade.
// Note that the last one is a blank space, not an empty character.
// Characters that are not letters (like digits) do not degrade.
// 

// checkIsValidCopy(
//     'Santa Claus is coming',
//     'sa#ta Cl#us i+ comin#'
//   ) // true

//   checkIsValidCopy(
//     's#nta Cla#s is coming',
//     'p#nt: cla#s #s c+min#'
//   ) // false (due to the initial p)
//   checkIsValidCopy('Santa Claus', 's#+:. c:. s') // true
//   checkIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (there is a # where it shouldn't be)
//   

// original:  'Santa Claus'
// 1st copy:  'santa cla#s'
// 2nd copy:  'sa#t# cl#+s'
// 3rd copy:  'sa+## c#+:s'
// 4th copy:  's#++. c+:.s'
// 5th copy:  's#+:. c:. s'

// Therefore s#+:. c+:++ is a valid copy of Santa Claus. And, as you see, the degradation of the letters does not occur in a specific order, it is random.



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

 console.log(checkIsValidCopy('s#+:. c:. s', 'sa+## c#+:s'))
 
