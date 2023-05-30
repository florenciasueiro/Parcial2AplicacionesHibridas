import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useEditarUsuario from '../Service/APIeditarUsuario'

function BirthdayCard() {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);

  const editar =useEditarUsuario();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  let datosIngresados=[];
  const fechaActual = new Date();

  const handleFechaNacimientoChange = (date) => {
    setFechaNacimiento((date.getTime()));
  };
  const handleClick = () => { 
    usuario.fechaNac =(fechaNacimiento)/1000;
    editar(usuario);
  }

  return (
    <div>
      <h2>Seleccionar Fecha de Nacimiento</h2>
      <DatePicker
        selected={fechaNacimiento}
        onChange={handleFechaNacimientoChange}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        maxDate={fechaActual}
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        placeholderText="Seleccionar fecha de nacimiento"
      />
      <button onClick={handleClick}>Guardar Cambios</button>
    </div>
  );
}

export default BirthdayCard;
