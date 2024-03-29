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


//A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. they always turn pages one at a time. when they open the book, page 1 is always on the right side when they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. the last page may only be printed on the front, given the length of the book. if the book has n pages long, and a student wants to turn to page p. what is the minimum number of pages to turn? they can start at the beginning or the end of the book. Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p

const pageCount = function (n, p) {

	const frontFlip = Math.floor(n / 2);
	let backflip;

	if (n === p){
		backflip = 1;
	} else {
		backflip = Math.round(p - n)/2
	}

	return Math.min(frontFlip, backflip)

}

console.log(pageCount(9, 10))

//UNSOLVED

/*Repeat a given string `str` (first argument) for `num` times (second argument). Return an empty string if `num` is not a positive number. For the purpose of this challenge, do *not* use the built-in `.repeat()` method.
*/

const repeatStringOne = (str, num) => {
	let a; 

	if (num < 0) {
		a = ''
	} else {
		a = Array(num + 1).join(str).toString();
	}

	return a;
}

console.log(repeatStringOne('a', -1));

/*The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, `sumFibs(10)` should return `10` because all odd Fibonacci numbers less than or equal to `10` are 1, 1, 3, and 5.*/

const sumAllOddFibs = num => {
	let fibs = [1, 1];

	for (let i = 2; i <= num; i++) {
		let a = fibs[i - 2];
		let b = fibs[i - 1];
		let sum = a + b;
		fibs.push(sum);
	}

	let res = 0;

	fibs.forEach(fib => {
		if (fib <= num && fib % 2 !== 0) {
			res += fib
		}
	})

	return res;
}

console.log(sumAllOddFibs(10))

/*HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly  5 people on social media.

On the first day, half of those 5 people (i.e., floor(5/2) = 2) like the advertisement and each shares it with  3 of their friends. At the beginning of the second day, floor(5/2) * 3 = 2 * 3 = 6 people receive the advertisement.
Each day, floor(recipient/2) of the recipients like the advertisement and will share it with  friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
	
	*/


const viralAdverstising = n => {
	let cumulate = [2]
	for (let i = 1; i < n; i++){
		let a = Math.floor((cumulate[i - 1] * 3) / 2);
		cumulate.push(a)
	}

	let totalSum = 0;
	cumulate.forEach(cum => totalSum += cum);

	return totalSum
}

console.log(viralAdverstising(5));

/*an avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was uphill, u, or downhill, D step. hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. we define the follwing terms

- a mountain is sequence of consequtivr steps above sea level, starting with a step up from sea level and ending with a step down sea level.

-a valley is a sequence of consequtive steps above sea level, starting with a step down from sea level and  ending uo to sea level

given the sequence of up and down steps during a hike, find and print the number of vallet walked through
*/


const countingValleys = (n, s) => {
	let valleys = 0;
	let elevations = 0;

	for (let i = 0; i < n; i++) {
		if (s[i] === 'D') {
			elevations--;
		} else {
			if (elevations === -1) {
				valleys++
			}
			elevations++
		}
	}
}

/* A jail has a number of prisoners and a number of treats to pass out  to them. their jailer decides the fairset way to divide the treat is to seat the prisoners around a circlular table in sequentially numbered chairs. A chair number will be drawn from a hat. beginning with the prisoner in that chair, one candy will be handed to each prisoner sequentially around the table untill all have been distributed.

the jailer is playing a little joke, though. The last piece of candy looks like all the others, but it tastes awful. determine the chair number occupied by the prisoner  who sill receive that candy*/

function saveThePrisoner(n, m, s) {
	
	if (m % n > 0) {
		return (m % n) + s - 1
	} else {
		return (m % n) + s + 1
	}
}

console.log(saveThePrisoner(4, 19, 2));
//not solved 

/*There is a strange counter. At the firsr second, it displays the number 3. Each second, the number displayed by decrements by 1. in next second, the timer resets to 2 x the initial number for the prior cycle and continues counting down. the diagram below shows the counter value for each time t in the first three cycle*/

