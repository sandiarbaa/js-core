const section = document.querySelector("#section");
const paragraf = document.querySelector("#paragraf");
const button = document.querySelector("#changeColor");

button.addEventListener("click", function (e) {
  alert("button click");
  e.stopPropagation(); // akan memberhentikan event parentnya
});

paragraf.addEventListener("click", function (e) {
  // alert("paragraf click");
  paragraf.classList.toggle("hide");
});

// section.addEventListener("click", function (e) {
//   alert("section click");
// });
