/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
*/

function solution(year) {
    if (year >= 1 && year <= 100){
        return 1
    } 
    else if (year >= 101 && year <= 1000){
        if (year % 100 === 0) {
            return year/100 
        }
        else {
            answer = year/100;
            return Math.ceil(answer)
        }
    }
    else if (year >= 1001 && year <= 2005){
        if (year % 1000 === 0) {
            return year/100 
        }
        else {
            answer = year/100;
            return Math.ceil(answer)
        }
    }
    else {
        console.log("Outside of input range");
    }
}
