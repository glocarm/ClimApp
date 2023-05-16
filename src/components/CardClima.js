import React, {useState} from "react";
import Form from "./Form";
import Card from './Card';
const CardClima = () =>{
    let urltiempo = "https://api.weatherapi.com/v1/current.json?key=bebcae210c2c49339b8222320230505";
    
    let cityurl="&q=";
  
    let urlpronostico="https://api.weatherapi.com/v1/forecast.json?key=bebcae210c2c49339b8222320230505";

    const [tiempo, setTiempo]=useState([]);
    const [pronostico, setPronostico]=useState([]);
    const [loading, setLoading]=useState(false);
    const [mostrar, setMostrar]=useState(false);
    const [location, setLocation]=useState("");
    
    const getLocation = async(loc) =>{
        setLoading(true);
        setLocation(loc);

        urltiempo = urltiempo + cityurl + loc ;

        await fetch(urltiempo)
          .then((response)=>{
            if(!response.ok) throw{response}
            return response.json();
        }).then ((tiempoData)=>{
            console.log(tiempoData.current); //por ejemplo tiempoData.current o tiempoData.location
            setTiempo(tiempoData);
        }).catch(error=>{
            console.log(error);
            setLoading(false);
            setMostrar(false);
        });

        //AQUI VA EL RESTO
    }
    return (
        <React.Fragment>
            <Form
              newLocation={getLocation}
            />
            <Card
                mostrarData = {mostrar}
                loadingData = {loading}
                tiempoData = {tiempo}
                pronosticoData = {pronostico}
            />
        </React.Fragment>
    );
}

export default CardClima;