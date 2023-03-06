import { GetPokemon } from "./generics/get-pokemon";

GetPokemon(1)
    .then(res => console.log(res.sprites.front_shiny))
    .catch(e => console.log(`Something went wrong: ${e}`))
    .finally(() => console.log('GetPokemon ended.'))