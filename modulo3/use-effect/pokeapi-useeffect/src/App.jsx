import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  // Passo 3b
  // Implemente suas variáveis de estado aqui.
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState ("")
  

  // Passo 3c
   useEffect(() =>{
      axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        setPokeList( res.data.results );
        /* console.log(pokeList) para verificar se esta nos retornando a array de objetos  */
      })
      .catch((err) => {
        console.log("Erro ao buscar pokemon na Api");
      });

   },[])

  // Passo 3a
  const changePokeName = (event) => {
    setPokeName(event.target.value)

    // Passo 3d
    // Implementa a função aqui.
    
  };

  // Passo 3e
   const pokeOptions = pokeList.map(pokemon => {
     return (
       <option key={pokemon.name} value={pokemon.name}>
         {pokemon.name}
       </option>
     );
   });

  // Passo 4a
  const pokemon = pokeName && <PokeCard pokeName={pokeName}/>;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label>
         {/* Passo 3a */}
        <select id={"select-pokemon"} value={pokeName} onChange={changePokeName} >
          <option value={""}>Nenhum</option>
        
          {/* Passo 3e */}
           {pokeOptions} 
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
};

export default App;

