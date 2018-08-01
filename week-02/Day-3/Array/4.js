'use strict';

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

const shopItems = ['Cupcake', 2, 'Brownie', false];
let index = shopItems.indexOf(2);
if (index !== -1) {
  shopItems[index] = 'Croissant';
}
index = shopItems.indexOf(false);
if (index !== -1) {
  shopItems[index] = 'Ice cream';
}
function sweets(params) {
  console.log(params);
}
sweets(shopItems);
module.exports = sweets;
