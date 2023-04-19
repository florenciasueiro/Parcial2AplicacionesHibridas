import {useCallback } from 'react';

//esta funcion es la que llama el login form para enviar los datos de email y password al api
// de que trae la lista de contactos pero usamos el filtro de customid para que solo traiga el
// usuario que tenga ese mismo customid.


// ya que en holded no hay un campo de contraseña decidi usar el custom id como la suma de email y password


export default function useContactos(){
  const contactos = useCallback(async (email, password) => {
    try {
      const response = await fetch(`http://localhost:8080/v1/login?email=${email}&password=${password}`, {
        headers: {
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