import {useCallback } from 'react';

//esta funcion es la que llama el login form para enviar los datos de email y password al api
// de que trae la lista de contactos pero usamos el filtro de customid para que solo traiga el
// usuario que tenga ese mismo customid.


// ya que en holded no hay un campo de contraseña decidi usar el custom id como la suma de email y password


export default function useContactos(){
  const contactos = useCallback(async (email, password) => {
    try {
      const response = await fetch(`https://restapinode-production.up.railway.app/v2/login?email=${email}&password=${password}`, {
        headers: { //192.168.1.89:8080
          'accept': 'application/json',
          'Acces-Control-Allow-Origin': '*'
        }
      });

      if (!response.ok){
        throw new Error(`Network response was not ok (${response.status})`);
      }
      

      const data = await response.json();
      console.log("se ejecuto holded");
      
      sessionStorage.setItem("user", JSON.stringify(data));
      window.location.reload();
    } catch (error) {
      
      
      console.error("There was a problem with the fetch operation:", error);
      // Puedes manejar el error de otra manera, por ejemplo, mostrar un mensaje de error en la aplicación.
    }
  }, []);

  return contactos;
}


// const options = {
//   method: 'POST',
//   headers: {
//     accept: 'application/json',
//     'content-type': 'application/json',
//     key: '343654e3d1014f792344a19ee8f40503'
//   },
//   body: JSON.stringify({name: 'test', email: 'testReg@gmail.com', mobile: '1234', note: 'password'})
// };

// fetch('https://api.holded.com/api/invoicing/v1/contacts', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));