function strangeTimer(t) {
  let res = 3;
  let memo = 3;
  for (let i = 1; i <= t; i++) {
    if (res > 1) {
      res--;
    } else if (res === 1) {
      memo = memo * 2;
      res = memo;
    }
  }
  return res;
} 

console.log(`result of ${strangeTimer(10)}`)

/*recursion*/

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i)
  }

  console.log('Hooray')
}

countDown(5);

function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray")
  } else {
    console.log(n)
    countDownRecursive(n -1)
  }
}


countDownRecursive(5);

function sumRange(n) {
  let total = 0
  if (n <= 0) {
    return total
  } else {
    total = n + sumRange(n - 1)
  }
  return total
}

console.log(sumRange(10))


function sum(n) {
  let total = 0
  for (let i = n; i > 0; i--) {
    total+=i
  } 

  return total
}
console.log(sum(10))

// recursion in solving a tree

const tree = {
  name: "Daudi",
  children: [
    {
      name: 'Jim',
      children: []
    },
    {
      name: "Mary",
      children: [{
        name: 'Henry',
        children: [{
          name: "mark",
          children: [
            { name: "Kyla", children: [] },
            { name: "Malala", children: [] }
          ]
        }]
      }]
    }
  ]
}

// function printChildren(t) {
//   if (t.children.length === 0) {
//     return
//   } else if (t.children.length > 0) {
//     t.children.forEach(child => {
//       arr.push(child.name)
//       printChildren(child)
//     })
//   }
// }

// console.log(printChildren(tree))

/* find the number of ways that a given integer, X, can be expressed as the sum of the nth powers of unique, natural numbers. For example if X = 13 and N = 2, we have to find all combinations of unique squares adding up to 13. the only solution is 2(power 2) + 3(power 3)*/


function powerSum(X, N) {
  
}

/* in this kata, you are asked to square every digit of a number and concatenate them. for example, if we run 9119 through the function, 811181 will come out, because 9 squared is 81 and 1squared is 1. note the function accepts an integer and returns an integer

*/

const squareDigits = (num) => Number(num.toString().split("").map(elm => elm * elm).join(""));


console.log(squareDigits(33));

/* Given an array of integers, find the one that appears an odd number of times. there will always be only one integer that appears an odd number of times 
*/

function findOdd(arr) {
  const freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1
  }

  return +Object.keys(freq).find(num => freq[num] % 2 === 1);
} 

/*A phrase is a palindrome if after converting all upercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backwards. Alphanumeric characters include letters and numbers 

Given s return true if it is a palindrome or not
*/

const ispalindrome = function (s) {
  //turn the string into a single string by removing the spaces
  // revervising the string
  // removing the non-alphanumeric values
  // turning the string into lowercase
  // checking if the string is similar to string before reverse

  const oneString = s.split('').join('').replace(/\W/g, '').toLowerCase()

  const reversed = s.split('').reverse().join('').replace(/\W/g, '').toLowerCase();

  console.log(oneString)
}

ispalindrome('ab_a');

/*A common way to deal with trolls attackong your comment section is to remove all of the vowels from the trolls comments, neutralizing the threats. Your task is to write a function that takes a string and returns a new string with all vowels removed for example the string "this website for losers LOL!" would become "ths wbst is for lsrs LL"*/

const disemvowel = function (str) {
  const splitString = str.replace(/A|E|I|O|U|a|e|i|o|u/g, '')

  console.log(splitString);
}

disemvowel('this website for losers LOL!');


/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. */

String.prototype.toJadenCase = function () {
  const res = this;
  const arrRes = res.split(' ')

  const newArr = arrRes.forEach((word, i) => {
    return `${i}: ${word}`
  })

  return newArr;
};

console.log('mom is a bad ass cook'.toJadenCase())


// write a function that takes an integer as input, nad returns the number of bits that are equal to one in the bunary representation of that number. you can guarantee that input id non-negative

const countBits = (n)  => n.toString(2).split("0").join('').length

// return the number (count) of vouwels in the given string. we will consider a, e, i, o, u as vowels for this kata

// solution 1

