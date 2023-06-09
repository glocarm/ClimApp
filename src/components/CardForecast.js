import React,{useState, useEffect} from 'react';
import '../assets/css/App.css';
// import Spin from './Spin';
let leng="&lang=es";
let dias="&days= 3";
const CardForecast = (props)=> {
   const {ciudad} =props;
    let urlforecast = `https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205&q=`;
    const [data , setData] = useState({});
    urlforecast = urlforecast  + ciudad +  dias  + leng;
    useEffect(()=>{
        const getData=async() =>{
            const response = await fetch (urlforecast);
            const { location, forecast} = await response.json();
            // console.log(forecast);  //trae un arreglo con los dias 0, 1, 2
            setData({
                localidad: location.name,
                region: location.region,
                pais: location.country,
                zona_id : location.tz_id,
                fechadia: location.localtime,
                pronostico:forecast.forecastday,
            });
        }
        getData()
    })
    const { localidad, region, pais, zona_id , fechadia , pronostico } = data;
    console.log(pronostico);
    return (
      <div className=" container2 ">
        {ciudad && (
        <div className="row">
            <div className="col displayFlex1 ">
              <p> {localidad}, {region}</p>
              <p>{pais}</p>
                {
                  pronostico && pronostico.map(item=>
                    <ul>
                    <li key={item.date} className="listStyle">
                      <p>{item.date}</p>
                      <p>Máx: {item.day.maxtemp_c} ºC</p>
                      <p>Mín: {item.day.mintemp_c} ºC</p>
                      <img src={item.day.condition.icon}></img>
                      <p>{item.day.condition.text}</p> </li>
                    </ul>
                  )}
             
            </div>
        </div> 
        )}
     </div> 
    ) 
};
export default CardForecast;