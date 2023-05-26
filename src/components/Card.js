import React from "react";
import Spin from './Spin';


const Card =(loadingData, setTiempo) => {
    if(loadingData){
        return <Spin/> ;
    }
    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row"> 
         <p> DATOS DE LA TARJETA</p>
         
        </div>
      </div>
    );     
}
export default Card;