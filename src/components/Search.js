import React from "react";

function Search({onSearchForPokemon}) {

 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSearchForPokemon} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
