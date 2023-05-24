import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function BirthdayCard() {
  const [fechaNacimiento, setFechaNacimiento] = useState(null);
  const fechaActual = new Date();

  const handleFechaNacimientoChange = (date) => {
    setFechaNacimiento(date);
  };

  return (
    <div>
      <h2>Seleccionar Fecha de Nacimiento</h2>
      <DatePicker
        selected={fechaNacimiento}
        onChange={handleFechaNacimientoChange}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        maxDate={fechaActual}
        placeholderText="Seleccionar fecha de nacimiento"
      />
    </div>
  );
}

export default BirthdayCard;
