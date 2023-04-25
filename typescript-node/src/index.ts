import { getMarvelHero } from "./generics/get-marvel-hero";
import { getPokemon } from "./generics/get-pokemon";

getMarvelHero('Wolverine')
    .then(hero => console.log(hero.data.results[0].name.toUpperCase(), hero.data.results))
    .catch(error => console.log(error))

getPokemon(150)
    .then(pokemon => console.log(pokemon.name.toUpperCase(), pokemon.abilities))
    .catch(error => console.log(error))
