function append(data) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

function requestPokemons() {
  fetchPokemon("pikachu");
  fetchPokemon("charmandeeeer");
  fetchPokemon("squirtle");
  fetchPokemon("lapras");
  fetchPokemon("abra");
}

function extractNameAndImage(data) {
  const pokemon = {
    name: data.name,
    imageUrl: data.sprites.front_default
  }
  return pokemon;
}

async function fetchPokemon(poke) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    const data = await response.json();
    const pokemon = extractNameAndImage(data);
    append(pokemon)
  } catch (error) {
    console.log(error)
  } 
}

window.onload = requestPokemons;