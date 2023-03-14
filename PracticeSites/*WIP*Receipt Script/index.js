let customers = ["John S.", "Emma M.", "Frank T.", "Jonathan Chavarria"];
let receipts = [
  ["eggs", "white bread", "milk"],
  ["milk", "cheese", "butter", "pancake mix", "flour"],
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"],
  ["bacon", "free range eggs", "honey", "greens mix"]
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
  "vanilla": 8.75,
  "bacon": 6.99,
  "free range eggs": 11.99,
  "honey": 14.99,
  "greens mix": 8.49
};

function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}

function populateTable() {
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let receipt = receipts[i];
    let receipt_list = "";
    let sum = 0;
    for (let j = 0; j < receipt.length; j++) {
      let item = receipt[j];
      let price = prices[item];
      receipt_list += item + "\n";
      sum += price;
    }
    setElementText("customer" + i.toString(), customer);
    setElementText("receipt" + i.toString(), receipt_list);
    setElementText("total" + i.toString(), sum);
  }
}
