import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import {trees, wildlife, elevation} from "./parks/RockyMountain"
import * as RMFuctions from "./parks/RockyMountain"

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  console.log(RMFuctions.trees)
  RMFuctions.wildlife()
  RMFuctions.elevation()
  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <div>
        <MesaVerde/>
      </div>
      <div>
        <div>{RMFuctions.trees}</div>      
      </div>
    </div>
  )
}

export default ColoradoStateParks