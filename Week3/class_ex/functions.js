/* function makeIceCream () {
    console.log("I have made ice cream");
}
makeIceCream();
*/
/*  const makeBananaSplit = function () {
    console.log("I have made banana split");
}
makeBananaSplit ();*/

/*  function getStuff(stuff) {
    console.log("I got " + stuff);
}
getStuff("bread");
getStuff("peanut butter");
getStuff("honey");*/

/* function addStuff(itemA, itemB){
    return itemA + itemB;
}
const sum = addStuff(1,4);
console.log("the sum is ", sum); */

/* const myCar = {
    wheels: 4,
    addWheels: function () {
        console.log("added wheel");
    }
}
myCar.addWheels(); */

/*  function alertFn() {
    return "this came from my function";
}
window.alert(alertFn())*/

// Loops //
/* for (let i = 0; i < 10; i++) {
    console.log("the value of i is", i);
}  */

/* const cars = ["Honda", "Ford", "Dodge", "Kia", "Toyota"];
for (let carIndex = cars.length - 1; carIndex > -1; carIndex--) {
    console.log("I really like driving my " + cars[carIndex] + ".")
} */

/* let check = 7;
while(check > 0) {
    check = check - 1; 
    console.log("the check is currently", check);
} */

/* const cars = ["Honda", "Ford", "Dodge", "Kia", "Toyota"];
while (cars.length) {
    console.log("removing", cars.shift());
    console.log("remaining cars", cars.toString())
}  */
// forEach is for looping //
/* const cars = ["Honda", "Ford", "Dodge", "Kia", "Toyota"];
cars.forEach(function (car) {
    console.log("looping over", car);
}) */

//map - for transformation //
/* const dogs = ["chihuahua", "golden", "jack russel", "poodle", "french bulldog"];
const capitalizedDogs = dogs.map(function (dog) {
    return dog.toUpperCase();
});
console.log(capitalizedDogs);  */

// filter - finding a specific thing //
/* function startsWithH(input) {
    return input.charAt(0) === "H"
}
console.log(startsWithH("Herbert")); */

/* eslint-disable no-unused-vars */
let button;
let circleColor = "red";
function changeCircleColor() {
    circleColor = "blue";
}
function setup() {
    createCanvas(800, 800);
    background(0);
    button = createButton("Hi, I am a button")
    button.position(400,400);
    button.mousePressed(function (event){
        console.log("input value", input.value())
    });
    // input stuff
    input = createInput("");
    input.position(200, 400);
}