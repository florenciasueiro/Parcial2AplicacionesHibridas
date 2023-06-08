import {useCallback  } from 'react';


export default function useFeedback(){

    const feedback = useCallback(

        async () => {

            try {

                const response = await fetch(`https://restapinode-production.up.railway.app/feedback`);
                
                if (!response.ok){
                    
                    throw new Error(`Network response was not ok (${response.status})`);
                }
                
                const data = await response.json();

                console.log(data);
                //realmenten o nececito las 2 (session y retun pero no se cual es mas conveniente)
                // sessionStorage.setItem("productos", JSON.stringify(data));
                
                
                return data;

                

            }catch(error){
                
                console.error("There was a problem with the fetch operation:", error);
            }
        },[]
        
    );

return feedback;

};

