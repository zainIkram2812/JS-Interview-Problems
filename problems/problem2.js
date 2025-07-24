//  The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.
"use strict";

// making the product array

let productArray = [
  "Shopping Bags",
  "School Bags",
  "Sneaker Shoes",
  "School Shoes",
  "Ladies Bags",
];

// my method

// Making the function to filter products

function filterProducts(productArray) {
  let product = prompt("Enter the name of the product");
  let filterdProdcut = [];
  for (const element of productArray) {
    if (element.includes(product)) {
      filterdProdcut.push(element);
    }
  }
  return filterdProdcut;
}

console.log(filterProducts(productArray));

// second  method

function filterProducts(productArray) {
  let product = "Bags";
  return productArray.filter((item) => item.includes(product));
}

console.log(filterProducts(productArray));
//

/* Imrpoved Version
function filterProducts(productArray, searchTerm) {
  if (!Array.isArray(productArray)) {
    throw new Error('First argument must be an array');
  }
  
  if (!searchTerm || typeof searchTerm !== 'string') {
    throw new Error('Search term must be a non-empty string');
  }

  return productArray.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

// Example usage
const products = [
  "Shopping Bags",
  "School Bags",
  "Sneaker Shoes",
  "School Shoes",
  "Ladies Bags",
];

console.log(filterProducts(products, "bags")); 
*/

/*
Complexity Analysis
Time Complexity: O(n)
Where n is the length of the productArray
The filter method needs to traverse the entire array once
The includes() method has O(m) complexity where m is the length of the search term
Space Complexity: O(k)
Where k is the number of matching items
In worst case, k could be equal to n (all items match)
Creates a new filtered array
*/
