// ! Question 1: sum of all natural number 1 to n ?

function sumOfNaturalNum(num) {
    // let sum = 0;
    // for(let i = 1; i <= num; i++){
    //     sum += i;
    // }
    // return sum

    return num*(num + 1)/2
}

console.log(sumOfNaturalNum(10));
console.log(sumOfNaturalNum(100));


// ! Question 2: sum of digits of number ?

function sumOfDigits (num) {
    let sum = 0
    while(num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum
}

console.log(sumOfDigits(12345));

// ! Question 3: count the number of digits of a number ? 

function countDigits(num){
    num = Math.abs(num); // convert num to absolute value
    let count = 0;
    do{
        count++;
        num = Math.floor(num /10);
    }while(num > 0);
    return count
}

console.log(countDigits(123456789));