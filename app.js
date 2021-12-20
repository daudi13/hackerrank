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

    for (let i = 0; i < n; i++){

        const space = '#'.repeat(i + 1);

        console.log(space.padStart(n, ' '));
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


timeConversion('07:05:45PM')


/*HackerLand University has the following grading policy:
Every student receives a grade in the inclusive range from 0 to 100, any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's grade according to these rules:

if the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5

if the value of grade is less than 38, no rounding occurs as the result will be a failing grade*/


const gradingStudents = function (grades) {

    let output = [];

    //iterate through the array 

    for (let i = 0; i < grades.length; i++) {

        if (grades[i] >= 38) {

            let remainder = grades[i] % 5;

            if (remainder === 3) {
                output.push(grades[i] + (5-3))
            } else if (remainder === 4) {
                output.push(grades[i] + (5-4))
            } else {
                output.push(grades[i])
            }
        } else {
            output.push(grades[i])
        }
    }

    return output;
}


console.log(gradingStudents([44, 55, 64]));



/*Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.*/

const countApplesAndOranges = function (s, t, a, b, apples, oranges) {
    
    let newApplearr = [];
    let newOrangeArr = [];

    //iterate through the apples arrays and add each individual element to the distance of the apple tree to find out if it lands between the distance of s and t (sam's house)

    for (const apple of apples) {

        if (a + apple >= s && a + apple <= t) {
            newApplearr.push(apple)
        }
    }

    //iterate through the oranges arrays and add each individual element to the distance of the orange tree to find out if it lands between the distance of s and t (sam's house)

    for (const orange of oranges) {

        if (b + orange <= t && b + orange >= s) {
            newOrangeArr.push(orange)
        }
    }

    console.log(newApplearr.length);
    console.log(newOrangeArr.length);
}


countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

/*You are choreographng a circus show with various animals a=for one act, you are given two kangaroos on a number line ready to jump in the positive direction---the first kangaroo starts at locatio x1 and moves at a rate of v1 meters per jump---the second kangaroo starts at location x2 and moves at a rate of v2 meters per jump--you have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise retun NO*/



function kangaroo(x1, v1, x2, v2) {

    if (v1 < v2) return "NO";
    else if ((x1 - x2) % (v1 - v2) === 0) return "YES";
    else return "NO"
}


console.log(kangaroo(0, 3, 4, 2))

/*Maria plays college basketball and wants to go pro. Each saeson she maintains a record of her play. she tabulates the number of times she breaks her season for points ans least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there

given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season*/


function breakingRecords(scores) {

    const scoreSet = new Set(scores);

    const newScoreArr = [];
    const minMaxArr = []

    let maxValue = 0;
    let minValue = 0;

    for (const [i, score] of scoreSet.entries()) {
        newScoreArr.push(score);
    }

    for (let i = 0; i < newScoreArr.length; i++) {

            if (newScoreArr[0] > newScoreArr[i-1]) {
                maxValue++
            }
            else if (newScoreArr[0] < newScoreArr[i]) {
                minValue++
            }
    }
    
    minMaxArr.push(minValue);
    minMaxArr.push(maxValue);

    console.log(minMaxArr)
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);


/*Given an array of integers and a positve integer k, determine the number of (i, j) pairs where i < j and ar[i] +ar[j] is divisible by k  */


const divisibleSumPairs = (n, k, ar) => {

    let length = 0

    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {
            
            if ( (ar[i] + ar[j]) % k === 0 && 2 <= n <= 100 && 1 <= k <= 100 && 1 <= ar[i] <=100) {
                length++
            }
        }
    }

    console.log(length)
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);