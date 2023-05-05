import React from 'react';
import PreguntaFrecuente from './PreguntaFrecuente';

const PreguntasFrecuentes = () => {
  return (
    <div>
      <PreguntaFrecuente 
        pregunta="¿Cómo puedo realizar una reserva online?" 
        respuesta="Accediendo al siguiente link, vas a poder realizar el paso a paso para realizar una reserva online: (link de inicio de reserva)" />
      <PreguntaFrecuente pregunta="Además de la web, ¿Existe otro método para poder comprar?" respuesta="Si. Podes hacerlo con el asesoramiento de uno de nuestros especialistas, haciendo click en el siguiente link (link de inicio de conversación)" />
      <PreguntaFrecuente pregunta="¿En qué plazo de tiempo se confirma la compra?" respuesta="Una vez que realices la reserva online, se inician los trámites. Entre 5 y 7 días hábiles se aprueban los informes solicitados y se confirma la compra. Igualmente, desde la reserva online, ya tenes tu lote reservado para vos" />
      <PreguntaFrecuente pregunta="¿Cuáles son los métodos de pago para poder comprar?" respuesta="Podes comprar por medio de tarjeta de crédito/débito, transferencia bancaria, o depósito bancario" />
      <PreguntaFrecuente pregunta="¿Cuál es el monto para reservar?" respuesta="Al momento de la reserva deberás abonar el 5% del valor del lote" />
      <PreguntaFrecuente pregunta="¿Cuáles son los pasos para realizar una compra?" respuesta="En el siguiente link vas a encontrar el proceso paso a paso para realizar una compra segura" />
    </div>
  );
};

export default PreguntasFrecuentes;
