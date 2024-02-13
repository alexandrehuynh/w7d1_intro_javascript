//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

 // ****** FUNCTION TAKING TWO PARAMETERS ****** //
function findDogNames(dogString, dogNames) {
    // Initialize that tracks if any match is found
    let foundMatch = false; 
    
    // forEach method to iterate over each element in the 'dogNames' array
    dogNames.forEach(dogName => {
      // Check if the current 'dogName' is in the 'dogString'
      if (dogString.includes(dogName)) {
        // If a match is found, log the dog
        console.log("Matched dog_name: " + dogName);
        foundMatch = true;
        // Watch out for "Sassy"
        if (dogName === "Sassy") {
          console.log("That's a damn cat");
        }
      }
    });
    // After the forEach loop, check if 'foundMatch' is still false
    if (!foundMatch) {
      console.log("No Matches");
    }
  }
  
  // ****** CALL IT ****** //
  findDogNames(dogString, dogNames);
  
  

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

let zFighters = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

 // ****** FUNCTION ****** //
// Define the function named 'replaceEvenIndex' that accepts an array as a parameter
function replaceEvenIndex(zFighters) {
    // Signature Moves Map
    const signatureMoves = {
        "Goku": "Kamehameha",
        "Vegeta": "Final Flash",
        "Trunks": "Burning Attack",
        "Krillin": "Destructo Disc",
        "Gohan": "Masenko",
        "Piccolo": "Special Beam Cannon"
      };

    // Loop through the array starting from the end to the beginning
    for (let i = 0; i < zFighters.length; i++) {
        // Check if the index is even using the modulo operator
      if (i % 2 === 0) {
        // If the index is even, remove the element at that index with 'splice' and replace it with 'even index'
        zFighters.splice(i, 1,signatureMoves[zFighters[i]] || "even index"); // arguments: index, numbber of elments to remove, elements to add
      }
    }
    // Return the modified array
    return zFighters;
  }
  
  // ****** CALL IT ****** //  
  console.log(replaceEvenIndex(zFighters));
  
//============Exercise #3 ============//
/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example*/
let filter_list = [1,2,'a','b'] // == [1,2]
let filter_list2 = [1,'a','b',0,15] // == [1,0,15]
let filter_list3 = [1,2,'aasf','1','123',123] // == [1,2,123]

 // ****** FUNCTION ****** //
function filterList(l) {
    // Use the filter method to return a new array
    // The callback function checks if the element is a number using the typeof operator
    return l.filter(element => typeof element === 'number');
  }

// ****** CALL IT ****** //  
console.log(filterList(filter_list));



//============Exercise #4 ============//
/* You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

Let's say you start with this: "012345"

The first thing you do is reverse it:"543210"
Then you will take the string from the 1st position and reverse it again:"501234"
Then you will take the string from the 2nd position and reverse it again:"504321"
Then you will take the string from the 3rd position and reverse it again:"504123"

Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

Input:
A string of length 1 - 1000

Output:
A correctly reordered string. */

 // ****** FUNCTION ****** //
function specialStringReorder(s) {
    // Reverse the entire string
    let reversed = s.split('').reverse().join('');
    
    // Iterate through each position, reversing the substring from that position onwards
    for (let i = 1; i < s.length; i++) {
      // Split the string into two parts: before the position and from the position
      let before = reversed.substring(0, i);
      let toReverse = reversed.substring(i).split('').reverse().join('');
      // Combine the before part with the newly reversed part
      reversed = before + toReverse;
    }

    return reversed;
  }
  
// ****** CALL IT ****** //  
console.log(specialStringReorder("012345")); // Should output "504132"