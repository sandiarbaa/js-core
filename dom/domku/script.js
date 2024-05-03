// Case 1
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.onclick = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  h1.innerText = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};

// Case 2
function generateRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

const kotaks = document.querySelectorAll(".kotak");

// for (let kotak of kotaks) {
//   kotak.addEventListener("click", function () {
//     this.style.backgroundColor = generateRandomColor();
//   });
// }
for (let kotak of kotaks) {
  kotak.addEventListener("click", colorize);
}

const judul = document.querySelectorAll(".judul");

// for (let juduls of judul) {
//   juduls.onclick = function () {
//     juduls.style.backgroundColor = generateRandomColor();
//     juduls.style.color = generateRandomColor();
//   };
// }
for (let juduls of judul) {
  juduls.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = generateRandomColor();
  this.style.color = generateRandomColor();
}
