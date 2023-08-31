function sum(n) { 
    let sum = 0;
    for (let i = 1; i <= n;i++) { 
        sum += i;
    }
    return sum;
}
console.log(sum(10));

function sum1(n) { 
    return (1+n)*n/2;
}
console.log(sum(10));

function shoppingList(list) { 
    for (let i = 1; i <= list.length; i++) { 
        console.log(`${i}. ${list[i - 1]}`);
    }
}

const list = [
  "milk",
  "watermelon",
  "eggs",
  "soap",
  "butter",
  "apples",
  "ice-cream",
];
shoppingList(list);

const str = 'helloworld';
function capitalizingOddPositionedLetters(str) { 
    let newStr = '';
    for (let i = 0; i < str.length;i++) { 
        if (i % 2===0) {
            newStr += str.charAt(i).toUpperCase();
        } else { 
            newStr += str.charAt(i);
        }
    }
    return newStr;
}
console.log(capitalizingOddPositionedLetters(str));

function capitalizingAndIncrementLetters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
        newStr += str.charAt(i).toUpperCase();
    } else {
        const newLetter = String.fromCharCode(str.charCodeAt(i) + 1);
        newStr += newLetter;
    }
  }
  return newStr;
}
console.log(capitalizingAndIncrementLetters(str));

const str1 = 'helloworld';
function removeVowels(str) { 
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
    for (let i = 0; i < str.length;i++) { 
        if (!vowels.includes(str.charAt(i))) { 
            newStr += str.charAt(i);
        }
    }
    return newStr;
}
function removeVowelsNew(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    const condition = ['l', 'm', 'r'];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str.charAt(i))||condition.includes(str.charAt(i+1))) {
          newStr += str.charAt(i);
      } 
  }
  return newStr;
}
console.log(removeVowels(str1));
console.log(removeVowelsNew(str1));



