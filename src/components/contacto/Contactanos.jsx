import './Contactanos.css';
import React, { useState } from 'react';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Funcion para limpiar los campos
    cleanFields(e);

    // Abrimmos el popup
    setIsPopupOpen(true);
  };

  const cleanFields = () =>{
   // Reiniciamos los campos después de enviar el formulario
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <form className='formContacto' onSubmit={handleSubmit}>
      <h2>Deja tu consulta.</h2>
      <br></br>
        <div>
          <label className='labelContacto' htmlFor="firstName">Nombre:</label>
          <input className='inputContacto' type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>

        <div>
          <label className='labelContacto' htmlFor="lastName">Apellido:</label>
          <input className='inputContacto' type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
                
        <div>
          <label className='labelContacto' htmlFor="email">Correo electrónico:</label>
          <input className='inputContacto' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className='labelContacto' htmlFor="message">Mensaje:</label>
          <textarea className='textAreaContacto' id="message" value={message}  onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button className='buttonContacto' type="submit">Enviar Consulta</button>
      </form>

      {/* LLAMADO AL POPUP PARA AVISAR AL USUARIOO */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>¡Mensaje enviado!</h2>
            <br></br>
            <h5>Gracias por contactarnos. Te responderemos pronto.</h5>
            <br></br>
            <button className="popup-button" onClick={closePopup}>Cerrar</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default ContactForm;


