// const p1 = document.querySelector("#p1-display");
// const p2 = document.querySelector("#p2-display");
// const p1Button = document.querySelector("#p1-button");
// const p2Button = document.querySelector("#p2-button");
// const resetButton = document.querySelector("#reset");
// const winPointOption = document.querySelector("#winpoint");

// let p1Score = 0;
// let p2Score = 0;
// let winpoin = 3;
// let isGameOver = false;

// // for (let value of optionValue) {
// //   selectWinPoinValue.addEventListener("change", function () {
// //     console.log(value.value);
// //     // var winpoin = value.value;
// //   });
// // }
// function reset() {
//   isGameOver = false;
//   p1Score = 0;
//   p2Score = 0;
//   p1.textContent = 0;
//   p2.textContent = 0;
// }

// p1Button.addEventListener("click", function () {
//   if (!isGameOver) {
//     p1Score++;
//     p1.textContent = p1Score;
//     if (p1Score === winpoin) {
//       isGameOver = true;
//     }
//   }
// });

// p2Button.addEventListener("click", function () {
//   if (!isGameOver) {
//     p2Score++;
//     p2.textContent = p2Score;
//     if (p2Score === winpoin) {
//       isGameOver = true;
//     }
//   }
// });

// resetButton.addEventListener("click", reset);

// winPointOption.addEventListener("change", function () {
//   winpoin = parseInt(this.value);
//   reset();
// });

const p1 = document.querySelector("#p1-display");
const p2 = document.querySelector("#p2-display");
const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const resetButton = document.querySelector("#reset");
const winPointOption = document.querySelector("#playto"); // Changed from "#winpoint" to "#playto"

let p1Score = 0;
let p2Score = 0;
let winpoin = 3;
let isGameOver = false;

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
}

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    p1.textContent = p1Score;
    if (p1Score === winpoin) {
      isGameOver = true;
    }
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    p2.textContent = p2Score;
    if (p2Score === winpoin) {
      isGameOver = true;
    }
  }
});

resetButton.addEventListener("click", reset);

winPointOption.addEventListener("change", function () {
  winpoin = parseInt(this.value);
  reset();
});
