console.log("Calculator Shape");

const calculateSquareArea = side => {
    return side ** 2
};

console.log(`Square area : ${calculateSquareArea(4)}`)

const calculateCuboid = (legth, width, height) => {
    return legth * width * height
}

console.log(`Cuboid Volume is : ${calculateCuboid(4,3,5)}`)