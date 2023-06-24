import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../../assets/css/App.css';
const CardForecast = (props)=> {
   const {ciudad} =props;
   const [data, setData] = useState({});
   let url =`https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205&q=${ciudad}&days=3&lang=es`
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
    }, [ciudad,url]);
    const { localidad, region, pais, pronostico }= data;
    return (
      <div className="container"> 
        {ciudad && (
         <div className="row container3">
              <p>{localidad}</p>
              <p>{region}</p>
              <p>{pais}</p>
              <div className="row ">
              { 
                  pronostico && pronostico.map(item=>
                  <div className='card container2'>
                    <ul>
                    <li key={item.date} className="listStyle">
                      <p>{item.date}</p>
                      <p>Máx: {item.day.maxtemp_c} ºC</p>
                      <p>Mín: {item.day.mintemp_c} ºC</p>
                      <img src={item.day.condition.icon} width="80px" heigth="100" alt="Icono Tiempo"/>
                      <p>{item.day.condition.text}</p> </li>
                    </ul>
                  </div>
                  )}
            </div>
          </div> 
        )}
     </div> 
    ) 
};
export default CardForecast;