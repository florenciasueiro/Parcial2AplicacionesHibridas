import React, { useState, useEffect } from 'react';
import CtCSS from '../css/Contacto.module.css';


// const options = {
//   method: 'GET',
//   headers: {accept: 'application/json', key: '343654e3d1014f792344a19ee8f40503'}
// };
// https://api.holded.com/api/invoicing/v1/contacts
// fetch('https://api.holded.com/api/invoicing/v1/contacts?customId=testmail%40gmail.com%3Bpassword', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


//   function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSubmit = async (event) => {
//       event.preventDefault();
  
//       const response = await fetch('https://api.holded.com/api/invoicing/v1/contacts'+username+password, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });
  
//       if (response.ok) {
//         // El usuario ha sido autenticado correctamente, redirige a la página correspondiente
//         window.location.href = '/dashboard';
//       } else {
//         // Mostrar un mensaje de error en la pantalla
//         const error = await response.json();
//         alert(error.message);
//       }
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nombre de usuario:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <label>
//           Contraseña:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </label>
//         <button type="submit">Iniciar sesión</button>
//       </form>
//     );
//   }
  
//   export function LoginForm();


export default function Contactos({ a }) {
  const [contactos, setContactos] = useState([]);
  const customid = `${a.email.replace(/@/g, "%40")}%3B${a.password}`;
  useEffect(() => {
    async function fetchContactos() {
      try {
        const response = await fetch(`https://api.holded.com/api/invoicing/v1/contacts?customId=${customid}`, {
          headers: {
            'customid':customid,
            'key': '343654e3d1014f792344a19ee8f40503',
            'accept': 'application/json',
            'Acces-Control-Allow-Origin': '*'
            
          }
        });
        const data = await response.json();
        setContactos(data);
        
      } catch (error) {
        console.error(error);
      }
    }
    
  }, []);
  
}