/*
const getCount = (str) => {
  let vowelsCount = 0
  const strArr = str.split("")

  for (const element of strArr) {
    switch (element) {
      case 'a':
        vowelsCount++
        break
      case 'e':
        vowelsCount++
        break
      case 'i':
        vowelsCount++
        break
      case 'o':
        vowelsCount++
        break
      case 'u':
        vowelsCount++
        break
      default:
        vowelsCount
    }
  }

  console.log(vowelsCount)
} 

getCount('neoiiiiii')
*/

// solution 2 

const getVowelCount = (str) => str.match(/[aeiou]/ig).length

console.log(getVowelCount('man'))

/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
The string has a length greater or equal to one and contains only letters from ato z.

example:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/

const printerError = (s) => {
  const strArr = s.split("")
  let errorSum = 0
  for (let i = 0; i < strArr.length; i++){
    strArr[i] > 'm' ? errorSum++ : errorSum
  }

  console.log(`${errorSum}/${strArr.length}`)
}

printerError('aaaxbbbbyyhwawiwjjjwwm')

//This time no story, no theory. the examples below show you how to write function accum:

const accum = s => {
  const newStr = s.split("")
  let newArr = []

  for (let i = 0; i < newStr.length; i++) {
    const letters = newStr[i].repeat(i + 1).toLowerCase()
    newArr.push(letters[0].toUpperCase() + letters.slice(1))
  }

  console.log(newArr.join('-'))
}

accum('man')

// Given a string s find the length of the longest subtsring without repeating characters
// unsolved

const lengthOfLongestSubString = function (s) {
  
}

//pair of Gloves 
/*Winter is coming, you must prepare your ski holidays. The objective of this kata is  to determine the number of pair of gloves you can constitue from the gloves you have in your drawwer Given an array describing the color of each glove, return the number of pairs you can consitute, assuming that only gloves of the same color can form pairs*/

function numberOfPairs(gloves) {
  const arrsingle = new Set(gloves)
  const newArr = [...arrsingle]
  let totalPairs = 0

  for (const element of newArr) {
    const filter = gloves.filter(word => word === element)
    let pairs = Math.floor(filter.length / 2)
    totalPairs += pairs
  }

  console.log(totalPairs)

}

numberOfPairs(["red", "green", "red", "blue", "blue"])


/* child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.*/


function bouncingBall(h, bounce, window) {
  let res = 0
  const bouncing = h/bounce

  if (h > 0 && bounce > 0 && bounce < 1 && window) {
    if (bouncing > h ) {
      
    }
  } else {
    res = -1
  }

  return res
}
//unsolved
console.log(bouncingBall(3, 0.66, 1.5))

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add uo to target, you may assume that each input would have exactly one solution and you may not use the same element twice. You can retun the answer in any order

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([3, 6, 4, 5], 9))


//an integer is a palindrome when if reads the same backwards as forward 

const palindromeNum = function (x) {
  const numStr = x.toString().split('').reverse()

  if (+numStr.join('') === x) {
    return true
  } else {
    return false
  }
}  

console.log(palindromeNum(111))
console.log(palindromeNum(111))
console.log(palindromeNum(112))

/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/


const romanInt = function (s) {
  const numMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let res = 0
  
  s.split('').forEach((num, i) => {
    if (numMap[num] < numMap[s[i + 1]]) res -= numMap[num]
    else numMap += numMap[num]
  }) 
}


/*
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/  


const mergeTwoList = (list1, list2) 


/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/

function birthday(s, d, m) {
  // Write your code here
  let arr = []
    for(let i = 0; i < s.length; i++) {
        for(let j = i + 1; j < s.length; j++) {
            if(s[i] + s[j] === d) {
              s[j]
              s[i]
            }
        }
    }
}

/*
There will be two arrays of integers. Determine all integers that satisfy the following conditions
1. The elements of the first array are all factors of the second array
2. The elements of the second array are all factors of the first array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist
*/


