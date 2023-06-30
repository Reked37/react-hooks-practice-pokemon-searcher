import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemonData}) {
  const{name, hp, sprites}=pokemonData
  const[flipPicture, setPicture]=useState(true)

  function handleFlip(){
    setPicture(!flipPicture)
  }

  return (
    <Card>
      <div onClick={handleFlip}>
        <div className="image">{
          flipPicture?
          <img src={sprites.front} alt={sprites.front} /> :
          <img src={sprites.back} alt={sprites.back}/>
        }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
