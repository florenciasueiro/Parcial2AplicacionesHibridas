import React, { useEffect, useState } from 'react';

const PDFViewer = ({ pdfBase64 }) => {
  const pdfData = `data:application/pdf;base64,${pdfBase64}`;

  return (
    <div>
      <embed src={pdfData} type="application/pdf" width="100%" height="600px" />
    </div>
  );
};

const FacturaPDFComponent = ({ id }) => {
  const [pdf, setPdf] = useState('');

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/v1/getFacturaPDF?id=${id}`,
          {
            headers: {
              'Cache-Control': 'no-cache'
            }
          }
        );
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        const data = await response.json();
        setPdf(data.data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchPdf();
  }, [id]);

  return <PDFViewer pdfBase64={pdf} />;
};

export default FacturaPDFComponent;
