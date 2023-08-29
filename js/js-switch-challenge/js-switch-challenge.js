let day = 1;
switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Satuaday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
        break;
}

let parent1="blue";
let parent2 = "green";
let brown;
let green;
let blue;

switch (true) {
    case parent1 === "brown" && parent2 === "brown":
        brown = 75;
        green = 18.75;
        blue = 6.25;
        break;
    case parent1 === "green" && parent2 === "brown":
    case parent2 === "green" && parent1 === "brown":
        brown = 50;
        green = 37.5;
        blue = 12.5;
        break;
    case parent1 === "blue" && parent2 === "brown":
    case parent2 === "blue" && parent1 === "brown":
        brown = 50;
        green = 0;
        blue = 50;
        break;
    case parent1 === "green" && parent2 === "green":
        brown = "less than 1";
        green = 75;
        blue = 25;
        break;
    case parent1 === "green" && parent2 === "blue":
    case parent2 === "green" && parent1 === "blue":
        brown = 0;
        green = 50;
        blue = 50;
        break;
    case parent1 === "blue" && parent2 === "blue":
        brown = 0;
        green = 1;
        blue = 99;
        break;
}

console.log(
  `Your eye colours are ${parent1} and ${parent2}, the chances of your child having brown eyes is ${brown}%; green is ${green}% and blue is ${blue}%`
);


