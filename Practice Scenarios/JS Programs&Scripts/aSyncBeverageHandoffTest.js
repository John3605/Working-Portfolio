
let beverages = ['tea', 'coffee', 'apple cider'];

function pickRandomBeverage() {
 return new Promise(function(resolve, reject) {
  let randomIndex = Math.floor(Math.random() * beverages.length);
  let selectedBeverage = beverages[randomIndex];
  setTimeout(function() {
   console.log(`${selectedBeverage} selected`);
   resolve(selectedBeverage);
  }, 1000);
 });
}

function checkIfHotWaterIsReady(isBeverageSelected) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   if (isBeverageSelected) {
    console.log("Preparing...");
    resolve(isBeverageSelected);
   } else {
    reject("No beverage has been picked up.");
   }
  }, 1000);
 });
}

function prepareDrink(selectedBeverage) {
 return new Promise(function(resolve, reject) {
  setTimeout(function() {
   if (selectedBeverage) {
    console.log(`Enjoy your ${selectedBeverage} !`);
    resolve(true);
   } else {
    reject("Drink not ready yet...");
   }
  }, 1000);
 });
}

function nativePromiseHandling() {
 const pickedDrink = pickRandomBeverage();
 const handleWaterReadyCheck = function(selectedBeverage) {
  return checkIfHotWaterIsReady(selectedBeverage);
 };
 const handlePrepareDrink = function(isBeverageSelected) {
  return prepareDrink(isBeverageSelected);
 };
 pickedDrink
  .then(handleWaterReadyCheck)
  .then(handlePrepareDrink);
}
nativePromiseHandling();
