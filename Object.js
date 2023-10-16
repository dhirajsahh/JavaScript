const book1 = {
  name: "basic electrical",
  price: 200,
  author: "manish manisha",
};
const bookdetails = {
  sem: "1st",
  marks: "80",
};
const book = { ...book1, bookdetails };
console.log(book.bookdetails.sem);
console.log(book);
const singleobj = { ...book1, ...bookdetails };
console.log(singleobj);
const key = Object.keys(book1); //returns array
console.log(key);
const value = Object.values(book1); //return array
console.log(value);
const keyvalue = Object.entries(book1);
console.log(keyvalue);
console.log(keyvalue[2]);
