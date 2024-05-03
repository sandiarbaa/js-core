const jokes = document.querySelector("#jokes");
const buttonAddJoke = document.querySelector("button");

const addJoke = async () => {
  const jokeText = await getJokes();
  const joke = document.createElement("li");
  joke.append(jokeText);
  jokes.appendChild(joke);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    const res = await axios.get("https://icanhazdadjoke.com/", config);
    // console.log(res);
    return res.data.joke;
  } catch (error) {
    return "Jokes not available!";
  }
};

buttonAddJoke.addEventListener("click", addJoke);
