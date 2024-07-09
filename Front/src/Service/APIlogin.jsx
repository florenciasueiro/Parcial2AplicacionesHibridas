import { useCallback } from 'react';

// Esta función es la que llama el formulario de login para enviar los datos de email y password al API

export default function useContactos() {
  const contactos = useCallback(async (email, password) => {
    try {
      console.log(JSON.stringify({ email, password }))
      const response = await fetch(`http://localhost:4000/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Importante para manejar las cookies

      }); 

      if (!response.ok) {
        throw new Error(`Network response was not ok (${response.status})`);
      }

      const data = await response.json();
      console.log("Login exitoso", data);

      // Guarda los datos del usuario en el sessionStorage
      sessionStorage.setItem("user", JSON.stringify(data));
      window.location.reload();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Puedes manejar el error de otra manera, por ejemplo, mostrar un mensaje de error en la aplicación.
    }
  }, []);

  return contactos;
}
