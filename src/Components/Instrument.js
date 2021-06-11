import React from 'react'
import { useHistory } from "react-router-dom";
require("../Estilo.css");

const Instrument = ({instrument}) => {
    const history = useHistory();
    
    const {
    id,
    instrumento,
    imagen,
    precio,
    costoEnvio,
    cantidadVendida,
    } = instrument;

    const detail = (auxId) =>{
        history.push(`detail/${auxId}`);
    }

    return(
        <div className="container">
            <div className="row-3 justify-content-between">
                <div className="col-5">
                    <p>{instrumento}</p>
                    <img src={`/assets/img/${imagen}`} alt={imagen} />
                    <p>${precio}</p>
                    {costoEnvio === "G" ? 
                    (<div id="gratis">
                        <img src={"/assets/img/camion.png"} alt="camion"/> Envio gratis
                    </div>) 
                    : <p id="envio">Costo de envio ${costoEnvio}</p>}
                    <p>{cantidadVendida} vendidos</p>
                    <button onClick={()=>detail(id)}>Ver detalles</button><br/>    
                </div>
            </div>
        </div>
    )
}

export default Instrument;