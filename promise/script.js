// const contohPromise = () => {
//   return new Promise((resolve, reject) => {
//     // resolve(() => "berhasil");
//     reject(() => "gagal");
//   });
// };

const changeBackgroundColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // document.body.style.backgroundColor = color;
      resolve((document.body.style.backgroundColor = color));
    }, delay);
  });
};

// changeBackgroundColor("red", 3000).then(() =>
//   changeBackgroundColor("purple", 1000)
// );

// changeBackgroundColor("red", 3000).then(() =>
//   changeBackgroundColor("yellow", 1000)
// )
// .then(() => changeBackgroundColor("green", 1000))
// .then(() => changeBackgroundColor("blue", 1000));

const contohPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const cobaPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("berhasil");
    resolve();
    // resolve(console.log("berhasil"));
  });
};