/*
Largest Smaller BST key

Given a root of a Binary search Tree (BST) and a number num, implement an effiecient function findLargestSmallerKey that finds the largest key in the tree that is smaller than num. if such a number doesn't exist, return -1. Assume that all keys in the tree are non-negatives. Analyse the time and space complexities of your solution




*/

/*Given an array of integers, calculate the ratios of it's element that ate positive, negative and zero. Print the decimal values of each fraction on a new line with 6 places after the decimal.*/

function plusMinus(arr) {
  let sumNeg = 0;
  let sumPos = 0;
  let sumZero = 0;
  for (const element of arr) {
    if (element === 0) {
      sumZero+=1
    }
    else if (element >= 1) {
      sumPos+=1
    }
    else {
      sumNeg+=1
    }
  }

  console.log((sumPos / arr.length).toFixed(6));
  console.log((sumNeg / arr.length).toFixed(6));
  console.log((sumZero / arr.length).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);

/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers*/

function miniMaxSum(arr){
  const arrAsc = [...arr].sort((a, b) => a - b);
  const arrDsc = [...arr].sort((a, b) => b - a);
  let sumMin = 0;
  let sumMax = 0;
  for (let i = 0; i <= 3; i++) {
    sumMin+=arrAsc[i]
    sumMax+=arrDsc[i]
  }

  console.log(sumMin, sumMax)
}

miniMaxSum([1,4,2,4,2])

/*Given a time in 12-hour AM/PM formart, convert it to millitary(24 hours) time. complete the timeConversion  function in the editor below. it should return a new string representing the input tume in 24 hour format. timeConcersion has the following parameter(s);*/

function timeConversion(s) {
  const [hour, minutes, secModify] = s.split(':')
  const modifyer = secModify.slice(2);
  const sec = secModify.slice(0, 2)
  let newHour;

  if (modifyer === "PM" && hour < "12") {
    newHour = Number(hour) + 12 
  } else if (modifyer === "AM" && hour === "12") {
    newHour = "00"
  } else {
    newHour = hour
  }

  return `${newHour}:${minutes}:${sec}`
}

console.log(timeConversion('02:01:00PM'))

/*There is a collection of input strings and a collection of query strings. For each query, determine how many times it occurs in the list of input strings. return an array of the results */

function matchingStrings(strings, queries) {
  const instances = (arr, k) => {
    let count = 0;
    for (const element of arr) {
      element === k && count++
    }
    return count;
  }

  let instanceArr = [];
  for (let i = 0; i < queries.length; i++) {
    instanceArr[i] = instances(strings, queries[i])
  }

  return instanceArr
}

/*given an array of integers, where all elements but one occurs twice find the unique element*/

function lonelyInteger(a) {
  let uniqueInteger = a.filter((val) => (
    a.indexOf(val) === a.lastIndexOf(val)
  ))

  return uniqueInteger[0]
}


/*you will be given a list of 32 bit unsigned integer. Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer*/


function flippingBits(n) {
  const binary = (n >>> 0).toString(2);
  const bits = Math.clz32(binary);
  const bitArr = binary.padStart(bits, '0').split('')
  let newArr = [];

  for (let i = 0; i < bitArr.length; i++) {
    if (bitArr[i] === '1') {
      bitArr[i] = '0'
      newArr.push(bitArr[i])
    } else {
      bitArr[i] = '1'
      newArr.push(bitArr[i])
    }
  }

  return parseInt(newArr.join(''), 2)
  
}


/*Given two integers, l and r, print all the odd bumbers between l and r (l and r inclusive)*/

function oddNumbers(l, r) {
  const arrLength = Math.abs(l - r);
  let arr = [];
  let oddArr;

  for (let i = 0; i < arrLength; i++) {
    arr[i] = l++;
    arr.pop();
    arr.push(r)
    oddArr = arr.filter((x) => x % 2 === 1)
  }

  return oddArr
}

/* Given a square matrix, calculate the absolute differences between the sum of its diagonals */

function diagonalDifference(arr) {
  const newArr = arr[0].length === 1 ? [...arr.slice(1)] : [...arr] 
  let priSum = 0;
  let secSum = 0;

  for (let i = 0;)
  
}
