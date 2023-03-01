let price = 2.50;
let taxRate = .08;
let campers = 15;
let budget = 40;

console.log(price);
console.log(campers);
console.log(taxRate);

total = (price * (1 + taxRate) * campers);
console.log(total);

let totalExceedsBudget = total > budget;
console.log("Total Exceeds Budget? " + totalExceedsBudget);

let taxApplied = total > price * campers;
console.log("Tax Applied? " + taxApplied);
