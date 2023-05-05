  import React from 'react';
  import GridCSS from '../css/GridCSS.module.css';

  // Define el componente de la tarjeta
  function Tarjeta({ titulo, contenido, videoURL }) {
    return (
      <div className={GridCSS.tarjeta}>
        <div className={GridCSS.contenido}>
          <h2>{titulo}</h2>
          <p>{contenido}</p>
        </div>
        <video
          src={videoURL}
          autoPlay
          muted
          style={{ width: '100%', height: "100%", objectFit: 'cover', borderRadius: '15px'}}
        />
        {/* <div className={GridCSS.fondo}/> */}
      </div>
    );
  }

  // Define el componente de la grilla
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

  // Ejemplo de uso
  const tarjetasEjemplo = [
    { id: 1, titulo: "Tarjeta 1", contenido: "Contenido de la tarjeta 1", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/v1682603559/06_QF1_GUARDERIA_FINAL_fxsvku.mp4"},
    { id: 2, titulo: "Tarjeta 2", contenido: "Contenido de la tarjeta 2", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603561/03_QF1_DETALLE_ACCESO_HORTIZONTAL_e61y1q.mp4"},
    { id: 4, titulo: "Tarjeta 4", contenido: "Contenido de la tarjeta 4", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603558/01_QF1_APP_CELULAR_FINAL_ltje6f.mp4"},
    { id: 3, titulo: "Tarjeta 3", contenido: "Contenido de la tarjeta 3", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603558/07_QF1_SUM_FINAL_cu3jlh.mp4"},
    { id: 5, titulo: "Tarjeta 5", contenido: "Contenido de la tarjeta 5", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603558/07_QF1_SUM_FINAL_cu3jlh.mp4"},
    { id: 6, titulo: "Tarjeta 6", contenido: "Contenido de la tarjeta 6", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603554/09_QF1_DETALLE_VERTICAL_FINAL_ume6nz.mp4"},
    { id: 7, titulo: "Tarjeta 7", contenido: "Contenido de la tarjeta 7", videoURL: "https://res.cloudinary.com/dazsjxtmy/video/upload/f_auto/v1682603550/02_QF1_ACCESO_FINAL_x0qwez.mp4"},
  ];

  function App() {
    return (
      <div>
        <GrillaTarjetas tarjetas={tarjetasEjemplo} />
      </div>
    );
  }

  export default App;
