import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../css/BCarousel.module.css';

export default function Nosotros() {
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
          En Asset, nuestra misión es transformar el sueño de poseer un terreno en una realidad accesible y gratificante para todos. Desde nuestra fundación, hemos estado comprometidos en brindar un servicio excepcional, caracterizado por la transparencia, la confianza y la dedicación. Creemos firmemente en la importancia de escuchar y comprender las necesidades individuales de cada cliente, para ofrecer soluciones personalizadas que se alineen con sus aspiraciones y objetivos.

          Nuestro equipo está compuesto por profesionales apasionados y experimentados en el ámbito inmobiliario, quienes trabajan incansablemente para simplificar y mejorar cada etapa del proceso de adquisición de terrenos. Nos esforzamos por estar a la vanguardia de las tendencias del mercado, utilizando tecnología de punta para ofrecer una experiencia de compra moderna y eficiente. En Asset, no solo vendemos terrenos, sino que también construimos relaciones duraderas basadas en el respeto mutuo y la integridad.

          Nuestro enfoque innovador nos ha permitido desarrollar productos y servicios que van más allá de las expectativas, brindando a nuestros clientes la tranquilidad y seguridad que necesitan para tomar decisiones informadas. A través de nuestro compromiso con la calidad y la excelencia, hemos logrado establecer una reputación sólida y confiable en la industria. Cada terreno que ofrecemos es seleccionado cuidadosamente, asegurando que cumpla con los más altos estándares de calidad y sostenibilidad.

          En Asset, estamos convencidos de que la posesión de un terreno no solo es una inversión financiera, sino también una inversión en el futuro y en el bienestar de nuestras comunidades. Nos enorgullece ser parte de un cambio positivo, promoviendo prácticas responsables y sostenibles que beneficien tanto a nuestros clientes como al entorno. Te invitamos a unirte a nosotros en este emocionante viaje, donde juntos podemos construir un futuro más brillante y próspero.
          </p>
        </div>
        <div className={styles['text-with-image']}>
          <p className={styles['text-content']}>
          Bienvenidos a Asset, donde cada terreno es una oportunidad para comenzar una nueva historia. Nos especializamos en ofrecer terrenos que no solo cumplen con los más altos estándares de calidad, sino que también están ubicados estratégicamente para maximizar su valor y potencial. Desde urbanizaciones modernas hasta áreas rurales tranquilas, en Asset tenemos la propiedad perfecta que se adapta a tus necesidades y deseos.

          Nuestro compromiso con la excelencia se refleja en cada aspecto de nuestra operación. Desde la selección de ubicaciones privilegiadas hasta la atención al detalle en la documentación y el soporte al cliente, nos aseguramos de que cada paso del proceso sea claro, sencillo y satisfactorio. Sabemos que la compra de un terreno es una decisión importante y personal, por eso estamos aquí para acompañarte en cada etapa, proporcionando la información y el asesoramiento que necesitas para tomar la mejor decisión.

          Asset se distingue por su enfoque integral y holístico. No solo ofrecemos terrenos, sino también un conjunto de servicios complementarios diseñados para facilitar la vida de nuestros clientes. Desde asesoramiento financiero hasta servicios de diseño y construcción, estamos aquí para ayudarte a materializar tus sueños y convertir tu terreno en un espacio que refleje tus valores y estilo de vida.

          Nos enorgullece ser una empresa que valora la sostenibilidad y la responsabilidad social. Implementamos prácticas ecológicas y fomentamos el desarrollo de comunidades sostenibles, asegurando que nuestras acciones tengan un impacto positivo en el medio ambiente y en la sociedad. En Asset, creemos que cada terreno es una semilla para el futuro, y nos dedicamos a cultivarlo con cuidado y respeto.

          Te invitamos a descubrir lo que hace de Asset una elección única y confiable en el mercado de terrenos. Únete a nosotros y sé parte de una comunidad que valora la innovación, la integridad y el compromiso con el bienestar de todos. Juntos, podemos construir un futuro donde cada terreno se convierta en un legado duradero y valioso.
          </p>
          <img src="https://via.placeholder.com/150" alt="Placeholder 2" className={styles['image-right']} />
        </div>
      </div>
    </div>
  );
}
