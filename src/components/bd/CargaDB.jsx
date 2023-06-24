import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../assets/css/App.css';
// import Spin from './Spin';
const CargaDB = (props)=> {
  const {ciudad} =props;
   const [data, setData] = useState({});
   let leng="&lang=es";
   let dias="&days=3";
   let urlforecast =`https://api.weatherapi.com/v1/forecast.json?key=7b6c78c29c25447aaf5102820232205&q=`
   let url=urlforecast + ciudad + dias + leng;
    useEffect(() => {
      const guardaData = async () => {
        const { data } = await axios.get(url);
        setData({data})
        axios.post('http://localhost:5000/location',data.location);
        axios.post('http://localhost:5000/forecastday',data.forecast.forecastday);
      }
      guardaData();
    },[])
  
  return (
    <div>
      { 
        <p></p>
      }
    </div>
  );
};
export default CargaDB;