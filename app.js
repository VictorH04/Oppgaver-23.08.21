// Oppgave 1
let myNumber = 1;

// Oppgave 2
let myArray = [1, 2, 3, 4, 5];

// Oppgave 3
let myString = `Min array inneholder dette: ${myArray}`;

// Oppgave 5
console.log("Oppgave 5");
console.log("Hello Word");

// Oppgave 6
console.log("Oppgave 6");
console.log(myString);

// Oppgave 7
// eller /** */

// Oppgave 8
console.log("Oppgave 8");
for (let i = 0; i < myArray.length; myArray++) {
    console.log(myArray);
}

// Oppgave 9 & 10
console.log("Oppgave 9 & 10");
if (myNumber = 1) {
    console.log("Number does not equal 0");
} else {
    console.log("Number is equal 0");
}

// Oppgave 11
console.log("Oppgave 11");
const handleSum = (sum1, sum2) => {
    console.log(sum1 + sum2);
}
handleSum(10, 15);

// Oppgave 12
console.log("Oppgave 12");
const handleAreal = (num1, num2) => {
    console.log(num1 * num2);
}
handleAreal(10, 5);

// Oppgave 13
console.log("Oppgave 13");
const handleVolumeSphere = (r) => {
    console.log(`Volum Sphære: ${4 * Math.PI * r * r * r / 3}`);
}
handleVolumeSphere(5);

// Oppgave 14
console.log("Oppgave 14");
const handleCircleDiameter = (r) => {
    console.log(`Circle diameter: ${2 * r}`);
}
handleCircleDiameter(3);

// Oppgave 15
console.log("Oppgave 15");
const handleCircleCircumference = (diameter) => {
    console.log(`Circle Circumference: ${Math.PI * diameter}`);
}
handleCircleCircumference(3);

// Oppgave 16
console.log("Oppgave 16");
const handleCircleAreal = (r) => {
    console.log(`Circle areal: ${Math.PI * r * 2}`);
}
handleCircleAreal(5);

// Oppgave 17
console.log("Oppgave 17");
const checkNumber = (num) => {
    if (num > 0) {
        console.log('Positive');
    } else if (num < 0) {
        console.log('Negative');
    } else {
        console.log('Number is equal to 0');
    }
}
checkNumber(5);

// Oppgave 18
console.log("Oppgave 18");
const checkWholeNumber = (num1, num2) => {
    (num1 >= 10) ? console.log("True") : console.log("False");
    (num2 >= 10) ? console.log("True") : console.log("False");
}
checkWholeNumber(9, 15);

// Oppgave 19
console.log("Oppgave 19");
const sumArrayIntegers = (int1, int2, int3, int4) => {
    const array = [int1, int2, int3, int4];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    console.log(sum);
}
sumArrayIntegers(1, 2, 3, 4);

// Oppgave 20
console.log("Oppgave 20");
const sumNumbersRange = (min, max) => {
    let sum = 0;
    for (i = min; i < max+1; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNumbersRange(1, 4));