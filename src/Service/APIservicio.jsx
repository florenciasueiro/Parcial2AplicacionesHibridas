import { useEffect, useState } from 'react';

export default function useServicio() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch('http://localhost:8080/v1/getallServicio');
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        const data = await response.json();
        sessionStorage.setItem('servicios', JSON.stringify(data));
        setServicios(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchServicios();
  }, []);

  
    
 

  return servicios;
}
