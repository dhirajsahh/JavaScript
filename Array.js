const arr = [0, 1, 2, 3, 4, 5];
const arr1 = arr.slice(1, 3);
const arr2 = arr.splice(1, 3);
console.log(arr);
console.log(arr1);
console.log(arr2);
console.log(arr.includes(2));

//splice ma original array manipulate hunxa
//slice ma original array manipulate hudaina
const array1 = [1, 2, 3, 4];
const array2 = ["a", "b", "c", "d"];
const array3 = [...array1, ...array2];
console.log(array3);
const array4 = [...array1];
