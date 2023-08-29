typeof 15; // Prediction: number
typeof 5.5; // Prediction: number
typeof NaN; // Prediction: NaN
typeof "hello"; // Prediction: string
typeof true; // Prediction: boolean
typeof (1 != 2); // Prediction: boolean
"hamburger" + "s"; // Prediction: hamburgers
"hamburgers" - "s"; // Prediction: NaN
"1" + "3"; // Prediction: 13
"1" - "3"; // Prediction: NaN
"johnny" + 5; // Prediction: johnny5
"johnny" - 5; // Prediction: NaN
99 * "luftbaloons"; // Prediction: NaN

console.log("hamburger" + "s");
console.log(typeof ("hamburger" + "s"));
console.log("hamburgers" - "s");
console.log(typeof ("hamburgers" - "s"));
console.log("1" + "3");
console.log(typeof ("1" + "3"));
console.log("1" - "3");
console.log(typeof ("1" - "3"));
console.log("johnny" + 5);
console.log(typeof ("johnny" + 5));
console.log("johnny" - 5);
console.log(typeof ("johnny" - 5));
console.log(99 * "luftbaloons");
console.log(typeof (99 * "luftbaloons"));