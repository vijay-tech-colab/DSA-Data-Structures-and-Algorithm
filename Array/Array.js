//! How do you create an empty Array in js

//* using []
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);

//* using constructor
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);


//! how do access first elm and last element of an array 
const firstElm = arr[0];
console.log(firstElm);
const lastElm = arr[arr.length - 1];
console.log(lastElm);

// ! how do remove first and last element from array 
// using pop method we can delete last element 
const num = [1, 2, 3, 4, 5, 6, 7];
console.log(num);
const deletedElem = num.pop();
console.log(deletedElem, num);

// using pop method we can delete first element 
num.shift();
console.log(num);



// ! how do you check if an element exist in array

const firstElement = (arr, target) => {
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === target){
    //         return true
    //     }

    // }
    // return false
    return arr.includes(target) ? true : false
};
console.log(firstElement([1, 2, 3, 4, 5, 6]));


const firstElementIndex = (arr, target) => {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === target) {
    //         return i
    //     }
    // }
    // return -1
    return arr.indexOf(target);
}
console.log(firstElementIndex([2, 3, 4, 5, 6, 7], 7));

// ! deep copy v/s shallow copy
const students = [
    ["Vijay Kumar", 21, ["JavaScript", "Node.js", "React"]],
    ["Aman Singh", 22, ["Python", "Machine Learning", "Data Science"]],
    ["Pooja Sharma", 20, ["HTML", "CSS", "Tailwind"]]
];

// ! shallow copy of an array 
// const copyStudents = students.concat();
// const copyStudents = students.slice(0);
// const copyStudents = Array.from(students);
// const copyStudents = [...students];


//! deep copy of an array
const copyStudents = JSON.parse(JSON.stringify(students));
copyStudents[0][2][2] = "TypeScript";
console.log("students" ,students);
console.log("copyStudent" ,copyStudents);

