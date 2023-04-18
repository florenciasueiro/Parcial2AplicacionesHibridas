import React, { useState } from 'react';
import InputCSS from '../css/Inputs.module.css';

export default function RadioInputs() {
  const [selectedTerreno, setSelectedTerreno] = useState('F1');
  const [input3Disabled, setInput3Disabled] = useState(true);
  const [selectedAlmacenamiento, setSelectedAlmacenamiento] = useState('Pequeño');
  const [selectedGuarderia, setSelectedGuarderia] = useState('6');
  const [selectedSUM, setSelectedSUM] = useState('6');

  const handleSelectTerreno = (event) => {
    setSelectedTerreno(event.target.value);

    if (event.target.value === 'F1') {
      setInput3Disabled(false);
    } else {
      setInput3Disabled(true);
    }
  }

  const handleSelectAlmacenamiento = (event) => {
    setSelectedAlmacenamiento(event.target.value);
  }

  const handleSelectGuarderia = (event) => {
    setSelectedGuarderia(event.target.value);
  }

  const handleSelectSUM = (event) => {
    setSelectedSUM(event.target.value);
  }

  return (
    <div>
      <div>
        <p><b>Terreno.</b> ¿Cuál es el mejor para su familia?</p>
      <div className={InputCSS['radioInputs']}>
        
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F1' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F1" checked={selectedTerreno === 'F1'} onChange={handleSelectTerreno} />
          F1
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F2' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F2" checked={selectedTerreno === 'F2'} onChange={handleSelectTerreno} />
          F2
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F3' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F3" checked={selectedTerreno === 'F3'} onChange={handleSelectTerreno} />
          F3
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F4' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F4" checked={selectedTerreno === 'F4'} onChange={handleSelectTerreno} />
          F4
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F5' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F5" checked={selectedTerreno === 'F5'} onChange={handleSelectTerreno} />
          F5
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F6" checked={selectedTerreno === 'F6'} onChange={handleSelectTerreno} />
          F6
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F7' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F7" checked={selectedTerreno === 'F7'} onChange={handleSelectTerreno} />
          F7
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F8' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F8" checked={selectedTerreno === 'F8'} onChange={handleSelectTerreno} />
          F8
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F9' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F9" checked={selectedTerreno === 'F9'} onChange={handleSelectTerreno} />
          F9
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F10' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F10" checked={selectedTerreno === 'F10'} onChange={handleSelectTerreno} />
          F10
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F11' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F11" checked={selectedTerreno === 'F11'} onChange={handleSelectTerreno} />
          F11
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F12" checked={selectedTerreno === 'F12'} onChange={handleSelectTerreno} />
          F12
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F13' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F13" checked={selectedTerreno === 'F13'} onChange={handleSelectTerreno} />
          F13
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedTerreno === 'F13' ? InputCSS.selected : ''}`}>
          <input type="radio" value="F13" checked={selectedTerreno === 'F13'} onChange={handleSelectTerreno} disabled={input3Disabled} />
          F13
        </label>
        <br/>
        
      </div>
        </div>


        <p><b>Almacenamiento.</b> ¿Cuánto espacio es el adecuado?</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Pequeño' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Pequeño" checked={selectedAlmacenamiento === 'Pequeño'} onChange={handleSelectAlmacenamiento} />
          Pequeño
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Mediano' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Mediano" checked={selectedAlmacenamiento === 'Mediano'} onChange={handleSelectAlmacenamiento} />
          Mediano
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedAlmacenamiento === 'Grande' ? InputCSS.selected : ''}`}>
          <input type="radio" value="Grande" checked={selectedAlmacenamiento === 'Grande'} onChange={handleSelectAlmacenamiento} />
          Grande
        </label>
        <br/>
      </div>



      <p><b> Guardería.</b> ¿Cuál es el plan que mejor se adapta a ti?</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedGuarderia === '6'} onChange={handleSelectGuarderia} />
          6 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedGuarderia === '12'} onChange={handleSelectGuarderia} />
          12 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedGuarderia === '24' ? InputCSS.selected : ''}`}>
          <input type="radio" value="24" checked={selectedGuarderia === '24'} onChange={handleSelectGuarderia} />
          24 Meses
        </label>
        <br/>
      </div>


      <p><b> SUM.</b> Reservá el espacio para lo que tu quieras.</p>
      <div className={InputCSS['radioInputs']}>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '6' ? InputCSS.selected : ''}`}>
          <input type="radio" value="6" checked={selectedSUM === '6'} onChange={handleSelectSUM} />
          6 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '12' ? InputCSS.selected : ''}`}>
          <input type="radio" value="12" checked={selectedSUM === '12'} onChange={handleSelectSUM} />
          12 Meses
        </label>
        <label className={`${InputCSS['radioInput']} ${selectedSUM === '24' ? InputCSS.selected : ''}`}>
          <input type="radio" value="24" checked={selectedSUM === '24'} onChange={handleSelectSUM} />
          24 Meses
        </label>
        <br/>
      </div>
    </div>
    
  );
}
