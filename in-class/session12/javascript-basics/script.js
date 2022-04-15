// primitive types in JavaScript

let name = "doug";

// array
    // index:    0  1   2   3
let myNumbers = [3, 8, 20, 23, 6, 7, 89];

// console.log(myNumbers[2]);

// console.log("array length: ", myNumbers.length)

// console.log("the letter g: ", name[3]);

// conditional statement a.k.a. an if-statement
// if(myNumbers.length < 5) {
//     console.log("this is a short list of numbers")
// }

// for(let i = 10; i > 0; i--)
// {
//     // loop body, everything in here is executed each time through the loop
//     console.log("cool" + i);
// }

//addOneAndTwo()

//let sum = addTwoNumbers(1000, 8000000)
//console.log(sum);



function addOneAndTwo() {
    console.log(1 + 2);
}

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}


// this function creates an array, and fills it with random numbers based on the length argument

function createRandomNumberList(length)
{
    let randomNumbersArray = [];
    for(let i = 0; i < length; i++) {
        
        // generate random number between 0 and 100 (not inclusive)
        const randomNumber = Math.random() * 100;
        randomNumbersArray.push(randomNumber);
    }

    //console.log(randomNumbersArray);

    return randomNumbersArray;
}

let myRandomNumbers = createRandomNumberList(3000);

console.log(myRandomNumbers)

console.log(myRandomNumbers[40])




let a = 7
let b = 9