import React from 'react';
import Cards from './Cards';
import GridCSS from '../css/GridCSS.module.css';

function Grid() {
  return (
    <div>
      <div>
        <div className={GridCSS.largeCard}>
            <Cards></Cards>
        </div>
      </div>
      <div>
        <div className={GridCSS.mediumCard}>
            card2
        </div>
        <div className={GridCSS.mediumCard}>
            card3
        </div>
      </div>
      <div>
        <div className={GridCSS.smallCard}>

        </div>
        <div className={GridCSS.smallCard}>

        </div>
        <div className={GridCSS.smallCard}>

        </div>
      </div>
    </div>
  )
}

export default Grid
