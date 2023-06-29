import { useCallback } from 'react';

export default function useEditarUsuario() {
    const user = useCallback(async (usuario) => {
        try {
          const response = await fetch(`http://localhost:8080/v1/updateUser`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
          });
          if (response.status > 200 || response.status <= 300) {
            console.log(response.status)
            const data = await response.json();
            console.log("se ejecuto editUser");
            console.log(data);
            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.reload();
            
                if(response.status === 201){
                    
                    return response.status;
                }
                else if (response.status === 400){
                    
                    return response.status;
                }
                else if (response.status === 409){

                    return response.status;
                }
                else if (response.status === 500){

                    return response.status;
                }
          }
          
        else if (response.status !==200){
            let errorMessage = 'Ha ocurrido un error.';
            throw new Error(errorMessage);
        }
        else if (response.status === 400) {
          let errorMessage = 'Faltan datos requeridos en la solicitud.';
            throw new Error(errorMessage);
            } 
        else if (response.status === 409) {
          let errorMessage = 'El usuario ya ha sido registrado previamente.';
              throw new Error(errorMessage);
            }
            
          
        
        const data = await response.json();
        console.log("se ejecuto editUser");
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data));
        window.location.reload();
        

    } catch (error) {
      console.error(error.message);
      console.error(error.status);
          // Puedes manejar el error de otra manera, por ejemplo, mostrar un mensaje de error en la aplicación.
        }
      }, []);

  return user;
}