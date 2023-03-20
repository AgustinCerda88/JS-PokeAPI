const getPokes = async (web) => {
  try {
    const respuesta = await fetch(web);
    const res = await respuesta.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

const pokeAll = [];
const init = async () => {
  for (let i = 1; i <= 151; i++) {
    const pokemons = await getPokes(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokeAll.push(pokemons);
  }

  const pokemapeados = mapeo(pokeAll);
  for (const pok of pokemapeados) {
    printPokes(pok);
  }
};


const mapeo = (pokemons) => {
  return pokemons.map((pok) => ({
    nombre: pok.name,
    imagen: pok.sprites.other.home.front_default,
    types: pok.types.map((type) => type.type.name),
    id: pok.id,
    order: pok.order,
  }));
};

const printPokes = (pok) => {
  const div$$ = document.createElement("div");
  div$$.className = "pokes";
  div$$.setAttribute("filter", pok.nombre);
  div$$.innerHTML = `
  <span class="pokes__header">
  <p class="pokes__types">TIPO: ${pok.types}</p>
  </span>
  <img class="pokes__img" src="${pok.imagen}"/>
  <p class="pokes__id">${pok.id}</p>
  <h3 class="pokes__name">${pok.nombre}</h3>
     `;

  const container$$ = document.querySelector(".container");
  container$$.appendChild(div$$);

};


const filter$$ = document.querySelector(".input__filter");

filter$$.addEventListener("keyup", (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Escape") e.target.value = "";
    document.querySelectorAll(".pokes").forEach((coincidencia) => {
      console.log(coincidencia.getAttribute("filter"));
      coincidencia
        .getAttribute("filter")
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
        ? coincidencia.classList.remove("filtro")
        : coincidencia.classList.add("filtro");
    });
  }
});

init();
