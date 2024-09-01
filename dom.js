const container = document.querySelector("#container");

const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 1025; i++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");
  pokeBall.addEventListener("click", () => {
    alert("click");
  });

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImgUrl}${i}.png`;

  const label = document.createElement("span");
  label.innerText = `#${i}`;

  pokeBall.appendChild(imgPokemon);
  pokeBall.appendChild(label);
  container.appendChild(pokeBall);
}
