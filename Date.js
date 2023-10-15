const date = new Date();
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getMinutes());
const hrs = date.getHours();
if (hrs === 11) {
  console.log("its your time");
} else console.log("not your");
console.log(date.toLocaleString());
console.log(date.toJSON());

let currentdate = Date.now();
console.log(currentdate);
