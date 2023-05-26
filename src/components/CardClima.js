import React, {useState} from "react";
import Form from "./Form";
import Card from './Card';
const CardClima = () =>{
  

    let cityurl="&q=";
    let dias="&days=3";
    let urlpronostico=`https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205`;
    
    let urltiempo    =`https://api.weatherapi.com/v1/current.json?key=7b6c78c29c25447aaf5102820232205&lang=es`;

    const [tiempo, setTiempo] = useState({
      city: "",
      country: "",
      temperature: 0,
      condition: "",
      conditionText: "",
      icon: "",
    });
     const [pronostico, setPronostico] = useState(
        {
          date: " ",
          maxtemp_c: 0,
          mintemp_c: 0,
          conditionText: "",
          icon: ""}
    ); 

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
          setTiempo({
            city: tiempo.location.name,
            country: tiempo.location.country,
            datecurrent: tiempo.current.last_updated,
            temperature: tiempo.current.temp_c,
            humidity: tiempo.current.humidity,
            conditionText: tiempo.current.condition.text,
            icon: tiempo.current.condition.icon,
        });
        }).catch(error=>{
          setLoading(false);
          setMostrar(false);
        });   

 // FORECAST  - TRAE LOS DATOS DEL DIA ACTUAL Y DOS DIAS DE PRONOSTICOS

        urlpronostico=urlpronostico + cityurl + loc + dias ; 
        console.log(urlpronostico);
        await fetch(urlpronostico)
          .then((response)=>{
            if(!response.ok) throw{response}
            return response.json();
        }).then ((pronostico)=>{
      //  console.log(pronostico);
      
           setPronostico ({
              date: pronostico.forecast.forecast[1].date,
              /* maxtemp: pronostico.forecast[1].day.maxtemp_c,
              mintemp: pronostico.forecast[1].day.mintemp_c,
              conditionText: pronostico.forecast[n].day.condition.text,
              icon: pronostico.forecast[n].day.condition.icon, */
          },); 
        }).catch(error=>{
            setLoading(false);
            setMostrar(false);
        });

    }
    return (
      <div>
        <React.Fragment>
            <Form
              newLocation={getLocation}
            />
          <Card/>
          { tiempo.city&& (
            <div>
              <div className="column">
                  <div>{tiempo.datecurrent} </div>
                  <div>{tiempo.city} , {tiempo.country}</div>
                  <div>Temperatura: {tiempo.temperature} ºC </div>
                  <div>Humedad : {tiempo.humidity} % </div>
                  <div>Condición: {tiempo.conditionText}</div>
                  <br/><br/>  
              </div>
              <h3>Previsión del tiempo : </h3>
              <div className="column">
                  <div> {pronostico.date} </div>
                  <br/><br/> 
              </div>
            </div>
            )
          }
        </React.Fragment>
      </div>  
    );
}

export default CardClima;