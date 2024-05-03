// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     // if (!res.ok) {
//     //   throw Error("Could not fetch the data for that resource");
//     // }
//     // console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     // const res = data;
//     // console.log(res.name);
//     console.log("json 1", data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     if (!res.ok) {
//       throw Error("Could not fetch the data for that resource");
//     }
//     // console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     console.log("json 2", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const loadData = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (error) {
//     // proses lainnya
//     // misal munculkan popup atau redirect dll.
//     console.log("error", error);
//   }
// };

// loadData();

// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log(err.response.headers);
//   });

const getDetailPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};

getDetailPeople(5);
