import { useEffect, useState } from 'react';

export default function useProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('https://restapinode-production.up.railway.app/v1/getallProducto');
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        const data = await response.json();
        sessionStorage.setItem('productos', JSON.stringify(data));
        setProductos(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchProductos();
  }, []);

 

  return productos;
}
