// try {
//     input = hallo('pagi');
// } catch (error) {
//     console.log(error);
// }

// console.log('ok');

// const person = {
//     name: 'Sandi',
//     age: 19,
//     sayHello: function () {
//         // console.log(`Hello, my name is ${this.name}`);
//         // return `Hello, my name is ${this.name}`;
//         return this.age;
//     },
//     say: () => {
//         setInterval(() => {
//             // console.log('interval');
//             console.log('interval');
//         }, 3000);
//     }
// }

// const timer = setInterval(() => {
//     console.log(Math.random());
// }, 2000);;

// const angka = [3,1,4,2,5]
// const nama = ['Sandi', 'Arba', 'Putra']

// const campuran = [...angka, ...nama].sort()

// const user = {
//   name: "Sandi",
//   email: "sandi@gmail.com",
// };

// const credentials = {
//   password: "password",
//   token: "142312dsjdsbfd44",
// };

// const userDb = {
//   role: "Admin",
//   ...user,
//   confirmPassword: "confirmPassword",
//   ...credentials,
// };
// console.log(userDb);

// const obj1 = { a: 1, b: 8 };
// const obj2 = { b: 5, c: 4 };

// const combinedObj = { ...obj1, ...obj2 };
// console.log(combinedObj); // Output: { a: 1, b: 3, c: 4 }

// const nama = ["Sandi", "Arba", "Putra", "Joko", "Rafi"];

// const pemenang = (gold, silver, bronze, ...remaining) => {
//   console.log(`Gold medal is ${gold}
// Silver medal is ${silver}
// bronze medal is ${bronze}
// remaining participants: ${remaining}`);
// };

// const angka = [1, 2, 3];
// const nama = {
//   name1: "Sandi",
//   name2: "Arba",
// };

// const nama = ["Sandi", "Arba", "Putra", "Deli", "Akmal", "Xhaiolie"];

// try {
//   const campuran = [...angka, ...nama];
//   console.log(campuran);
// } catch (error) {
//   console.log(error);
// }
// console.log("ok");

// const [gold, silver, bronze, ...peserta] = nama;

// const user = {
//   name: "Sandi",
//   email: "sandi@gmail",
// };

// const { phone = "08123545875", email: emailAkuYah, name } = user;

// const angka = [{ name: "Sandi", age: 19 }, 3, 2, 4, 5];

// function tambah(a, b, ...all) {
//   //   console.log(all);
//   console.log(typeof a);
//   console.log(a);
//   //   return a + b;
// }

// const user = { name: "Sandi", email: "sandi@gmail", role: "Admin" };
// const userAndRole = ({ name: namaku, role, password = "12345" }) => {
//   return `${namaku} - ${role} - ${password}`;
// };
// const userAndRole = (name, role) => {
//   return `${name} - ${role}`;
// };

const animes = [
  {
    title: "Attack on Titan",
    year: 2013,
    rating: 9.5,
  },
  {
    title: "One Piece",
    year: 1999,
    rating: 9.8,
  },
  {
    title: "Naruto",
    year: 2002,
    rating: 9.6,
  },
  {
    title: "Dragon Ball",
    year: 1986,
    rating: 8.5,
  },
  {
    title: "Bleach",
    year: 2004,
    rating: 8.6,
  },
];

const anime = animes.map(({ title, year, rating }) => {
  return `${title} - ${year} - ${rating}`;
});

// destructuring parameter from object argument
const animeFilter = animes
  .filter((anime) => anime.rating < 9)
  .map(({ title, year, rating }) =>
    console.log(`${title} - ${year} - ${rating}`)
  );
