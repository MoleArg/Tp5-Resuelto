import React from "react";
import InstrumentsJson from "../Api/instrumentos.json";

const InstrumentDetail = ({ match }) => {
  const buscado = match.params.id;

  const dato = InstrumentsJson.instrumentos.find(
    aux => aux.id === buscado
  );

  const {
    instrumento,
    imagen,
    precio,
    costoEnvio,
    cantidadVendida,
    descripcion,
    marca,
    modelo,
  } = dato;
    return(
        <div className="container">
            <div className="row-3 justify-content-between">
                <div className="col-5">
                    <p>{instrumento}</p>
                    <img src={`/assets/img/${imagen}`} alt={imagen} />
                    <p>Descripcion: {descripcion}</p>
                    <p>Marca: {marca}</p>
                    <p>Modelo: {modelo}</p>
                    <p>Precio: ${precio}</p>
                    {costoEnvio === "G" ? 
                    (<div id="gratis">
                        <img src={"/assets/img/camion.png"} alt="camion"/> Envio gratis
                    </div>) 
                    : <p id="envio">Costo de envio ${costoEnvio}</p>}
                    <p>Vendidos: {cantidadVendida}</p>
                </div>
            </div>
        </div>
    )
 }    

 export default InstrumentDetail;