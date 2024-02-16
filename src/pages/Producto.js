import React, { useState } from 'react';
import InicioCSS from '../css/Inicio.module.css';
import { CardGrid26 } from '../components/GridApp';
import { BackgroundQuarters } from '../components/Background';
import Slider, { SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#0a84ff' : '#8b8b8b',
  width: '80%',
  height: 5,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    boxShadow: '0 0 2px 0px rgba(0, 0, 0, 0.1)',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
    '&:before': {
      boxShadow:
        '0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    top: -6,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&::before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
    height: 5,
  },
  '& .MuiSlider-rail': {
    opacity: 0.5,
    boxShadow: 'inset 0px 0px 4px -2px #000',
    backgroundColor: '#d0d0d0',
  },
}));

const ButtonStyled = styled(Button)({
  backgroundColor: '#000',
  color: '#fff',
  marginTop: '100px',
  borderRadius: '50px',
  padding: '15px',
  width: '30%',
});

const ModalContent = () => (
  <div>
    <h2>Modal Title</h2>
    <p>Modal Content</p>
  </div>
);

function Productos() {
  const [investment, setInvestment] = useState(50); // Estado para el valor de la inversión
  const [openModal, setOpenModal] = useState(false);

  // Función para manejar el cambio en el valor de la inversión
  const handleInvestmentChange = (event) => {
    setInvestment(parseInt(event.target.value));
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const datos = [
    { aspecto: 'Rentabilidad', descripcion: 'Lorem ipsum dolor sit amet.' },
    { aspecto: 'Honorarios de Gestión', descripcion: 'Consectetur adipiscing elit.' },
    { aspecto: 'Riesgos', descripcion: 'Pellentesque habitant morbi tristique senectus.' },
    { aspecto: 'Plazo de Rescate', descripcion: 'Nullam ac urna eu felis dapibus condimentum.' },
    { aspecto: 'Documentación', descripcion: 'Suspendisse potenti.' },
    { aspecto: 'Tipo de Fondo', descripcion: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' },
    { aspecto: 'Garantías', descripcion: 'Fusce nec justo vel ex dignissim tincidunt.' },
    { aspecto: 'Aspectos Legales y Regulatorios', descripcion: 'Nam euismod, justo eu bibendum tincidunt, nunc libero tincidunt justo, id aliquet purus nunc eu justo.' },
    { aspecto: 'Moneda', descripcion: 'Maecenas auctor, libero eget tincidunt feugiat, elit elit vehicula odio, vel lacinia elit tortor vel nunc.' },
    { aspecto: 'Patrimonio Total', descripcion: 'Maecenas auctor, libero eget tincidunt feugiat, elit elit vehicula odio, vel lacinia elit tortor vel nunc.' }
  ];

  return (
    <div className={InicioCSS.inicio}>
      <a href="/quarters" className={InicioCSS.background}>
        <div className={InicioCSS.textEvents}>
          <div className={InicioCSS.logoP}>
            {/* <img className={InicioCSS.img} src={"/img/LogoBlanco.png"} alt="Logo"/> */}
            <p className={InicioCSS.p}>Simulador de inversiones</p>
          </div>
        </div>
        <BackgroundQuarters />
      </a>

      <div className={InicioCSS.gridContainer}>
        <div className={InicioCSS.resumen}>
          <h2 className={InicioCSS.subtitulo}>Resumen y beneficios</h2>
          <p>El fondo invertirá primariamente en instrumentos de renta fija argentina emitidos por el Gobierno Nacional, provincias o bonos corporativos. También buscará tener posiciones en activos en dólares o activos cuyo retorno esté vinculado a esta divisa. Se utilizarán mecanismos de cobertura a través de instrumentos derivados para gestionar el riesgo. Los Fondos Comunes de Inversión permiten delegar las decisiones de inversión en un equipo profesional dedicado exclusivamente a analizar las variaciones de los mercados locales e internacionales y a tomar las mejores decisiones acordes al objetivo específico de cada Fondo. Esto brinda al inversor acceso a un portafolio que ofrece mayor liquidez y diversificación, disminuyendo así su riesgo. Además, los Fondos Comunes de Inversión se encuentran regulados y supervisados por la Comisión Nacional de Valores (CNV), lo que proporciona una capa adicional de seguridad y transparencia en las operaciones financieras.</p>
        </div>
        <div className={InicioCSS.empresas}>
          <h2 className={InicioCSS.subtitulo}>Con la confianza de estas reconocidas empresas</h2>
          <div>
            <img src="ruta/a/la/imagen.jpg" alt="CEDU" />
            <img src="ruta/a/la/imagen.jpg" alt="MELI" />
          </div>
        </div>
        <div className={InicioCSS.simulador}>
          <h2 className={InicioCSS.subtituloSimul}>Simulador de inversión</h2>
          <div className={InicioCSS.input}>
            <IOSSlider aria-label="ios slider" defaultValue={60} valueLabelDisplay="on" min={0} max={100} value={investment} onChange={handleInvestmentChange}/>
          <ButtonStyled onClick={handleOpenModal}>Invertir</ButtonStyled>
          <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalContent />
          </Modal>
          </div>
        </div>
      </div>
      <div className={InicioCSS.infoSection}>
        <h2 className={InicioCSS.subtitulo}>Datos a tener en cuenta</h2>
        <div className={InicioCSS.tablaComparativa}>
          <div className={InicioCSS.aspectos}>
            <h2 className={InicioCSS.aspecTutulo}>Aspecto</h2>
            {datos.map((dato, index) => (
              <div key={index} className={InicioCSS.aspecto}>
                {dato.aspecto}
              </div>
            ))}
          </div>
          <div className={InicioCSS.descripciones}>
            <h2 className={InicioCSS.descTitulo}>Descripcion</h2>
            {datos.map((dato, index) => (
              <div key={index} className={InicioCSS.descripcion}>
                {dato.descripcion}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
