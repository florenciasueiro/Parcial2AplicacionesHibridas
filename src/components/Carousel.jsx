import React, { useState, useEffect } from 'react';
import styles from '../css/Carousel.module.css';
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
import css from 'styled-jsx/css';

const images = [
  image1,
  image2,
  image3
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    console.log('Previous slide clicked');
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };
  
  const nextSlide = () => {
    console.log('Next slide clicked');
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className={styles.h1}>
        <h1>Producto</h1>
      </div>
    <div className={styles.carousel}>
      <div className={styles.carouselImages} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            className={`${styles.carouselImage} ${
              index === currentIndex ? styles.active : ''
            }`}
            src={image}
            alt=""
          />
        ))}
      </div>
      <button className={`${styles.carouselButton} ${styles.previous}`} onClick={previousSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className={`${styles.carouselButton} ${styles.next}`} onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      {console.log(currentIndex)}
    </div>
    </div>
    
  );
};

export default Carousel;
