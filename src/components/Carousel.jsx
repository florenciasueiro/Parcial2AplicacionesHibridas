import React, { useState, useEffect } from 'react';
import CarouselCSS from '../css/Carousel.module.css';
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';
import image3 from '../img/image3.png';
// import css from 'styled-jsx/css';

const images = [
  image1,
  image2,
  image3
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
        <h1>Quarters Family 1</h1>
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
