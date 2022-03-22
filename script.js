let bigDiv = document.querySelector(".big-div");
let leftSection = document.querySelector(".left-section");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let rightSection = document.querySelector(".right-section");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
btn1.addEventListener("click", () => {
  one.classList.toggle("one");
  four.classList.toggle("four");
});
btn2.addEventListener("click", () => {
  one.classList.toggle("one");
  four.classList.toggle("four");
});
