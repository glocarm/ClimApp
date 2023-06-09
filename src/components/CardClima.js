import React, {useState , useEffect} from 'react';
import '../assets/css/App.css';
import Form from './Form';
import CardForecast from  './CardForecast';
const CardClima = () =>{
	
	const [loading, setLoading] = useState(false);
	const [location, setLocation] = useState("");
	
  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);   
    console.log(loc);  //Muestra la localidad en la consola del navegador
  }
  return (
    <React.Fragment>
            <Form
              newLocation={getLocation}
            />
           {  <CardForecast ciudad={location} 
            /> }
    </React.Fragment>
)
};
export default CardClima;
