let [maxPoints, passingPoints, samPoints, alexPoints, jessiePoints,
  didAlexPass
] = [120, 70, 84, 45, 99, false];


let samPointsDisplay = "Sam earned " + samPoints + " points out of " +
maxPoints;
console.log(samPointsDisplay);
let samPercentage = (samPoints / maxPoints) * 100;
let samPercentDisplay = "Sam scored " + samPercentage + "%";
let samMissedPoints = maxPoints - samPoints;
let samMissedPointsDisplay = "Sam missed " + samMissedPoints + " point(s).";

let alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
  maxPoints;
console.log(alexPointsDisplay);
let alexPercentage = (alexPoints / maxPoints) * 100;
let alexPercentDisplay = "alex scored " + alexPercentage + "%";
let alexMissedPoints = maxPoints - alexPoints;
let alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + " point(s).";

let jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " +
  maxPoints;
console.log(jessiePointsDisplay);
let jessiePercentage = (jessiePoints / maxPoints) * 100;
let jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%";
let jessieMissedPoints = maxPoints - jessiePoints;
let jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints +
  " point(s).";


console.log(samPercentDisplay);
console.log(alexPercentDisplay);
console.log(jessiePercentDisplay);
console.log(samMissedPointsDisplay);
console.log(alexMissedPointsDisplay);
console.log(jessieMissedPointsDisplay);


let classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
let classAveragePercent = (classAveragePoints / maxPoints) * 100;
let classAvgDisplay =
  `The class average was ${classAveragePoints} or ${classAveragePercent.toFixed(2)}%`;
console.log(classAvgDisplay);

[alexPoints, didAlexPass] = [75, !didAlexPass];
let alexPointsUpdated =
  `Alex failed initially but did extra credit. Their new score is ${alexPoints} out of ${maxPoints}`;
console.log(alexPointsUpdated);


const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;
listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;
listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;
listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;
