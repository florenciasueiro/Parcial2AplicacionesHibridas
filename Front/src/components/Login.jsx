import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLogin from '../Service/APIlogin';
import LoginCSS from '../css/Login.module.css';
import { SpinnerCircular } from 'spinners-react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SignIn() {
  const navigate = useNavigate();
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = useLogin();

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    const response = await login(email, password);

    setIsLoading(false);

    if (!response) {
      setShowError(true);
    } else {
      sessionStorage.setItem('user', JSON.stringify(response));
      navigate('/profile');
    }
  };

  const renderSpinner = () => {
    if (isLoading) {
      return (
        <div className={LoginCSS["spinner-wrapper"]}>
          <SpinnerCircular color='#003de3' />
        </div>
      );
    }
    return null;
  };

  if (!usuario) {
    return (
      <div className={`${LoginCSS.loginContainer}  ${isShopPage ? LoginCSS.loginContainer : ''}`}>
        {renderSpinner()}
        <h2 className={`${LoginCSS.h1} ${isShopPage ? LoginCSS.h1 : ''}`}>Iniciar Sesión</h2>

        {showError && <p className={LoginCSS.error}>Email o contraseña inválidos.</p>}

        <form className={`${LoginCSS.form} ${isShopPage ? LoginCSS.form : ''}`} onSubmit={handleSubmit}>
          <div className={`${LoginCSS.inputContainer} ${isShopPage ? LoginCSS.inputContainer : ''}`}>
            <input
              className={`${LoginCSS.input} ${isShopPage ? LoginCSS.input : ''}`}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className={`${LoginCSS.span} ${isShopPage ? LoginCSS.span : ''}`}>E-mail *</span>
          </div>
          <div className={`${LoginCSS.inputContainer} ${isShopPage ? LoginCSS.inputContainer : ''}`}>
            <input
              className={`${LoginCSS.input} ${isShopPage ? LoginCSS.input : ''}`}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={`${LoginCSS.span} ${isShopPage ? LoginCSS.span : ''}`}>Password *</span>
          </div>
          <button className={`${LoginCSS.btn} ${isShopPage ? LoginCSS.btn : ''}`} type="submit">INICIAR SESIÓN</button>
          <div className={`${LoginCSS.centeredContainer} ${isShopPage ? LoginCSS.centeredContainer : ''}`}>
            <p className={`${LoginCSS.p} ${isShopPage ? LoginCSS.p : ''}`}>¿No tienes cuenta? ‎</p>
            <Link className={`${LoginCSS.linkR} ${isShopPage ? LoginCSS.linkR : ''}`} to="/registro">
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className={`${LoginCSS.loginContainer} ${isShopPage ? LoginCSS.loginContainer : ''}`}>
        {/* Puedes agregar aquí el código para mostrar el perfil o cerrar sesión */}
      </div>
    );
  }
}
