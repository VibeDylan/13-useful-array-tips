/**
 * This tips help you for remove duplicate from an array.
 */

let fruits = ["Banana", "Apple", "Orange", "Lemon", "Banana", "Apple", "Watermelon"];

let firstOption =  [...new Set(fruits)]; 
let secondOption = Array.from(new Set(fruits));
