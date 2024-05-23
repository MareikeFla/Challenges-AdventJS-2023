// https://adventjs.dev/challenges/2023/3

function findNaughtyStep(original , modified ) {
    const difference = original.length - modified.length;
    const diffenrceCase = difference === 0 ? "none" : difference > 0 ? "missing" : "added";
    const originalCharacters = Array.from(original);
    const modifiedCharacters = Array.from(modified);

    switch (diffenrceCase) {
      case "none":
        return "";
      case "missing": 
        modifiedCharacters.forEach((character) => {
            const index = originalCharacters.indexOf(character);
            originalCharacters.splice(index, 1);
        } )
        return originalCharacters[0];
      case "added": 
      originalCharacters.forEach((character) => {
        const index = modifiedCharacters.indexOf(character);
        modifiedCharacters.splice(index, 1);
    } )
    return modifiedCharacters[0];
        
        }
  }

const original1 = 'abcd'
const modified1 = 'abcde'
// 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
// 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
// ''

console.log(findNaughtyStep(original1, modified1))