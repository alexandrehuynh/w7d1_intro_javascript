console.log("Hello there") // <-- print() -- prints information to the console in your browswer
let robot; // <-- declaring a variable with let but assigning no value
//       ^ semi-colon, kind of like punctuation
/** Mult-Line Comment
 * 
 * 
 * Variable Declaration
 *    var, let, const 
 * 
 * Types
 *  strings, integers, floats, booleans, arrays, object(dictionary)
 * 
 * Functions
 *  regular - named functions
 *  arrow functions -- anonymous functions like lambda in python
 * 
 * Loops and Built In Functions
 * 
 */

// something = "A bagel" <-- do not do this

// var - redeclared and reassigned
// declaring variable
// declaring happens when you use the var, let, or const keywords
// assigning happens after declaration, if the variable was declared and not assigned
var person = "Ryan"
console.log(person)
// variable redeclaration 
var person = "Alex"
console.log(person)
// reassigning variables
person = "Justin"
console.log(person)

// let can be reassigned but not redeclared
let maximal = "Cheetor";
console.log(maximal)
// reassigning let variable
maximal = "Rat Trap";
console.log(maximal)
//cannot redeclare a variable with let
//let maximal = "Optimus Primal" //-- cannot redeclare a block scoped variable

// assigning "armed varaible" or a variable that has been declared but has not been set
robot = "Mega Man";
console.log(robot)

// const cannot be reassigned or redeclared
// nice for functions so you dont accidentally reuse the same function name
const zFighter = 'Krillin';
console.log(zFighter)
// cannot redeclare block scoped variable with const
// identifier 'zFighter' has already been declared -- console error
// const zFighter = 'Gohan';
// console error TypeError: Assignment to constant variable
// zFighter = 'Goku'

// Types in JavaScript
// strings, integers, floats, arrays, objects, booleans

// integer
let someNumber = 31
console.log(someNumber)
console.log(typeof someNumber)

// float
let someFloat = 3.14
console.log(someFloat)
console.log(typeof someFloat)

// string
let someString = 'Kamehame Ha'
console.log(someString)
console.log(typeof someString)

// array - list in python
let someArray = [1, 2, 3, 4]
console.log(someArray)
console.log(typeof someArray)
console.log(someArray['length'])
console.log(someArray.length)
// len(someArray) 

// objects -- dictionary in python
let someObject = {
    test: 'Please Test Me!', //keys dont need quotes, but they should have them
    "test_2": "Still need testing!"
}
console.log(someObject)

// math operators in javascript
// addition
let sum = 5 + 5
console.log(sum)
// addition shorthand
sum += 5
// increment by 1
sum++ // specifically for incrementing by 1
console.log(sum)

//subtraction
let diff = 10 - 5
console.log(diff)
//shorthand 
diff -= 2
// decrement/subtract just 1
diff--

// multiplication 
let product = 5 * 5
console.log(product)
//shorthand
product *= 5
console.log(product)

//exponential
let exponent = 6 ** 2

//shorthand
exponent ** 2
console.log(exponent)

// modulo
let mod = 5 % 2
console.log(mod)

//some other math stuff
let findFloor = Math.floor(26.7)
console.log(findFloor)

let findSeal = Math.ceil(26.7)
console.log(findSeal)

let num = 5
let num2 = 2
let newFloor = Math.floor(num / num2)
console.log(newFloor)

// Weird JavaScript Typing
someFloat = 3.14
let crazyStuff = someFloat + "4"
// undefined, 7.14, 3.14 + 4, 3.144, typeerror
// Type Coercion
console.log(crazyStuff)
console.log(typeof crazyStuff)

// python str(), int(), float()
// .toString() -- changes to string type
// parseInt(thing to be intified) changes to an integer whole number 
// parseFloat(thing to be floatified) changes to a decimal number

//parseInt()
let string_num = '4'
newNum = someFloat + parseInt(string_num)
console.log(newNum)

//parseFloat()
string_float = '10.165'
console.log(typeof string_float)
let newFloat = parseFloat(string_float)
console.log(typeof newFloat)

// toString()
let coolNum = 6
console.log(typeof coolNum)
let stringNum = coolNum.toString()
console.log(typeof stringNum)



/**
 *
 *
 *
 * ======== JAVASCRIPT FUNCTIONS ========
 *
 *
 *
 */


// Regular normal boring functions
// def function_name(param1, param2):
//      do something here
//defining a function
function addNums() {
    let num = 4;
    let num2 = 5;
    console.log("This is a regular named function")
    return num + num2;
};
// calling a function
// addNums()
// console.logging function call so we can see output in the console
console.log(addNums())

// function with parameters
function subNums(x, y) {
    return x - y;
}
// calling a function with parameters
console.log(subNums(100, 74))

// defining a function with a variable name
const addNums2 = function (num1, num2) {
    return num1 + num2
}

console.log(addNums2(17, 59))
// setting variable to the ouput of a function
let subtraction = subNums(10, 7)
console.log(subtraction)
// setting new varible to the function itself
// and calling that new variable as the function
let subMoreNums = subNums
console.log(subMoreNums(50, 23))

//ES6
/*
    Arrow Functions
    similar to the python lambda, arrow functions allow us to create functions 
    on the fly

    if there is only one parameter, the arrow function does need parantheses

*/

