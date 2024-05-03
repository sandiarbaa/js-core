const forms = document.querySelector("#search-form");

forms.addEventListener("submit", async function (e) {
  e.preventDefault();
  document.querySelectorAll("img").forEach((img) => img.remove());
  const keyword = forms.elements.query.value;

  const config = {
    // params: { q: keyword, embed: "episodes", imdb: "tt0944947" },
    params: { q: keyword },
  };

  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  // console.log(res.data);
  getImages(res.data);
  forms.elements.query.value = "";
});

const getImages = (shows) => {
  for (const result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
