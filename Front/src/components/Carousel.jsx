import React, { useState, useEffect } from 'react';
import CarouselCSS from '../css/Carousel.module.css';

// import css from 'styled-jsx/css';

const images = [
  'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751164/11_PLANTA_CONJUNTO_4K_POS_ujndnr.jpg',
  'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751162/10_INTERIOR_SUM_BLUE_HOUR_4K_POS_gr3ozf.jpg',
  'https://res.cloudinary.com/dazsjxtmy/image/upload/f_auto/v1687751161/05_CALLE_SUM_4K_POS_fw7kw7.jpg',
];


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    // console.log('Previous slide clicked');
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };
  
  const nextSlide = () => {
    // console.log('Next slide clicked');
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
      <div className={CarouselCSS.h1}>
        <span className={CarouselCSS.span}>Nuevo</span>
        <h2>Quarters Family 1</h2>
      </div>
    <div className={CarouselCSS.carousel}>
      <div className={CarouselCSS.carouselImages} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            className={`${CarouselCSS.carouselImage} ${
              index === currentIndex ? CarouselCSS.active : ''
            }`}
            src={image}
            alt=""
          />
        ))}
      </div>
      <button className={`${CarouselCSS.carouselButton} ${CarouselCSS.previous}`} onClick={previousSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className={`${CarouselCSS.carouselButton} ${CarouselCSS.next}`} onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      {/* {console.log(currentIndex)} */}
    </div>
    </div>
    
  );
};

export default Carousel;
