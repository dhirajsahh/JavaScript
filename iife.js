//()() the first one is for function and second one is for its call
(function sum() {
  console.log(3 + 4);
})();
(() => {
  console.log("Hello world");
})();
const obj = function createobj() {
  return { name: "Dhiraj", adress: "siraha" };
};
console.log(obj());
const arrowobj = () => ({ name: "ram" });
console.log(arrowobj());
