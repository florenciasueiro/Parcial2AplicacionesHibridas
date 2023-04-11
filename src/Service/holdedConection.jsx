import React, { useState, useEffect, useCallback } from 'react';
import CtCSS from '../css/Contacto.module.css';

//const
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

// export default function login(email, password) {
//   const url = "https://api.holded.com/api/invoicing/v1/contacts";
//   const customid = `${email.replace(/@/g, "%40")}%3B${password}`;
//   const options = {
//     method: "GET",
//     body: JSON.stringify({customid:customid}),
//  headers: {
//             'customid':customid,
//             'key': '343654e3d1014f792344a19ee8f40503',
//             'accept': 'application/json',
//             'Acces-Control-Allow-Origin': '*'
//           }
//   };

//   fetch(url, options)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//       // hacer algo con la respuesta
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// }

// export default login;
export default function useContactos(){
const contactos= useCallback(async (email, password) => {
  
  const customid = `${email.replace(/@/g, "%40")}%3B${password}`;
  console.log(customid);
    try {
        const response = await  fetch(`https://api.holded.com/api/invoicing/v1/contacts?customId=${customid}`, {
          headers: {
            'customid':customid,
            'key': '343654e3d1014f792344a19ee8f40503',
            'accept': 'application/json',
            'Acces-Control-Allow-Origin': '*'
                    }
                }
            );
        if (!response.ok){
            throw new Error(`Network response was not ok (${response.status})`)
            }

        const data = await response.json();
            console.log(data);
            console.log("data[0]");
            console.log(data[0]);
            console.log("JSON.stringify(data)");
            console.log(JSON.stringify(data));
            
            sessionStorage.setItem("user", JSON.stringify(data[0]));
            sessionStorage.setItem("userName", JSON.stringify(data[0].name));
            console.log(data[0].name);
            console.log("sessionStorage.getItem('user')");
            console.log(sessionStorage.getItem("user"));
            window.location.reload();
        }catch(error){
            console.error("There was a problem with the fetch operation:", error);
          }
        }, []);
        
        return contactos;
    //     }).then((resp)=> {
    //         console.log(resp.json());
    //     })
    //     .catch((error)=> {
    //         console.log("There was a problem with the fetch operation: ", error)
    //     });
    // },[]);
    // return contactos;
}
// import React, { useState } from "react";

// function LoginForm({ login }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     login(email, password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;