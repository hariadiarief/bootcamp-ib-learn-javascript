console.log("Manipulation Number")

var numberA = 2;
var numberB = 4;
var numberC = 5;
var stringA = "Adi";
var numberD = -10;
var numberE = 10000
var isBigger = false;
var popValue = null;
var myArray = [1, 2, 3, 4, 5];
var autoArray = [];


//Level 1
console.log("Number A:", numberA)
console.log("Number B:", numberB)
console.log("Number B:", numberC)

console.log("Number A + number B = ", numberA + numberB)
console.log("Number C - number A = ", numberC - numberA)
console.log("Number C * number B = ", numberC * numberB)
console.log("Number A / number B = ", numberA / numberB)
console.log("Number C % number A = ", numberC % numberA)

//Level 2
stringA += " is a human"
isBigger = numberC > numberA ? true : false
console.log("Is Number C bigger then Number A ?", isBigger)
console


//Level 3
console.log("myArray Before push and pop", myArray)

myArray.push(6)
console.log("I use push hire : ", myArray)

popValue = myArray.pop();
console.log("and now I use pop hire", myArray, "the effect .pop() will removes the last element from an array and returns that element.")
console.log("Last element og myArray is : ", popValue)

myArray.push(["Adi", true])
console.log("Now I added boolean and character into myArray :", myArray)

var i = 0;
while (i < 5) {
    autoArray.push(i);
    i++;
}
console.log("Now I make array with looping : ", autoArray)