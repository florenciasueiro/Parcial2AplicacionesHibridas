import { useEffect, useState } from 'react';

import axios from 'axios';


export function useFacturaInfo(id) {
    const [datosFactura, setDatosFactura]= useState(null)
    useEffect(() => {
        const fetchFactura = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/v1/getDatosFactura?id=${id}`);

                const data = await response;

                setDatosFactura(await data.data);
                // alert(JSON.stringify(data.data.price));
            }catch (error){
                console.error('There was a problem with the fetch operation:', error);

            }
        };
        fetchFactura();
    }, []);

    return datosFactura;
    
}

export default useFacturaInfo;
