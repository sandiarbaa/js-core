document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(e);
  // console.log("submitted");
});

// document.querySelector("a").addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("tombol diklik");
// });

document
  .querySelector("a")
  .addEventListener("click", (e) => e.preventDefault());
