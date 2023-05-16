import React from "react";
import Spin from './Spin';

const Card =( {loadingData, mostrarData, tiempo, pronosticoData}) => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = day + '/' + month + '/' + year;
  
    if(loadingData){
        return <Spin/> ;
    }

    return (
        <div></div>
    );
}
export default Card;