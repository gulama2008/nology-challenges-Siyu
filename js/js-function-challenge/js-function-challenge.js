function moonOrbits(days) { 
    return days / 27;
}
console.log(moonOrbits(54));

function circleArea(radius) { 
    return Math.PI * (radius ** 2);
}
console.log(circleArea(10));

function circlePerimeter(radius) { 
    return 2 * Math.PI * radius;
}
console.log(circlePerimeter(10));

function ageInDays(age) { 
    return age * 365;
}
console.log(ageInDays(32));

function ageInSeconds(age) { 
    return age * 365 * 24 * 60 * 60;
}
console.log(ageInSeconds(32));

function remainder(num1, num2) { 
    return num1 % num2;
}
console.log(remainder(1, 3));

function totalPoints(pointer2,pointer3) { 
    return pointer2 * 2 + pointer3 * 3;
}
console.log(totalPoints(5, 10));

function lessThan100(num1,num2) { 
    return num1 + num2 < 100;
}
console.log(lessThan100(20, 50));
console.log(lessThan100(50, 60));

