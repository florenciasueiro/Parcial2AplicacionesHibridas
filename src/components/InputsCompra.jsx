import React, { useState } from 'react';
import styles from '../css/Inputs.module.css';

const Componente = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <label htmlFor="input" className={styles.label}>
        Input
        <input
          id="input"
          type="checkbox"
          checked={isChecked}
          onChange={handleInputChange}
          className={styles.input}
        />
      </label>
    </div>
  );
};

export default Componente;
