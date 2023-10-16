const calculatesum = () => {
  return 3 + 4;
};
// console.log(calculatesum());
function calculatemarks(...marks) {
  return marks;
}
const marks = calculatemarks(2, 3, 5); // gives an array

//object inside function
const user = {
  name: "Dhiraj",
  adress: "siraha",
};
function getuserdetails(anyuser) {
  console.log(
    `the user name is ${anyuser.name} and adress is ${anyuser.adress}`
  );
}
getuserdetails(user);
getuserdetails({ name: "ram", adress: "ayodha" });
//Array inside function
const array1 = [1, 3, 2, 5];
function printarraynumber(arr) {
  let i;
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printarraynumber(array1);
printarraynumber([1, 4, 3, 56, 5]);
