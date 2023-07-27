import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/v1/getFacturaPDF?id=${id}&doctype=${doctype}`,
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

  // Funciones para abrir y cerrar el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Botón o enlace que abre el modal */}
      <button onClick={openModal}>Abrir PDF</button>
      
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Modal"
      >
        <button onClick={closeModal}>Cerrar PDF</button>
        <PDFViewer pdfBase64={pdf} />
      </Modal>
    </>
  );
};

export default FacturaPDFComponent;
