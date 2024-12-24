//!Question 1: Write a JavaScript function to generate the Fibonacci series up to a given number n. The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, starting with 0 and 1.

function getNthFibonacci(num) {
    let prev = 0, curr = 1, next;

    if (num < 2) {
        return num;
    }

    for (let i = 2; i <= num; i++) { // Start from index 2
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr; // The nth Fibonacci number
}

const n = 10; // Change this to test with a different value
console.log(`The ${n}th Fibonacci number is:`, getNthFibonacci(n));
