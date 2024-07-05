import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import PerfilCSS from '../css/Perfil.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';



const PDFViewer = ({ pdfBase64 }) => {
  const pdfData = `data:application/pdf;base64,${pdfBase64}`;

  return (
    <div className={PerfilCSS.pdfContainer}>
      <embed src={pdfData} type="application/pdf" width="100%" height="90%" />
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
      <button onClick={openModal} className={PerfilCSS.botonRecibo}>
      <FontAwesomeIcon icon={faFilePdf} /></button>
      
      {/* Modal */}
      <Modal
        className={PerfilCSS.modalPerfil}
        overlayClassName={PerfilCSS.modalOverlayRecibo}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Modal"
      >
        <button className={PerfilCSS.botonPDF} onClick={closeModal}>Cancelar</button>
        <PDFViewer pdfBase64={pdf} />
      </Modal>
    </>
  );
};

export default FacturaPDFComponent;
