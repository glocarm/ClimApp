import React from "react";
/*import '../assets/css/stylegrup.css';*/

const DataGrup = ({ id, img, nombre, github, ocupación, meta }) => {

    return (

        <div className="tarjetaN" key={id}>
            <div className="tarjeta_completa">
                <div className="avatar">
                   <img src={img} alt={nombre}/>
                </div>
                <div className="data">
                   <h3>{nombre}</h3>
                   <p ><b>GitHub: </b>{github}</p>
                   <p ><b>Ocupación: </b>{ocupación}</p>
                   <p ><b>Meta: </b>{meta}</p>
                </div>
            </div>
        </div>
    )
};

export default DataGrup;
