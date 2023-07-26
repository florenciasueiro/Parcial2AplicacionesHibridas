import { useCallback } from 'react';

export default function useRegistro() {
    const registro = useCallback(async (usuario) => {
        try {
          const response = await fetch(`https://restapinode-production-8fd5.up.railway.app/v1/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
          });
          if (response.status > 200 || response.status <= 300) {
            console.log(response.status)
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
          console.log("se ejecuto registro");
          console.log(data);
        

    } catch (error) {
      console.error(error.message);
      console.error(error.status);
          // Puedes manejar el error de otra manera, por ejemplo, mostrar un mensaje de error en la aplicación.
        }
      }, []);

  return registro;
}