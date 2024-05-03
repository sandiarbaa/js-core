// Callback Version
const requestMovie = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure(`Error, Connection Timeout! (${delay})ms`);
    } else {
      success(`Success, ${url} (${delay})ms`);
    }
  }, delay);
};

// requestMovie(
//   "movie.com",
//   (response) => {
//     console.log(`Success: ${response}`);

//     requestMovie(
//       "movie.com",
//       (response) => {
//         console.log(`Success: ${response}`);

//         requestMovie(
//           "movie.com",
//           (response) => {
//             console.log(`Success: ${response}`);

//             requestMovie(
//               "movie.com",
//               (response) => {
//                 console.log(`Success: ${response}`);

//                 requestMovie(
//                   "movie.com",
//                   (response) => {
//                     console.log(`Success: ${response}`);
//                   },
//                   (error) => {
//                     console.log(`Error: ${error}`);
//                   }
//                 );
//               },
//               (error) => {
//                 console.log(`Error: ${error}`);
//               }
//             );
//           },
//           (error) => {
//             console.log(`Error: ${error}`);
//           }
//         );
//       },
//       (error) => {
//         console.log(`Error: ${error}`);
//       }
//     );
//   },
//   (error) => {
//     console.log(`Error: ${error}`);
//   }
// );

// Promise Version
const requestMoviePromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject(`Error, Connection Timeout! (${delay})ms`);
      } else {
        resolve(`Success, ${url} (${delay})ms`);
      }
    }, delay);
  });
};

requestMoviePromise("movie.com")
  .then((result) => {
    console.log("page 1");
    console.log(result);
    return requestMoviePromise("movie.com");
  })
  .then((result) => {
    console.log("page 2");
    console.log(result);
    return requestMoviePromise("movie.com");
  })
  .then((result) => {
    console.log("page 3");
    console.log(result);
    return requestMoviePromise("movie.com");
  })
  .catch((error) => {
    console.log(error);
  });

// requestMoviePromise("movie.com")
//   .then((response) => {
//     console.log(`success: ${response}`);

//     requestMoviePromise("movie.com")
//       .then((response) => {
//         console.log(`success: ${response}`);

//         requestMoviePromise("movie.com")
//           .then((response) => {
//             console.log(`success: ${response}`);

//             requestMoviePromise("movie.com")
//               .then((response) => {
//                 console.log(`success: ${response}`);

//                 requestMoviePromise("movie.com")
//                   .then((response) => {
//                     console.log(`success: ${response}`);
//                   })
//                   .catch((error) => {
//                     console.log(`error: ${error}`);
//                   });
//               })
//               .catch((error) => {
//                 console.log(`error: ${error}`);
//               });
//           })
//           .catch((error) => {
//             console.log(`error: ${error}`);
//           });
//       })
//       .catch((error) => {
//         console.log(`error: ${error}`);
//       });
//   })
//   .catch((error) => {
//     console.log(`error: ${error}`);
//   });
