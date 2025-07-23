"use strict";
// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

//creating the students array
let studentsArr = [
  "Hammad Javed",
  "Zain",
  "Muhammad Rehan",
  "Saim Akber",
  "Akber butt sandila",
  "Kashiyan Ikram",
  "Ali Qureshi",
  "Rehan Balouch",
  "Ali King",
];

// Method One using the for of loop

function assigningHouses(arr) {
  let houses = [];
  for (const student of arr) {
    let houseName;
    if (student.length > 0 && student.length <= 6) {
      houseName = "Gryffindor";
    } else if (student.length > 6 && student.length <= 8) {
      houseName = "Hufflepuff";
    } else if (student.length > 8 && student.length < 12) {
      houseName = "Ravenclaw";
    } else if (student.length >= 12) {
      houseName = "Slytherin";
    }
    houses.push(houseName);
    console.log(`${student} has been sorted into ${houseName}`);
  }
  return houses;
}

/* Method two using the for loop with indexes of the array

  for (let i = 0; i < arr.length; i++) {
    let houseName;
    if (arr[i].length > 0 && arr[i].length <= 6) {
      houses.push("Gryffinder");
      houseName = "Gryfinder";
    } else if (arr[i].length > 6 && arr[i].length <= 8) {
      houses.push("Huffelpuff");
      houseName = "Huffelpuff";
    } else if (arr[i].length > 8 && arr[i].length < 12) {
      houses.push("Ravenclaw");
      houseName = "Ravenclaw";
    } else if (arr[i].length >= 12) {
      houses.push("Slytherin");
      houseName = "Slytherin";
    }
    console.log(`${arr[i]} got the ${houseName}`);
  }
}
  */

assigningHouses(studentsArr);

/* Problem Explanation
Problem Statement
Create a function that sorts students into four houses based on their name length:

Gryffindor: names with length ≤ 6
Hufflepuff: names with length 7-8
Ravenclaw: names with length 9-11
Slytherin: names with length ≥ 12
Key Improvements
Fixed spelling of house names
Improved code structure by setting houseName first, then pushing to array
Added return statement for the houses array
Improved console output message
Removed redundant assignments
*/

/* Example Output
// Hammad Javed has been sorted into Ravenclaw
Zain has been sorted into Gryffindor
Muhammad Rehan has been sorted into Slytherin
// ...*/

/* Complexity Analysis
Time Complexity: O(n)
Where n is the number of students in the input array
The function performs a single loop through all students
Space Complexity: O(n)
The function creates one array (houses) that stores n elements
Additional constant space for the houseName variable

Usage
const students = ["Harry", "Hermione", "Ron"];
const sortedHouses = assigningHouses(students);
*/
