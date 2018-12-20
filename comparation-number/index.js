//level 10 and 11
const value = 81;

if (value > 80 && value <= 100) {
    console.log("Grade A")
} else if (value > 60 && value <= 80) {
    console.log("Grade B")
} else if (value > 40 && value <= 60) {
    console.log("Grade C")
} else if (value > 20 && value <= 40) {
    console.log("Grade D")
} else if (value > 0 && value <= 20) {
    console.log("Grade E")
} else {
    console.log("Wrong Value")
}

//level 11 and 12
function lower(x, y) {
    var isLower = "";
    x > y ? isLower = "true" : isLower = "flase";
    console.log(isLower)
}

lower(10, 5);

//level 13
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function generateRandomNumber(min_value , max_value) {
    
    let random_number = Math.random() * (max-min) + min;
     return Math.floor(random_number);
 }


console.log(getRandomArbitrary(1, 3))