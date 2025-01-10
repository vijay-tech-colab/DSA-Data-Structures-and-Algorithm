// Function to find the missing number in an array
function missingNumber(arr) {
    let sum = 0;  // Initialize a variable to hold the sum of all elements in the array

    // Loop through the array and calculate the sum of all numbers
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // Add the current number to the sum
    }

    // Calculate the expected sum of the first n natural numbers (including the missing number)
    // Formula for the sum of first n natural numbers: n*(n+1)/2
    // We subtract the actual sum from the expected sum to find the missing number
    const expectedSum = (arr.length + 1) * (arr.length + 2) / 2;  // Sum of 1 to n
    return expectedSum - sum;  // Return the missing number
}

// Example usage: Find the missing number in the array
const missNum = missingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // The missing number is 5
console.log(missNum);  // Output the missing number (5)
