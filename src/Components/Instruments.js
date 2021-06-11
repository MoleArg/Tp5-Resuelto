import React,{useState} from 'react';
import instrumentosJson from "../Api/instrumentos.json"
import Instrument from "./Instrument"

const Instruments = () =>{
    const [instrumentos] = useState(instrumentosJson)
    return(
        <div>
            {instrumentos.instrumentos.map(aux => (<Instrument key={aux.id} instrument={aux}/>))}
        </div>
    )
}

export default Instruments;
//<h1>Cantidad de elementos: {instrumentos.instrumentos.length}</h1>