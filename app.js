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



// function aVeryBigSum(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     console.log(sum);
// }


// aVeryBigSum([5, 8, 9, 10000, 7, 10000000,]);


/*	Submissions	Leaderboard	Discussions	Editorial
Given a square matrix, calculate the absolute difference between the sums of its diagonals.*/

function diagonalDifference(arr) {

	const x = arr.length;
	let diag1 = 0
	let diag2 = 0


	for (let i = 0; i < x; i++) {
		for (let j = 0; j < x; j++) {
			if (i === j) {
				diag1 += arr[i][j];
			}
			if (i + j === x - 1) {
				diag2 += arr[i][j]
			}
		} 
	}

	return Math.abs(diag2 - diag1)
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


/* zcase function*/

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

    const [h1, ...others] = scores; 
    let highs = h1;
    let lows = h1
    let maxs = 0;
    let mins = 0;


    others.forEach(other => {

        if (other > highs) {
            highs = other;
            maxs++
        } else if (other < lows) {
            lows = other;
            mins++;
        }
    })


    console.log([mins, maxs])
}

breakingRecords([3, 4, 21, 36, 1, 28, 35, 2, 24, 42]);


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


/*Given an array of birds sightings where every element represents a bird type id, determin the id of the most frequent;u sighted type. if more than 1 type has been spotted that maximum amount, return the smallest of their ids*/



/* A video player plays a game in which the character competes ina hurdle race. hurdles are of varying heighs, and the characters have a maximum height they can jump. There is a magic potion they can take that wil increase their maximu jumo height by 1 unit for each dose. how many doses of the potion must the character take to be able to jump all the hurdles. if the character clear all of the hurdles, return 0*/



const jumpHurdles = function (k, height) {

    const maxValue = Math.max(...height);
    
    const NoPortions = maxValue - k;

    if (NoPortions < 0) {

        return 0
    } else {
        return NoPortions;
    }
}

console.log(jumpHurdles(7, [2, 5, 4, 5, 2]));

/*you are requied to calculate and print the sum if the elements in an array, keeping in mind that some of those integers may be quite large

complete the aVeryBigSum function in the editpr below. it must return the sum of all array elements. aVeryBigSum has the following parameters 



*/

const aVeryBigSum = function (arr) {

    let sum = 0

    arr.forEach(function (value) {
        sum +=value
    }) 

    return sum
}

console.log(aVeryBigSum([1000000, 50000000, 6000000000]))


/*Two cats and a mouse are at various positions on a line. you will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. if the cats arrive at the same time the mouse will be allowed to move and it will escape while they fight. You are given q queries in the form of x,y and z representing the respective positions for the cats A and B, and for mouse C. complete the function catAndMouse to return the appropriate answers to each queery, which will be printed on a new line*/



const catAndMouse = function (x, y, z) {

    if (Math.abs(z - x) < Math.abs(z - y)) {
        console.log(`Cat A`)
    } else if (Math.abs(z - y) < Math.abs(x - z)) {
        console.log(`Cat B`)
    } else if (Math.abs(z - x) === Math.abs(z - y)) {
        console.log(`Mouse C`)
    }
}

catAndMouse(1, 2, 3);

/*when a contagious block of text is selected in a PDF viewer, the selection if highlighted with a blue recctangle. in this pdf viewer, each word is highlighted independently. there is a list of 26 charaters aligned by index to their letters. for example 'a' is at index 0 and z is at index 25. theres will also be a string. using the letter height given, determine the area of the rectangle highlight in mm assuming all lettes are 1mm wide*/


const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 5, 5, 5, 5, 5, 7];

console.log(h.length)

const designerPdfViewer = function (h, word) {

    //from stackoverflow :: https://stackoverflow.com/questions/41427029/replace-a-letter-with-its-alphabet-position
    const textPosition = [...word].map(a => parseInt(a, 36) -  10).filter(a => a >= 0);
    
    const newTextPosition = [];
    const letterHeight = [];
    
    for(let i = 0; i < textPosition.length; i++) {
        newTextPosition.push(textPosition[i] + 1)
    }
    
    for (let j = 0; j < newTextPosition.length; j++) {
        letterHeight.push(h[newTextPosition[j] - 1])
    }
    
    const maxHeight = Math.max(...letterHeight);
    const wordLength = maxHeight * letterHeight.length;
    
    console.log(wordLength);
}


designerPdfViewer(h, 'zaba')

/*given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1*/



const pickingNumbers = function (arr) {

    const newPt = [];
    const element = [];

    for (let i = 0; i < arr.length; i++) {
        

        for (let j = i + 1; j < arr.length; j++) {

            if (Math.abs(arr[i] - arr[j] )=== 1) {
                newPt.push(arr[i])
                element.push(arr[j])

                if (element[i] - newPt[i] === 1) {
                    console.log(element[i], newPt[i])
                }
            }
        }
    }

    console.log(newPt);
    console.log(element)
}


