  import React from 'react';
  import GridCSS from '../css/GridCSS.module.css';

  // Define el componente de la tarjeta
  function Tarjeta({ titulo, contenido }) {
    return (
      <div className={GridCSS.tarjeta}>
        
        <h2>{titulo}</h2>
        <p>{contenido}</p>
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
          />
        ))}
      </div>
    );
  }

  // Ejemplo de uso
  const tarjetasEjemplo = [
    { id: 1, titulo: "Tarjeta 1", contenido: "Contenido de la tarjeta 1" },
    { id: 2, titulo: "Tarjeta 2", contenido: "Contenido de la tarjeta 2" },
    { id: 3, titulo: "Tarjeta 3", contenido: "Contenido de la tarjeta 3" },
    { id: 4, titulo: "Tarjeta 4", contenido: "Contenido de la tarjeta 4" },
    { id: 5, titulo: "Tarjeta 5", contenido: "Contenido de la tarjeta 5" },
    { id: 6, titulo: "Tarjeta 6", contenido: "Contenido de la tarjeta 6" },
    { id: 7, titulo: "Tarjeta 7", contenido: "Contenido de la tarjeta 7" },
  ];

  function App() {
    return (
      <div>
        <GrillaTarjetas tarjetas={tarjetasEjemplo} />
      </div>
    );
  }

  export default App;
