import React,{useState} from 'react';

const Form = ({newLocation}) => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(city===""||!city) return;
        newLocation(city); 
    }
    return (
        <div className='container'>
            <form onSubmit={(onSubmit)}>
                <div className='input-group mb-3 mx-auto'>
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)}/>
                    <button className='btn btn-primary input-group-text' type="submit"> Buscar </button>
                </div>
            </form>
            <typography>
                  Powered by <a href="https://www.weatherapi.com/" title="Free Weather API">WeatherAPI.com</a>
            </typography>
            
        </div>
    );
}

export default Form;