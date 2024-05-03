const h1 = document.querySelector("h1");
const form = document.querySelector("form");
const input = document.querySelector("input");
const notes = document.querySelector("#notes");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value == "") return;
  const list = document.createElement("li");
  list.innerText = input.value;
  notes.appendChild(list);
  input.value = "";
});

// input.addEventListener("change", function (e) {
//   console.log("inputan berubah");
// });

// input.addEventListener("input", function (e) {
//   h1.innerText = input.value;
//   console.log("berubah inputnya");
// });

notes.addEventListener("click", function (e) {
  // console.dir(e.target);
  // e.target.remove();
  e.target.nodeName === "LI" && e.target.remove();
});
