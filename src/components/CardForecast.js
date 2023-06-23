import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../assets/css/App.css';
// import Spin from './Spin';
const CardForecast = (props)=> {
   const {ciudad} =props;
   const [data, setData] = useState({});
   let leng="&lang=es";
   let dias="&days=3";
   let urlforecast =`https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205&q=`
   let url=urlforecast + ciudad + dias + leng;
    useEffect(() => {
      const buscaData = async () => {
        const { data } = await axios.get(url);
        setData({
          localidad: data.location.name,
          region: data.location.region,
          pais: data.location.pais,
          pronostico: data.forecast.forecastday,
        })
        
      }
      buscaData();
    }, []);

    const { localidad, region, pais, pronostico }= data;
    return (
      <div className="container"> 
        {ciudad && (
         <div className="row">
            <div className="col displayFlex1 ">
              <p>{localidad}</p>
              <p>{region}</p>
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