import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import InputsCSS from '../css/Inputs.module.css';

const Info = ({ infoText }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  return (
    <div
      className={InputsCSS.infoMessage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <div className={InputsCSS.spanIcon}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <span className={InputsCSS.spanInfo}>Más información</span>
        </div>
      {showInfo && (
        <div className={InputsCSS.infoText}>
          {infoText}
        </div>
      )}
    </div>
  );
};

export const Info1 = () => {
  return <Info infoText="Texto de información relevante 1" />;
};

export const Info2 = () => {
  return <Info infoText="Texto de información relevante 2" />;
};

export const Info3 = () => {
  return <Info infoText="Texto de información relevante 3" />;
};

export const Info4 = () => {
  return <Info infoText="Texto de información relevante 4" />;
};

export const Info5 = () => {
    return <Info infoText="Texto de información relevante 5" />;
  };

export const Info6 = () => {
    return <Info infoText="Texto de información relevante 6" />;
  };