const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
pickingNumbers(a);

/*Marie inveted a time machine and wants to test it by time-traveling to visit russia  on the Day of the programmer(the 256th day of the year) during a year in the inclusive rane from 1700 to 2700. From 1700 to 1917, Russia's official calendar was the julian calendar; since 1919, when the next day after january 31st was February 14th. this means that in 1918, February 14th was the 32nd day of russia. In both calendar systems, Febraury is the only month with a variable amount of days; It has 29days during a leap year and 28 days during all other years. In the Julian calendar, Leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following

Divisible by 400.
Divisible by 4 and not divisible by 100.

Given a year, y find the date of the 256th day of that year according to the official Russian calendar during that year. then print it in the format dd.mm.yyyy where dd is the two-digit day, mm is the two-digit month, and yyyy is the y.
For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. the 256th day of a leap year after 1918 is september 12, so the answer is 12.09.1984




*/


const dayOfTheProgrammer = function (year) {

	//the 256th day fall in september [9]

    let leapYear = [31, 29, 31, 30, 31, 30, 31, 31];
	const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31];

	
	if (year < 1918 && year % 4 === 0) {
		console.log(`${256 - leapYear.reduce((acc, val) => acc + val, 0)}.09.${year}`)
	} else if (year > 1918 && year % 400 === 0 || year % 4 === 0) {
		console.log(`${256 - leapYear.reduce((acc, val) => acc + val, 0)}.09.${year}`)
	} else {
		console.log(`${256 - notLeapYear.reduce((acc, val) => acc + val, 0)}.09.${year}`)
	}

}

dayOfTheProgrammer(1900);


/*a descrete Mathematics professor has a class of studnets. Frustrated with their lack of disciplinre, the professor decides to cancel class if fewer than some number of students are present when thr class starts. Arrival times go from (arrivalTime <= 0)to arrived late (arrialTime > 0)
Given the arrival time of each student and a threshold number of attendees, determune if the class is cancelled
*/

// k is the number of students who came on time
// a is an arrray of the arrival time of each student


const angryProfessor = function (k, a) {
	const n = a.length;
	const l = a.filter(late => late > 0).length

	return k/n >= l/n ? 'YES' : 'NO'
}

console.log(angryProfessor(3, [-6, -5, -2, -1, 0, 1, 2]));

//UNSOLVED*

/* we define a magic square to be n x n matrix of distinct positive integers from 1 to n where the sum*/

/*// Create a function which concatenates the number 7 to the end of every chord in an array. // Ignore all chords which already end with 7. // Examples // jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"] // jazzify(["Dm", "G7", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"] // jazzify(["F", "E7", "A7", "Ab7", "Gm7", "C"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"] // jazzify([]) ➞ [] // Notes: // Return an empty array if the given array is empty. // You can expect all the tests to have valid chords. */


const addSeven = function (n) {
	let newArr = [];

	n.map( el => {
		const splitted = el.split('');
		if (splitted[splitted.length - 1] === '7') {
			splitted;
		} else {
			splitted.push('7')
		}
		newArr.push(splitted.join(''))
	})

	return newArr;
}

console.log(addSeven(["at7", "b", "c", "d"]));

//A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. they always tuen pages one at a time. when they open the book, page 1 is always on the righ side when they flip page 1, they see page 2 and 3. Each page except the last page will always be printed on both sides. the last page may only be printed on the front, given the length of the book. if the book has n pages long, and a student wants to turn to page p. what is the minimum number of pages to turn? they can start at the beginning or the end of the book. Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p

const pageCount = function (n, p) {
	let arr = Array.from({ length: p }, (_, i) => i + 1);
	const x = arr.length
	arr.indexOf(n);
	if (n - 1 > x - n) {
		return x - n;
	} else {
		return n - 1
	}
}

pageCount(3, 10);

console.log(pageCount(2, 10))

//UNSOLVED

// PALINDROME

const palindrome = str => {
	const lowercase = str.toLowerCase();

	return str === lowercase.split('').reverse().join('')
} 

console.log(palindrome('mama'));


// FIZZBUZZ

const fizzbuzz = numbre => {
	const x = Array.from({ length: numbre }, (_, i) => i + 1);
	return x.map(num => {
		if (num % 3 === 0 && num % 5 === 0) {
			console.log('fizzbuzz')
		}
		else if (num % 3 === 0) {
			console.log('fizz')
		} else if (num % 5 === 0) {
			console.log('buzz')
		} else {
			console.log(num)
		}
	})
}

fizzbuzz(12);

//ANAGRAM 

const anagram = (str1, str2) => {
	const x = str1.toLowerCase().split('').sort().join('');
	const y = str2.toLowerCase().split('').sort().join('');
	return x === y;
} 

console.log(anagram('tommy', 'moty'))
