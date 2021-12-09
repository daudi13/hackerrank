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

    const negEL = arr.filter(function (number) {
        return number < 0
    })

    const negArrLength = negEL.length;

    return negArrLength/arrLength
}

const arr1 = [4, 5, 6, -1, -2, 4]

console.log(plusMinus(arr1));