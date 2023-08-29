2 == "2"; //true
2 === 2; //true
2 === "2"; //false
"2" + 3 == 23; //true "23"==23
"2" + 3 === 5; //false "23"===5
10 % 3; //1
10 % 3 === 1; //true
(100 % 7) % 5; //2
(100 % 7) % 5 !== 0; //true
(100 % 7) % 9 == 2; //true
!(10 % 2); //true !0-->!false-->true
!!!!((10 % 7) % 3); //false !!!!0-->!!!!false-->false
10 % 3 === -1 % 2; //false 1===-1
(892783 != "89278" + 3) == 0; //true 892783!=892783-->false, false==0-->true
true && false; //false
false || true; //true
true || false; //true
true || false; //true
true || false + true; //true
true * false && false + true; //**false/0 1*0 && 0+1-->0&&1-->false/0
10 && 123 && -1 && 3; //3
10 && 123 && 0 && 3; //0
(10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; //0 (10 && 123 && NaN)||0-->0
3 && "Calum" && ("" || 26); //26 3 && "calum" && 26-->26
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //"CatDog" 3 && "Remi" && (null||0||("1" && "CatDog"))-->"CatDog"

console.log(2 == "2");
console.log(2 === 2);
console.log(2 === "2");
console.log("2" + 3 == 23);
console.log("2" + 3 === 5);
console.log(10 % 3);
console.log(10 % 3 === 1);
console.log((100 % 7) % 5);
console.log((100 % 7) % 5 !== 0);
console.log((100 % 7) % 9 == 2);
console.log(!(10 % 2));
console.log(!!!!((10 % 7) % 3));
console.log(10 % 3 === -1 % 2);
console.log((892783 != "89278" + 3) == 0);
console.log(true && false);
console.log(false || true);
console.log(true || false);
console.log(true || false);
console.log(true || false + true);
console.log(true * false && false + true);
console.log(10 && 123 && -1 && 3);
console.log(10 && 123 && 0 && 3);
console.log((10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1);
console.log(3 && "Calum" && ("" || 26));
console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")));
