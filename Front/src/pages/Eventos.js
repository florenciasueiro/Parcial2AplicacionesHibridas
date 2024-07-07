import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../css/BCarousel.module.css';

export default function Eventos() {
  return (
    <div className={styles['carousel-container']}>
      <Carousel className={styles.carousel}>
        <Carousel.Item interval={3000}>
          <img
            className={`d-block w-100 ${styles['custom-carousel-img']}`}
            src="img/image6.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3 className={styles['carousel-caption-h3']}>Label for first slide</h3>
            <p className={styles['carousel-caption-p']}>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className={`d-block w-100 ${styles['custom-carousel-img']}`}
            src="img/image7.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3 className={styles['carousel-caption-h3']}>Label for second slide</h3>
            <p className={styles['carousel-caption-p']}>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
