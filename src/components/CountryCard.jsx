import React, { useState } from 'react';

function AddressCard() {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  const countries = ['Argentina']; // Lista de países

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h2>Dirección y País de Residencia</h2>
      <div>
        <label>Dirección:</label>
        <input type="text" value={address} onChange={handleAddressChange} />
      </div>
      <div>
        <label>País de Residencia:</label>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Seleccionar país</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AddressCard;