// arrow function with no parameters
let sayHello = () => {
    return 'Hello there!'
}

console.log(sayHello())

// no parentheses with a single parameter
let sayHelloToPerson = name => {
    return `Hello there, ${name}!`
}
console.log(sayHelloToPerson('General Grievous'))

// arrow function with more than one parameter
// need parentheses with more than 1 parameter
const addNums3 = (num1, num2) => {
    return num1 + num2
}
console.log(addNums3(1000, 367254))

// JavaScript Conditionals
// If statement
// && AND if this is true AND this is true
// || OR this can be true OR that can be true
function determineAge(age) {
    if (age < 18) {
        return 'Minor';
    } else if (age >= 18 && age <= 65) {
        return 'Adult not retired';
    } else if (age > 65 && age < 110) {
        return 'Elderly person, retired....hopefully';
    } else {
        return 'Maiar, please save us from the balrog';
    }
}
console.log(determineAge(32))
console.log(determineAge(55000))

// JavaScript Ternary Operator
const getAge = (age) => {
    //     condition  if  returned thing   : <-- elif and finally else if no other condition is provided
    return (age < 18) ? 'Minor' :
        (age >= 18 && age <= 65) ? 'Adult Not Yet Retired' :
            (age > 65 && age < 110) ? 'Elderly Person Hopefully retired' :
                'Maiar or Elf';
}


// JavaScript Loops
// loop through a range of numbers
function countByOne() {
    // for (iterator; condition; increment/decrement iterator;)
    //start     stop   step
    for (let x = 0; x < 20; x++) {
        console.log(x)
    };
};
countByOne()

// using the above to loop through a list by index
let myNames = ['Ryan', "Alex", "Justin", "Mo", "Morgan", "William", "Liz", "Jeiavonni", "Razvan"]
const printNames = (arr) => {
    for (i = 0; i < arr.length; i++) {

        console.log(`the person at ${i} is ${arr[i]}`)
    }
}
printNames(myNames)

const printAllNames = (arr) => {
    for (i = 0; i < arr.length; i += 2) {

        console.log(`the person at ${i} is ${arr[i]}`)
    }
}
printNames(myNames)

// looping by value
// for (iterator of iterable)
const printNames2 = (arr) => {
    for (const name of arr) {
        console.log(name)
    }
}
printNames2(myNames)

//for (iterator in iterable)
const printNames3 = (arr) => {
    for (const i in arr) {
        console.log(i, arr[i])
    }
}
printNames3(myNames)

// forEach
// arr.forEach((iterator)=> {what do we do with the iterator})

const gimmeNames = (arr) => {
    arr.forEach((name) => { console.log(name) })
}

gimmeNames(myNames)

// while loops
const countWithWhile = () => {
    let i = 0
    let text = ''

    //while loop
    while (i < 10) {
        console.log(i)
        text += `This number is...${i}`
        i++
    }

    return text
}

console.log(countWithWhile())

// do while
const countWithDoWhile = () => {
    let i = 0
    let text = ''
    //do or do not there is no try
    do {
        i++
        text += `The number above is ${i}`
    }

    //condition for the loop to run
    while (i < 10)
    return text
}

console.log(countWithDoWhile())

// array stuff

let groupOfNames = ['Gary', "Ash", "Misty", "Brock", "Officer Jenny"]
// console.log(groupOfNames[1])
// console.log(groupOfNames[0])

// deconstruct an array
// let [gary, ash, misty] = groupOfNames
// console.log(gary)
// console.log(ash)
// console.log(misty)

//spread operator
// when deconstructing an array, the spread operator will grab all elements
// not currently deconstructed
let [...trainers] = groupOfNames
console.log(trainers)
// using the spread operator to retrieve non-deconstructed elements
let [gary, ash, misty, ...lovers] = groupOfNames
console.log(gary)
console.log(ash)
console.log(misty)
console.log(lovers)

// javascript map
let bNames = groupOfNames.map((name) => {
    if (name[0] == "B") {
        return name
    } else {
        return "Gotta Catch Em All"
    }
})

console.log(bNames)

// reduce
let nums = [2, 4, 6, 8, 10]
let sumNums = nums.reduce((accumulator, currentNum) => accumulator + currentNum)
console.log(sumNums)

//.filter
let mediocreNames = groupOfNames.filter((name) => name.length > 4)
console.log(mediocreNames)


//.join 
console.log(groupOfNames.join(" gotta catch em all "))

// .slice --> in python arr[1:4]
// let groupOfNames = ['Gary', "Ash", "Misty", "Brock", "Officer Jenny"]
console.log(groupOfNames.slice(1, 3))

// .splice()
groupOfNames.splice(0, 0, "Ritchie")
console.log(groupOfNames)

groupOfNames.splice(4, 1, 'Nurse Joy')
console.log(groupOfNames)

//adding to an array
// array.push()
// adds to the back of an array
groupOfNames.push("Professor Oak")
console.log(groupOfNames)

// .includes()
// list membership check
// if x in arr -- python
let numsList = [2, 3, 4, 5, 6, 7, 8, 9, 10]

if (numsList.includes(4)) {
    console.log("Its here")
} else {
    console.log("its not here")
}