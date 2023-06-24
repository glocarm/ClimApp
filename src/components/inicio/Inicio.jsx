import "../../assets/css/App.css";
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="App">
      <div>
        <img
          src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
          alt="Weather data by WeatherAPI.com"
          align="center"
          width="400"
          heigth="500"
          border="0"
        />
      </div>
      <div>
      <Link to="/Home">
      <button className="btn btn-dark mb-10">Ingresar</button>
     </Link>
     </div>
      
    </div>
  );
}
export default Inicio;
