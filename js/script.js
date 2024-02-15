// alert("your JS file is connected!!");
// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
console.log("Question 1");
function getOnlyEvens(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && i % 2 == 0) {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
  // return newArray;
}
getOnlyEvens([1, 2, 3, 6, 4, 8]);
getOnlyEvens([0, 1, 2, 3, 4]);
// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
console.log("Question 2");
// function reverseCompare(twoDigitNum) {
//   const numString = twoDigitNum.toString();
//   const digits = numString.split("");
//   console.log(digits);
//   const revArr = [];
//   revArr[1] = digits[0];
//   revArr[0] = digits[1];
//   console.log(revArr);
//   if (parseInt(digits.join(""), 10) > parseInt(revArr.join(""), 10)) {
//     console.log("ok");
//   } else {
//     console.log("not ok");
//   }
// }

// reverseCompare(72);
// reverseCompare(23);

function reverseCompare(number) {
  const originalNumber = parseInt(number);
  const reversedNumber = parseInt(
    number.toString().split("").reverse().join("")
  );

  if (originalNumber > reversedNumber) {
    console.log("Ok");
  } else {
    console.log("Not ok");
  }
}

reverseCompare(72);
reverseCompare(23);
reverseCompare(11);

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1
console.log("Question 3");
function returnFactorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * returnFactorial(num - 1);
  }
}
console.log(returnFactorial(0));
console.log(returnFactorial(5));

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6
console.log("question 4");
function isMeeraArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const doubledNum = num * 2;
    if (arr.includes(doubledNum)) {
      console.log("I am NOT a Meera array");
      return false; // Early exit if not a Meera array
    }
  }

  console.log("I am a Meera array");
  return true; // Indicate it's a Meera array
}
isMeeraArray([10, 4, 0, 5]);
isMeeraArray([7, 4, 9]);
isMeeraArray([1, -6, 4, -3]);

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.
console.log("Question 5");
function isDual(arr) {
  const counts = {};

  for (const num of arr) {
    if (!counts[num]) {
      counts[num] = 1;
    } else {
      counts[num]++;
    }

    if (counts[num] > 2) {
      return 0;
    }
  }

  for (const count of Object.values(counts)) {
    if (count !== 2) {
      return 0;
    }
  }

  return 1;
}
console.log(isDual([1, 2, 1, 3, 3, 2]));
console.log(isDual([2, 5, 2, 5, 5]));
console.log(isDual([3, 1, 1, 2, 2]));

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
console.log("Question 6");
function digitalClock(seconds) {
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(digitalClock(5025)); // Output: "01:23:45"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"

// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.
console.log("group work");
function lucky_sevens(numbers) {
  // Check if the array has at least 3 elements
  if (numbers.length < 3) {
    return false;
  }

  // Loop through the array, checking if the current element and the next two sum to 7
  for (let i = 0; i < numbers.length - 2; i++) {
    if (numbers[i] + numbers[i + 1] + numbers[i + 2] === 7) {
      return true;
    }
  }

  // If no match is found, return False
  return false;
}
console.log(lucky_sevens([1, 2, 4, 5, 6, 7]));



// function sumToseven(lucky7) {
//   for (let i = 0; i < lucky7.length - 2; i++) {
//     if (lucky7[i] + lucky7[i + 1] + lucky7[i + 2] == 7) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(sumToseven([0, 5, 1, 4, 2, 1, 0, 1]));
// console.log(sumToseven([3, 5, 1, 4, 5, 6]));



// function lucky_sevens(numbers) {
//   // Check if the array has at least 3 elements
//   if (numbers.length < 3) {
//     return false;
//   }

//   // Check for sums of 7 in every consecutive triple using slice
//   return numbers.some(
//     (_, index, arr) =>
//       index < arr.length - 2 &&
//       arr.slice(index, index + 3).reduce((acc, num) => acc + num, 0) === 7
//   );
// }
