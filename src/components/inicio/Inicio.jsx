import "../../assets/css/App.css";

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
      <button className="btn btn-dark mb-10">Ingresar</button>
    </div>
  );
}
export default Inicio;
