import {useCallback } from 'react';


export default function useProductos(){

    const productos = useCallback(

        async () => {

            try {

                const response = await fetch(`http://localhost:8080/v1/getallProducto`);
                
                if (!response.ok){
                    
                    throw new Error(`Network response was not ok (${response.status})`);
                }
                
                const data = await response.json();

                // console.log(data);
                //realmenten o nececito las 2 (session y retun pero no se cual es mas conveniente)
                sessionStorage.setItem("productos", JSON.stringify(data));
                
                
                return data;

                

            }catch(error){
                
                console.error("There was a problem with the fetch operation:", error);
            }
        },[]
        
    );

return productos;

};

