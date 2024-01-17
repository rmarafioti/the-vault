//* To solve this exercise I will first create a string with our opening message. Then I will assign three variables to three different types of arithmetic whose answers are the combination of the lock. Last I will create another alert to notify the user of the woth the message and the combination lock *//

const string = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//assigning three variables to three uniques arithmetic operator expressions//

let comboOne = 5 * 2;
let comboTwo = 25 + 15;
let comboThree = 40 - 1;

//console.log out each variable to make sure my arithmetic coincides with the combination lock.//

console.log(comboOne)
console.log(comboTwo)
console.log(comboThree)

const combo = " " + comboOne + "-" + comboTwo + "-" + comboThree

//console log out to check if the concatenated combo expression works //

console.log(combo)

// created a concatenated alert to notify the user //

alert(string + combo);