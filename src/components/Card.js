import React from "react";
import Spin from './Spin';


const Card =( { tiempo, pronostico,  loadingData, mostrar, location }) => {
    
    if(loadingData){
        
        return <Spin/> ;
    }
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          <ul>
            <p >Mostrar Tarjeta del Tiempo y Tarjeta de Pronostico a 2 Dias</p> 
          </ul>
        </div>
      </div>
    );     
    
}
export default Card;