function generateUniqueNumbers() {
    let count = 0;
    let arr = [];
    while (count < 10) {
        const randomNumber = Math.floor(Math.random() * 16);
        if (!arr.includes(randomNumber)) { 
            arr.push(randomNumber);
            count++;
        }
    }
    return arr;
}
console.log(generateUniqueNumbers());

function generateNumbers(n,r) { 
    let arr = [];
    let i = 0;
    while (i < n) { 
        arr.push(Math.floor(Math.random() * (r + 1)));
        i++;
    }
    return arr;
}
console.log(generateNumbers(10, 20));

function generateNumbers1(n,r,isUnique) { 
    if (isUnique) {
        let count = 0;
        let arr = [];
        while (count < n) {
            const randomNumber = Math.floor(Math.random() * (r + 1));
            if (!arr.includes(randomNumber)) {
                arr.push(randomNumber);
                count++;
            }
        }
        return arr;
    }
    else return generateNumbers(n,r);
}
console.log(generateNumbers1(10, 20, true));
console.log(generateNumbers1(10, 20, false));