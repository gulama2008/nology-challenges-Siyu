let n = "123";
if (n % 2) {
    console.log("n is odd");
} else if (typeof n == "number" && n % 2 === 0) {
    console.log("n is even");
} else { 
    console.log("Invalid n");
}

let x = 1;
let y = 2;
if (x > y) {
    console.log("x is greater than y");
} else if (x === y) {
    console.log("x is equal to y");
} else { 
    console.log("x is smaller than y");
}

let userInput=null;
if (typeof userInput == "number") {
    console.log(userInput ** 2);
} else if (typeof userInput == "string") {
    console.log(userInput);
} else { 
    console.log("Invalid input");
}