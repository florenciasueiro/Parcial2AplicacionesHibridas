import React, { useEffect } from "react";

const APIComponent = ({ id, setPdf, docType }) => {
  useEffect(() => {
    const fetchPdf = async () => {
      try {
        console.log(id, docType);
        const response = await fetch(
          `https://restapinode-production-8fd5.up.railway.app/v1/getFacturaPDF?id=${id}&docType=${docType}`
        );
        if (!response.ok) {
          throw new Error(
            `Network response was not ok (${response.status})`
          );
        }

        if (response.status === 304) {
          
          const clonedResponse = response.clone();
          const text = await clonedResponse.text();
          const base64 = btoa(text);
          setPdf(base64);
        } else {
          // Manejar la respuesta con contenido
          const data = await response.json();
          const base64 = data.data; // Asumiendo que data ya contiene el código base64 del PDF
          console.log(data.data)
          console.log("por dios haceme caso computadora")
          setPdf(base64);
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation: ", error);
      }
    };

    fetchPdf();
  }, [id, setPdf]);

  return null; // No renderizamos nada en este componente
};

export default APIComponent;
