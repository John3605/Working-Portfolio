let customers = ["John S.", "Emma M.", "Frank T."];
let receipts = [
  ["eggs", "white bread", "milk"],
  ["milk", "cheese", "butter", "pancake mix", "flour"],
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"]
];
let prices = {
  "eggs": 3.50,
  "white bread": 4.50,
  "milk": 5.99,
  "cheese": 6.50,
  "butter": 3.45,
  "pancake mix": 4.50,
  "flour": 5.75,
  "cereal": 4.50,
  "whole wheat bread": 6.50,
  "vanilla": 8.75
};

function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}

function populateTable() {
  for (i in customers.length); {
    console.log(i);
  }
}