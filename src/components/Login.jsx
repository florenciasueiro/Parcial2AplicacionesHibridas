import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useContactos from '../Service/APIlogin'
import LoginCSS from '../css/Login.module.css';

export default function SignIn() {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const contactos = useContactos();
  const [emailLabel, setEmailLabel] = useState('');
  const [passwordLabel, setPasswordLabel] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    contactos(email, password);

    if (!usuario || Object.keys(usuario).length === 0) {
      setTimeout(() => {
        setShowError(true);
      }, 1000);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  }

  if (!usuario) {
    return (
      <div className={LoginCSS.loginContainer}>
        <h1 className={LoginCSS.h1}>Inicia Sesión</h1>
        {showError && <p>Email o contraseña inválidos.</p>}
        <form onSubmit={handleSubmit}>
          <div className={LoginCSS.inputContainer}>
            <label className={LoginCSS.label} htmlFor="email">Email Address:</label>
            <input className={LoginCSS.input}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={LoginCSS.inputContainer}>
            <label className={LoginCSS.label} htmlFor="password">Password:</label>
            <input className={LoginCSS.input}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={LoginCSS.centeredContainer}>
            <label className={LoginCSS.checkbox}>
              <input className={LoginCSS.inputcb} type="checkbox" value="remember" />
              Recuérdame
            </label>
          </div>
          <button type="submit">Iniciar Sesión</button>
          <div className={LoginCSS.centeredContainer}>
            <Link style={{ padding: '10px', color: '#0645AD' }} align="center" href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className={LoginCSS.centeredContainer}>
            <p style={{ color: 'black' }}>¿No tienes cuenta?‎</p>
            <Link style={{ color: '#0645AD' }} to="/registro">
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className={LoginCSS.loginContainer}>
        <h1>Tu cuenta</h1>
        <form onSubmit={handleLogout}>
          <h5>Nombre: {usuario.name}</h5>
          <h5>Email: {usuario.email}</h5>
          <h5>Teléfono: {usuario.mobile}</h5>
          <h5>ID: {usuario.id}</h5>
          <h5>Productos:</h5>
          {usuario.productos.length > 0 ? (
            usuario.productos.map((producto, index) => <h5 key={index}>-{producto}</h5>)
          ) : (
            <h5>No tienes productos</h5>
          )}
        <div>
          <a href="/profile" style={{ color: "#0645AD" }}>
            Mi Perfil
          </a>
          <br />
          <a href="/shop" style={{ color: "#0645AD" }}>
            Mis Productos
          </a>
          <button type="submit" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
}

