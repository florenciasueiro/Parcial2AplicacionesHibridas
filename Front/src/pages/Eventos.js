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
      <div className={styles['content-section']}>
        <div className={styles['text-with-image']}>
          <img src="https://via.placeholder.com/150" alt="Placeholder 1" className={styles['image-left']} />
          <p className={styles['text-content']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices. 
            Mauris bibendum purus sed nisl viverra, in aliquam massa commodo. Nulla facilisi. Curabitur ut venenatis eros.
            Vivamus scelerisque justo in eros sagittis, et lacinia metus imperdiet. Donec ultricies volutpat magna, 
            non placerat libero efficitur eu. Suspendisse potenti. Integer interdum sem a lorem euismod, vel viverra ligula tincidunt.
          </p>
        </div>
        <div className={styles['text-with-image']}>
          <p className={styles['text-content']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices. 
            Mauris bibendum purus sed nisl viverra, in aliquam massa commodo. Nulla facilisi. Curabitur ut venenatis eros.
            Vivamus scelerisque justo in eros sagittis, et lacinia metus imperdiet. Donec ultricies volutpat magna, 
            non placerat libero efficitur eu. Suspendisse potenti. Integer interdum sem a lorem euismod, vel viverra ligula tincidunt.
          </p>
          <img src="https://via.placeholder.com/150" alt="Placeholder 2" className={styles['image-right']} />
        </div>
      </div>
    </div>
  );
}
