import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemon]=useState([])
  const[search, setSearch]=useState("")

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res=>res.json())
    .then(data=>setPokemon(data))
  },[])

  //search
  function searchForPokemon(event){
    const searchEvent= event.target.value
    setSearch(searchEvent)
  }

  const filteredPokemon= pokemons.filter(pokemon=>{
    if(search ==="")return true
    return pokemon.name.includes(search)
  })

  //add pokemon
  function addPokemon(newPokemon){
    console.log(newPokemon)
    setPokemon([...pokemons, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon}/>
      <br />
      <Search onSearchForPokemon={searchForPokemon}/>
      <br />
      <PokemonCollection pokemons={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
