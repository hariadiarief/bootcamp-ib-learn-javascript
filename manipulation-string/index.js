console.log("Manipulation : String")



//Level 4 and 5 
const immutableA = "You can't change this sentence!";
const immutableB = "You alse can't this!";

const immutableC = immutableA + " " + immutableB;

const immutableD = `${immutableA} ${immutableB}`

console.log("I concant this with immutableA + \" \" +. and the result is : ", immutableC);
console.log("I also concant this, but using another way, and the result stil same : ", immutableD);



//Level 6 and 7
var name = "masagus Hariadi " + "arief";
var upper = name.toUpperCase()
var lower = name.toLowerCase()

var toTitleCase = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};

console.log("This My Name, and I use concatination : " + name)
console.log("I use upper hire : ", upper)
console.log("I use lowe hire", lower)
console.log(toTitleCase(name))