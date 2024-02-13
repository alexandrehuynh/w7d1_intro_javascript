let robot;
console.log("Hello") // <-- console.log == print()

/**
 * Mult-line comment 
 * 
 * 
 * Variable Declaration
 * --var, let, const
 * 
 * Types:
 * strings, integers, booleans, floats
 * 
 * arrays, objects (dictionary in python)
 * 
 * Functions
 * --regular named functions
 * --arrow functions (similar to anonymous function)
 * Loops
 * 
 * 
 */

// Variable Declaration

//var can be redeclared and reassigned
//variable declaration
var name = "Ryan"
console.log(name)
//redeclaration
var name = "Alex"
console.log(name)

//reassigning variable
name = "Matthew"
console.log(name)


//let can reassign but cannot redeclare
let maximal = "Cheetor"
console.log(maximal)
maximal = "Rat Trap"
console.log(maximal)
maximal = "Optimus Primal"
console.log(maximal)

// cannot redeclare variable with let
// let maximal = "Silver Bolt"

// reassigning an "armed" variable
robot = "Mega Man"
console.log(robot)

//const cannot be redeclared or reassigned
const nbaGoat = "Michael Jordan"
console.log("Michael Jordan")

//cannot redeclare a const variable
// const nbaGoat = "LeBron James"

//cannot reassign
// nbaGoat = "Kobe Bryant"

// integer
let someNumber = 31
console.log(someNumber)
console.log(typeof (someNumber))

// float variable
let someFloat = 3.14
console.log(someFloat)
console.log(typeof (someFloat))

// array
let someArray = [1, 2, 3, 4]
console.log(someArray)
//acccessing length of array
console.log(someArray.length)

//object -- dictionary in python
let someObject = {
    test: "Please Test Me!",
    "test2": "Still need testing, pls"
}
console.log(someObject)

// addition
let sum = 5 + 5
console.log(sum)
//addition shorthand
sum += 5
console.log(sum)
//incremenet by 1
sum++

//subtraction
let diff = 10 - 5
//shorthand
diff -= 3
//decrement by 1 
diff--

//multiplication
let product = 5 * 5
//shorthand
product *= 5
console.log(product)

//division
let dividend = product / 25
console.log(dividend)
//shorthand
dividend /= 5
console.log(dividend)

//exponential
let exponent = 6 ** 2
console.log(exponent)
//shorthand
exponent **= 2
console.log(exponent)

// modulo
let mod = 5 % 2
console.log(mod)

//some other math stuff
let findFloor = Math.floor(26.7)
console.log(findFloor)

let findCeil = Math.ceil(15.6)
console.log(findCeil)

let num = 5

let newFloor = Math.floor(5 / 2)
console.log(newFloor)

/**
 * 
 * 
 * ====== JavaScripts Functions ======
 * 
 * 
 */

// Regular boring normal named functions
// def function_name(stuff, more_stuff)
function addNums() {
    let num = 4;
    let num2 = 5;
    console.log("This is a regular named function")
    return num + num2
}
console.log(addNums())

// named functions with parameters
function subNums(x, y) {
    return x - y
}
console.log(subNums(17, 8))

// named functions with variable delcaration
const addNums2 = function (num1, num2) {
    console.log("Here is another named function with parameters")
    return num1 + num2
}

console.log(addNums2(10, 26))

//ES6+
/*
  Arrow Functions
  we can use arrow functions without parentheses ONLY if we have ONLY one parameter
*/
//no paranthese because we only have one parameter
// func name parameter       
let cubed = num => {
    return num ** 3
}
console.log(cubed(9))

// more than one parameter so we use parentheses
const addNums3 = (num1, num2) => {
    return num1 + num2
}
console.log(addNums3(1000, 927813))

// Self-Invoking Functions
// javascript closure
//console.log in the example below is not require, its just for visualization
console.log(function (name) {
    let hello = "Hello World, " + name;
    return hello
}('Lando')) //immediately takes in argument and executes function

// JavaScript Control Flow
// If Statement
// && AND in a conditional if this AND that is true
// || OR in a condition if this OR that is true

function determineAge(age) {
    if (age < 18) {
        return 'Minor'
    } else if (age >= 18 && age <= 65) {
        return 'Adult Not Retired'
    } else if (age > 65 && age < 110) {
        return "Elderly Person...retired...hopefully"
    } else {
        return 'Maiar'
    }
}

