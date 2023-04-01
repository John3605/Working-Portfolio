/* 
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

function solution(inputArray) {
    let CurrentLargest = inputArray[0] * inputArray[1];
    
    for (i = 0, j = 1; j < inputArray.length; i++, j++) {
        let CurrentProduct = inputArray[i] * inputArray[j];
        
        if (CurrentProduct > CurrentLargest) {
            CurrentLargest = CurrentProduct;
        }
    }   
    return CurrentLargest
}

// Upon consulting a friend

function solution(inputArray) {
    let currentLargest = inputArray[0] * inputArray[1];

    for (let i = 1; i < inputArray.length - 1; i++) {
        let currentProduct = inputArray[i] * inputArray[i + 1];
        currentLargest = Math.max(currentLargest, currentProduct);
    }
    return currentLargest;
}
