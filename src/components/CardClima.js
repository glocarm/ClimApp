import React, {useState} from "react";
import Form from "./Form";
import Card from './Card';
const CardClima = () =>{
    let cityurl="&q=";
    let dias="&days=3";
    let urlpronostico="https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205";
    
    let urltiempo    ="https://api.weatherapi.com/v1/current.json?key=7b6c78c29c25447aaf5102820232205";

    const [tiempo, setTiempo]=useState([]);
    const [pronostico, setPronostico]=useState([]);
    const [loading, setLoading]=useState(false);
    const [mostrar, setMostrar]=useState(false);
    const [location, setLocation]=useState("");
    
    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

    urltiempo=urltiempo + cityurl + loc ;

    // CURRENT  - TRAE LOS DATOS DEL DIA ACTUAL 
    await fetch(urltiempo)
    .then((response)=>{
      if(!response.ok) throw{response}
      return response.json();
      }).then ((tiempo)=>{
           console.log(tiempo);
           setTiempo(tiempo);
       }).catch(error=>{
           setLoading(false);
           setMostrar(false);
  });

 // FORECAST  - TRAE LOS DATOS DEL DIA ACTUAL Y DOS DIAS DE PRONOSTICOS

  urlpronostico=urlpronostico + cityurl + loc + dias ; 

        await fetch(urlpronostico)
          .then((response)=>{
            if(!response.ok) throw{response}
            return response.json();
        }).then ((pronostico)=>{
          console.log(pronostico);
           setPronostico(pronostico);
        }).catch(error=>{
            setLoading(false);
            setMostrar(false);
        });

    }
    return (
        <React.Fragment>
            <Form
              newLocation={getLocation}
            />
            <Card/> 
        </React.Fragment>
         
    );
}

export default CardClima;