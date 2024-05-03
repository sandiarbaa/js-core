const container = document.querySelector("#container");

const imgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 0; i <= 1025; i++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  const pokemonImg = document.createElement("img");
  pokemonImg.setAttribute("src", `${imgUrl}${i}.png`);

  const pokemonType = document.createElement("span");
  pokemonType.innerText = `#${i}`;

  pokeBall.appendChild(pokemonImg);
  pokeBall.appendChild(pokemonType);
  container.appendChild(pokeBall);
}
