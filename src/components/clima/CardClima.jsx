import React, {useState , useEffect} from 'react';
import Form from '../formciudad/Form';
import CardForecast from './CardForecast';
const CardClima = () =>{	
	const [loading, setLoading] = useState(false);
	const [location, setLocation] = useState("");
  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);  
  }
  return (
    <React.Fragment>
            <Form
              newLocation={getLocation}
            />
          {
             <CardForecast ciudad={location}/>
           }    
    </React.Fragment>
)
};
export default CardClima;
