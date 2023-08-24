/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a = 3;
console.log(a); //We have key but have not value, that is why we received undefined. When we giving some value to key we receive value output in most case


// Example 2
function sayHello() {
    let message = "Hello";//function have not argument
}

let hello = sayHello(); //function have not argument
console.log(sayHello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${'user'}`);
}

sayHelloToUser(Ku);// not right order to read 


// Example 4
function arr()
let arr = [1, 2, 3];
console.log(arr[3]);//arrow has not index 3
