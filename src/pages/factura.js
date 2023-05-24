import { useState, useEffect } from 'react';
import FeedbackCSS from '../css/Feedback.module.css';
import { BackgroundQuarters } from '../components/Background';
import PDFViewer from '../components/PDFViewer';

function FacturaPage() {

  const usuarioJson = sessionStorage.getItem('user');
  const compraJson = sessionStorage.getItem('compra');

  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const compra = compraJson ? JSON.parse(compraJson) : null;

  const urlParams = new URLSearchParams(window.location.search);
  const id = Object.fromEntries(urlParams).id;
  console.log(Object.fromEntries(urlParams))
  let message = '';




  return (
    <PDFViewer id={id}/>
  );
}

export default FacturaPage;
