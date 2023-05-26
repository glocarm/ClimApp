import '../assets/css/App.css';

function Inicio() {
  return (
    <div className="App">
		<div>
			<a href="https://www.weatherapi.com/" title="Free Weather API">
			<img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" width="400" heigth="500" border="0"/></a>
        </div>
        <button className='btn btn-dark mb-10'>Ingresar</button>
    </div>
  );
}
export default Inicio;