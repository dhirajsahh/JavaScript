const arr = [1, 2, 3, 4, 5];
const arr1 = arr.filter((item) => item > 2); // with () you dont have return
console.log(arr1);
const arr2 = arr.filter((item) => {
  return item > 3; //with scope resolution{} you must have return
});
console.log(arr2);
const arr3 = arr.map((item) => item * 3);
console.log(arr3);
const arr4 = arr.reduce((acc, curvalue) => {
  return acc + curvalue;
}, 0);
console.log(arr4);
