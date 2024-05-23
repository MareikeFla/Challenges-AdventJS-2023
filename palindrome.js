function checkPalindrome(word1, word2) {
    return word1 === word2;
}

function getIndexsForPalindrome(word) {

    const reverseWord = Array.from(word).reverse().join("").toLocaleLowerCase();
    const ourWord = word.toLocaleLowerCase();
    const isPalindrome = checkPalindrome(ourWord, reverseWord);
    
    if (isPalindrome) {
        return [];
    }

    const diff = [];

    for (let i = 0; i < ourWord.length; i++) {
        if (ourWord[i] !== reverseWord[i]) {
            diff.push(i);
        }
    }

    let diffCharsInWord = new Set(ourWord).size;

    return [ourWord, reverseWord, diff, diffCharsInWord, ourWord[diff[0]], ourWord[diff[1]], ourWord[diff[2]], ourWord[diff[3]]];
  }


const a = 'anna' // []          diff 0  
const b = 'abab' // [0, 1]      diff 4 chars 2 [ 0, 1, 2, 3 ]
const c = 'abac' // null        diff 4 chars 3 [ 0, 1, 2, 3 ]
const d = 'aaaaaaaa' // []      diff 0
const e = 'aaababa' // [1, 3]   diff 2 chars 2 [ 1, 5 ]
const f = 'caababa' // null     diff 4 chars 3 [ 0, 1, 5, 6 ]
const g = "Regallagre" //       diff 4 chars 6 [ 0, 1, 8, 9 ]

console.log(getIndexsForPalindrome(e));