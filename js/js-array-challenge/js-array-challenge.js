const hobbies = ['reading', 'movie', 'walking'];
console.log(hobbies[0]);
const firstHobby = hobbies.shift();
const length = hobbies.length;
hobbies.push('gaming');
console.log(hobbies[hobbies.length - 1]);
const joinedHobbies = hobbies.join(',');
console.log(`My hobbies are: ${joinedHobbies}`);


const groceries = ['apple', 'egg', 'milk', 'tomato', 'corn'];
console.log(groceries.join('|'));