console.log(determineAge(31))
console.log(determineAge(24000))

// JavaScript Ternary Operator

const getAge = (age) => {
    //condition   if   returned thing
    return (age < 18) ? 'Minor' :
        (age >= 18 && age <= 65) ? 'Adult Not Yet Retired' :
            (age > 65 && age < 110) ? 'Elderly Person' :
                'Maiar or Elf'
    //                        else if or else
}

console.log(getAge(2931))

// Weird JavaScript Typing
someFloat = 3.14
let crazyStuff = someFloat + '4'
// undefined, 7.14, 3.14+4, 3.144
console.log(crazyStuff)

console.log(typeof (crazyStuff))

// str(), int(), float()
let newCrazyStuff = parseFloat(crazyStuff) // change type of a valid input
console.log(newCrazyStuff)
console.log(typeof (newCrazyStuff))

// change to string type
let coolNum = 50
console.log(typeof (coolNum))
let numToString = coolNum.toString()
console.log(typeof (numToString))

coolNum = coolNum.toString()

let anotherNum = '5'

anotherNum = parseInt(anotherNum) //  change to number type
console.log(typeof (anotherNum))

// Bröther may i have some loops

function countByOne() {
    // for (iterator; condition; incrementation)
    for (let x = 0; x < 20; x++) {
        console.log(x)
    }
}
// countByOne()

// loop by index through list
let myNames = ['Ryan', 'Alex', 'Matthew', 'Jason', 'Leza']
console.log(myNames)
const printNames = arr => {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

// for of
// for temporary iterator variable of arr

const printNames2 = (names) => {
    for (const name of names) {
        console.log(name)
    }
}

printNames2(myNames)

const decreaseByOne = () => {
    for (let i = 20; i > -1; i--) {
        console.log(i)
    }
}
decreaseByOne()

//while loops
const countWithWhile = () => {
    let i = 0
    let text = ''

    // while loop
    while (i < 10) {
        text += `This number is....${i}`
        i++
        console.log(i)
    }
    return text
}

//do while loop
const countWithDoWhile = () => {
    let i = 0
    let text = ''

    // do or do not there is no try
    do {
        i++
        text += `The number above is ${i}`

    }
    // condition for loop to run
    while (i < 10)
    return text
}

// array stuff
//                    0       1       2        3          4
let groupOfNames = ['Gary', 'Ash', 'Misty', 'Brock', 'Officer Jenny']
console.log(groupOfNames[1])

//deconstruct an array
// let [gary, ash, misty] = groupOfNames
// console.log(gary)
// console.log(ash)
// console.log(misty)

let [gary, ash, misty, ...lovers] = groupOfNames
console.log(gary)
console.log(misty)
console.log(ash)
console.log(lovers)

// forEach loop
const showEachName = (arr) => {
    arr.forEach(
        name => console.log(name)
    )
}
showEachName(groupOfNames)

let bNames = groupOfNames.map((name) => {
    if (name[0] == "B") {
        return name
    } else {
        return 'Gotta Catch Em All'
    }
})

console.log(bNames)

const checkBNames = (name) => {
    if (name[0] == "B") {
        return name
    } else {
        return "Gotta Catch Em All"
    }
}

for (name of groupOfNames) {
    console.log(checkBNames(name))
}

groupOfNames.forEach(name => console.log(checkBNames(name)))

// reduce
let nums = [2, 4, 6, 8, 10]
let numsReduced = nums.reduce((accumulator, currentNum) => accumulator + currentNum)
console.log(numsReduced)

// filter
let mediocreNames = groupOfNames.filter(name => name.length > 4)
console.log(mediocreNames)


//join
console.log(groupOfNames.join(" gotta catch em all "))

// slice
console.log(groupOfNames.slice(0, 3))

//.splice()
groupOfNames.splice(0, 0, 'Ritchie')
console.log(groupOfNames)

groupOfNames.splice(4, 1, 'Nurse Joy')
console.log(groupOfNames)
// adding an item to the array like append in python
groupOfNames.push("Professor Oak")
console.log(groupOfNames)

// .includes()
let numsList = [2, 3, 4, 5, 6, 7, 8, 9, 10]

if (numsList.includes(4)) {
    console.log('its here, the four you were looking for')
} else {
    console.log("its not here :(")
}