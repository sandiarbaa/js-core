// async function hello() {
//   return "hello sandi";
// }

// hello()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const changeBackgroundColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // document.body.style.backgroundColor = color;
      // resolve();
      // resolve(alert(color));
      resolve((document.body.style.backgroundColor = color));
      // throw new Error("bro error nih");
      // throw "bro error nih";
    }, delay);
  });
};

async function changeColor() {
  await changeBackgroundColor("red", 1000);
  await changeBackgroundColor("yellow", 1000);
  await changeBackgroundColor("green", 1000);
  await changeBackgroundColor("blue", 1000);
  await changeBackgroundColor("violet", 1000);
  await changeBackgroundColor("black", 1000);
  return "all done";
  // throw "bro error";
}

changeColor().then((res) => console.log(res));

async function printRainbow() {
  await changeColor();
  console.log("all done from rainbow");
}

printRainbow();
