const pokedex$$ = document.querySelector("pokedex");
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input"); 



const getPokes = async (url) => {
    try {
      const respuesta = await fetch(url);
      const res = await respuesta.json();
      //comprobamos que nos devuelve este result, tenemos que dejarlo en el punto para encontrarnos en el array
      // console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const mapear = (characters) => {
    return characters.map((character) => ({
      nombre: character.name,
      imagen: character.sprites.front_default,
      orden: character.order,
      types: character.types.map((type) => type.type.name).join(', '),
      id: character.id,
    }));
  };
  const printPokes = (characters) => {
    console.log(characters)
    const cromo = 
      <div class = "tarjeta">
          <h2 class = "pokeName"> ${characters.nombre} </h2>
          <div class = "foto__Poke">
          <img src="${characters.imagen}" alt="${characters.nombre}"/>
          </div>
          <div class = "info"> ${characters.orden}, ${characters.types} ${characters.id} 
          </div>
      
      </div>;
  const container$$ = document.querySelector(".container")
      // console.log(cromo);
      container$$.innerHTML += cromo;
  
  };
  const bolaPokemons = [];
  
  const init = async () => {
    for (let i = 1; i <= 151; i++) {
      const pokesRecuperados = await getPokes(
        `https:pokeapi.co/api/v2/pokemon/${i}`
      );
  
      bolaPokemons.push(pokesRecuperados);
    }
  
    const pokemonsMapeados = mapear(bolaPokemons);
  //   console.log(pokemonsMapeados);
  
    for (const putoPoke of pokemonsMapeados) {
        printPokes(putoPoke);
  
    }
  };
  
  init();