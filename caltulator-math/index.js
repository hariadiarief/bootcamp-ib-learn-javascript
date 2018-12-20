//Level 14 and 16
/*------With Function  -----------------------------------------------------------------------------------------------------------*/
function add(x, y) {
    return (x + y)
}

function substract(x, y) {
    return (x - y)
}

function multiple(x, y) {
    return (x * y)
}

function devide(x, y) {
    return (x / y)
}

function modulo(x, y) {
    return (x % y)
}


console.log(add(2, 1))
console.log(substract(100, 75))
console.log(devide(90, 3))
console.log(modulo(11 % 3))
console.log(add(substract(20, 5), devide(100, 2)))


//Level 14
/*------With Function inside object-----------------------------------------------------------------------------------------------------------*/

const math = { //object
    add: (x, y) => x + y, //function ->
    substract: (x, y) => x - y,
    devide: (x, y) => x / y,
    multiple: (x, y) => x * y,
    modulo: (x, y) => x % y

}

console.log(math.add(2, 3));