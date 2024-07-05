import { useEffect, useState } from 'react';

import axios from 'axios';


export function useDolar() {
    const [contizacion, setCotizacion]= useState(null)
    useEffect(() => {
        const fetchCotizaciones = async () => {
            try {
                const response = await axios.get('https://restapinode-production-8fd5.up.railway.app/v3/getDolar');

                const data = await response;
                console.log(data.data.price)
                setCotizacion(await data.data.price);
                // alert(JSON.stringify(data.data.price));
            }catch (error){
                setCotizacion(500)
                console.error('There was a problem with the fetch operation:', error);

            }
        };
        fetchCotizaciones();
    }, []);

    return contizacion;//
    
}
