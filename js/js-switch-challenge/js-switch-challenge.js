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

switch (true) {
  case parent1 === "brown" && parent2 === "brown":
  case parent2 === "brown" && parent1 === "brown":
    console.log(
      "Your eye colours are brown and brown, the chances of your child having brown eyes is 75%, green is 18.75% and blue is 6.25%"
    );
    break;
  case parent1 === "green" && parent2 === "brown":
  case parent2 === "green" && parent1 === "brown":
    console.log(
      "Your eye colours are green and brown, the chances of your child having brown eyes is 50%, green is 37.5% and blue is 12.5%"
    );
    break;
  case parent1 === "blue" && parent2 === "brown":
  case parent2 === "blue" && parent1 === "brown":
    console.log(
      "Your eye colours are blue and brown, the chances of your child having brown eyes is 50%, green is 0% and blue is 50%"
    );
    break;
  case parent1 === "green" && parent2 === "green":
  case parent2 === "green" && parent1 === "green":
    console.log(
      "Your eye colours are green and green, the chances of your child having brown eyes is less than 1%, green is 75% and blue is 25%"
    );
    break;
  case parent1 === "green" && parent2 === "blue":
  case parent2 === "green" && parent1 === "blue":
    console.log(
      "Your eye colours are green and blue, the chances of your child having brown eyes is 0%, green is 50% and blue is 50%"
    );
    break;
  case parent1 === "blue" && parent2 === "blue":
  case parent2 === "blue" && parent1 === "blue":
    console.log(
      "Your eye colours are blue and blue, the chances of your child having brown eyes is 0%, green is 1% and blue is 99%"
    );
    break;
}


