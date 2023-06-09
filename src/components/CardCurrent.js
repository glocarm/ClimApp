import React, { useState, useEffect } from "react";
import "../assets/css/App.css";
// import Spin from './Spin';
let leng = "&lang=es";
const CardCurrent = (props) => {
  const { ciudad } = props;
  let urltiempo = `https://api.weatherapi.com/v1/current.json?key=7b6c78c29c25447aaf5102820232205&q=`;
  const [data, setData] = useState({});
  urltiempo = urltiempo + ciudad + leng;
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(urltiempo);
      const { location, current } = await response.json();
      setData({
        localidad: location.name,
        region: location.region,
        pais: location.country,
        fechadia: location.localtime,
        climadia: current.temp_c,
        sensacion: current.feelslike_c,
        condicion: current.condition.text,
        icono: current.condition.icon,
      });
    };

    getData();
  });
  const {
    localidad,
    region,
    pais,
    fechadia,
    climadia,
    sensacion,
    condicion,
    icono,
  } = data;

  return (
    <div className="container2 ">
      {ciudad && (
        <div className="row">
            <div className="col displayFlex1 ">
                <p>{localidad}, {region}</p>
                <p>{pais}</p>
                <p>{fechadia}</p>
                <p> {climadia} °C</p>
                <p> Real Feel: {sensacion} °C </p>
                <img src={icono}></img>
                <p>{condicion} </p>
                <br></br>
            </div>
          </div>
        )}
    </div>
  );
};
export default CardCurrent;
