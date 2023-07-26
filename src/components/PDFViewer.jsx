import React, { useEffect, useState } from 'react';

const PDFViewer = ({ pdfBase64 }) => {
  const pdfData = `data:application/pdf;base64,${pdfBase64}`;

  return (
    <div>
      <embed src={pdfData} type="application/pdf" width="100%" height="1280px" />
    </div>
  );
};

const FacturaPDFComponent = ({ id, doctype }) => {
  const [pdf, setPdf] = useState('');

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        console.log(id,doctype)
        const response = await fetch(
          `https://restapinode-production-8fd5.up.railway.app/v1/getFacturaPDF?id=${id}&doctype=${doctype}`,
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
