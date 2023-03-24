let [averageSpeed, mpg, gallons, destination, tripMiles] = [57, 27, 13, "Ithaca, NY", 74 + 63 + 167];
console.log("Thank you for using my Trip Planner!");
console.log(`If my information's correct, you have a full 13 gallons to go a total of ${tripMiles} miles!`);

let time = tripMiles / averageSpeed;
let tankRange = 27 * 13;
let leftoverGasRange = tankRange - tripMiles;

console.log(`Trip to ${destination}`);
console.log(`Estimated Time: ${time.toFixed(2)} hours`);
console.log(`Range Remaining: ${leftoverGasRange}`);
