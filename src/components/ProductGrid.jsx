import React, { useState, useEffect, useRef } from 'react';
import GridCSS from '../css/GridCSS.module.css';
import { useInView } from 'react-intersection-observer';

function Tarjeta({ titulo, contenido, videoURL }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const videoRef = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setVideoVisible(true);
    }
  }, [inView]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={GridCSS.tarjeta} ref={ref}>
      <div className={GridCSS.contenido}>
        <h2>{titulo}</h2>
      </div>
      <div className={GridCSS.videoContainer} onClick={openModal}>
        {videoVisible && (
          <video
            ref={videoRef}
            src={videoURL}
            autoPlay
            muted
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
          />
        )}
      </div>
      {modalVisible && (
        <div className={GridCSS.modal} onClick={closeModal}>
          <div className={GridCSS.modalContent}>
            <button className={GridCSS.closeButton} onClick={closeModal}>
              X
            </button>
            <video src={videoURL} autoPlay controls style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      )}
    </div>
  );
}

function GrillaTarjetas({ tarjetas }) {
  return (
    <div className={GridCSS.grilla}>
      {tarjetas.map((tarjeta) => (
        <Tarjeta
          key={tarjeta.id}
          titulo={tarjeta.titulo}
          contenido={tarjeta.contenido}
          videoURL={tarjeta.videoURL}
        />
      ))}
    </div>
  );
}

const tarjetasEjemplo = [
  { id: 1, titulo: "Lotes", contenido: "Quarters Family 1 ofrece 13 lotes en un terreno de 4886 m²...", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/v1682603559/06_QF1_GUARDERIA_FINAL_fxsvku.mp4"},
  { id: 2, titulo: "Servicios", contenido: "Contenido de la tarjeta 2", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603561/03_QF1_DETALLE_ACCESO_HORTIZONTAL_e61y1q.mp4"},
  { id: 3, titulo: "Seguridad inteligente las 24 hs", contenido: "Contenido de la tarjeta 3", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603558/07_QF1_SUM_FINAL_cu3jlh.mp4"},
  { id: 4, titulo: "Amenities", contenido: "Contenido de la tarjeta 4", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603558/01_QF1_APP_CELULAR_FINAL_ltje6f.mp4"},
  { id: 5, titulo: "Paisajismo", contenido: "Contenido de la tarjeta 5", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603558/07_QF1_SUM_FINAL_cu3jlh.mp4"},
  { id: 6, titulo: "Almacenamiento", contenido: "Contenido de la tarjeta 6", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603554/09_QF1_DETALLE_VERTICAL_FINAL_ume6nz.mp4"},
  { id: 7, titulo: "Generales", contenido: "Contenido de la tarjeta 7", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603550/02_QF1_ACCESO_FINAL_x0qwez.mp4"},
  { id: 8, titulo: "Factibilidades", contenido: "Contenido de la tarjeta 7", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603550/02_QF1_ACCESO_FINAL_x0qwez.mp4"},
  { id: 9, titulo: "Reglamento de construcción", contenido: "Contenido de la tarjeta 7", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603550/02_QF1_ACCESO_FINAL_x0qwez.mp4"},
  { id: 10, titulo: "Stakeholder", contenido: "Contenido de la tarjeta 7", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603550/02_QF1_ACCESO_FINAL_x0qwez.mp4"},
];

function App() {
  return (
    <div>
      <GrillaTarjetas tarjetas={tarjetasEjemplo} />
    </div>
  );
}

export default App;

