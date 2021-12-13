'use strict';

// Complete the function solveMeFirst to compute the sum of two integers.

//function description 
/*
Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

int a: the first value
int b: the second value
Returns
- int: the sum of a and b
*/

function solveMeFirst(a, b) {
    console.log(a + b);
    return a + b;
}

solveMeFirst(4, 5);

/*Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):
ar: an array of integers

*/


function simpleArraySum(ar) {

    const arr = [...ar];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
    }

    console.log(sum)
}

simpleArraySum([4, 5, 4, 9]);


/*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.

Example

a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

Function Description

Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):

int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating
Return

int[2]: Alice's score is in the first position, and Bob's score is in the second.*/

function compareTriplets(a, b) {
    let score = [0, 0];

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            score[0]++
        } else if (a[i] < b[i]) {
            score[1]++
        } else {
            score[1] = score[1];
        }
    }

    return score
}


const trial1 = compareTriplets([17, 28, 30], [99, 16, 8]);
const trial2 = compareTriplets([44, 47, 50], [12, 23, 45]);

console.log(trial2)

/*In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large. */



function aVeryBigSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
}


aVeryBigSum([5, 8, 9, 10000, 7, 10000000,]);


/*	Submissions	Leaderboard	Discussions	Editorial
Given a square matrix, calculate the absolute difference between the sums of its diagonals.*/

function diagonalDifference(arr) {

    const x = arr.length;
    let diag1 = 0;
    let diag2 = 0;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            if (i === j) {
                diag1 += arr[i][j];
            }

            if (i + j === x - 1) {
                diag2+=arr[i][j]
            }
        }
    }

    return Math.abs(diag1 - diag2);
}


const diff = diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);

console.log(diff);

/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal. */

function plusMinus(arr) {

    const arrLength = arr.length;

    const negEl = arr.filter(function (number) {
        return number < 0;
    }).length;

    const posEl = arr.filter(function (number) {
        return number > 0;
    }).length;

    const zeroEl = arr.filter(function (number) {
        return number === 0
    }).length;


    console.log((posEl / arrLength).toFixed(6));
    console.log((negEl / arrLength).toFixed(6));
    console.log((zeroEl / arrLength).toFixed(6));
}

const arr1 = [-4,3,-9,0,4,1]

plusMinus(arr1);


/* staircase function*/

function staircase(n) {

    //to srat we will for loop through rows from 0 to n

    for (let i = 0; i < n; i++) {
        //for each row, we are considereing we will create an empty string step

        let step = "";

        //then we will iterate from 0 to n, through columns withfor loop

        for (let k = 0; k < n; k++) {
            //if the current column that we are looking at is equal to or less than the current row we want to add a pound(#) to step, else we will add space('')

            if (k <= i) {
                step += "#";
            } else {
                step += ""
            }
        }

        console.log(step)
    }
}

staircase(6)

/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. */


function miniMaxSum(arr) {

    const arrAsc = arr.sort();

    let minSum = 0;

    for (let i = 0; i < arrAsc.length - 1; i++) {
        minSum+=arrAsc[i]
    }

    let maxSum = 0;

    for (let i = 1; i < arrAsc.length; i++) {
        maxSum += arrAsc[i];
    }

    console.log(minSum, maxSum)
}

miniMaxSum([1, 3, 5, 7, 9]);

/*You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest. */


function birthdayCakeCandles(arr) {

    const maxValue = Math.max(...arr);
    let sum  = 0

    for (let i = 0; i < arr.length; i++) {
        if (maxValue === arr[i]) {
            sum+=arr[i]
        }
    }

    const candleNum = sum / maxValue
    
    console.log(candleNum)

}

birthdayCakeCandles([4, 4, 3, 2, 1]);

/*iven a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

const timeConversion = function (s) {

    if (s.slice(-2) === 'PM') {
        const timeString = Number(s.slice(0, 2));

        let timePiece = timeString + 12;

        if (timePiece === 24) {

            console.log(12 + s.slice(2, -2));
        } else {
            
            console.log(timePiece + s.slice(2, -2));
        }

        


    } else if (s.slice(-2) === 'AM') {
        const newTime = Number(s.slice(0, 2))

        if (newTime < 10) {
            console.log('0'+ newTime+s.slice(2, -2))
        }
        else if (newTime === 12) {
            
            console.log('0' + 0 + s.slice(2, -2))
        } else {

            console.log(newTime+s.slice(2, -2))
        }

    }
}


timeConversion('10:00:40PM')