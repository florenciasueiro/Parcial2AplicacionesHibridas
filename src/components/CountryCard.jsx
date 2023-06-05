import React, { useState } from 'react';
import PlacesAutocomplete from './GooglePlace';
import useEditarUsuario from '../Service/APIeditarUsuario'

function AddressCard() {
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const countries = ['Argentina']; // Lista de países
  const editar =useEditarUsuario();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSelectCoordinates = (selectedCoordinates) => {
    setCoordinates(selectedCoordinates);
    console.log(selectedCoordinates);
  
    getAddressFromCoordinates(selectedCoordinates.lat, selectedCoordinates.lng)
      .then((address) => {
        console.log('Dirección:', JSON.stringify(address));
        usuario.address = address;
        editar(usuario);
      })
      .catch((error) => {
        console.log('Error al obtener la dirección:', error);
      });
  };
  
  function getAddressFromCoordinates(lat, lng) {
    const apiKey = 'AIzaSyBElQDSJZlqIasWknhzqQRU84IeO2iqJ_M'; // Reemplaza con tu propia clave de API de Google Maps
  
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
  
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const address = data.results[0];
          return address;
        } else {
          throw new Error('Error al obtener la dirección');
        }
      });
  }
  
  console.log(usuario.address);

  return (
    <div>
      <h2>Dirección de Facturacion</h2>
      <div>
      <label>
  Dirección actual: {usuario.address.address
    ? usuario.address.address
    : usuario.address.address_components[1]
      ? usuario.address.address_components[1].long_name + ' ' + usuario.address.address_components[0].long_name
      : "No has cargado una dirección aún"}
</label>

        {/* <input type="text" value={address} onChange={handleAddressChange} /> */}
        <PlacesAutocomplete onSelectCoordinates={handleSelectCoordinates} />
      </div>
      {/* <div>
        <label>País de Residencia:</label>
        <select value={country} onChange={handleCountryChange}>
          <option value="">Seleccionar país</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>{country}</option>
          ))}
        </select>
      </div> */}
    </div>
  );
}

export default AddressCard;
