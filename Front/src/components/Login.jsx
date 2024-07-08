import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useLogin from '../Service/APIlogin';
import LoginCSS from '../css/Login.module.css';
import { SpinnerCircular } from 'spinners-react';

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
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await login(email, password);

      if (!response) {
        setShowError(true);
        setIsLoading(false);
      } else {
        sessionStorage.setItem('user', JSON.stringify(response));
        navigate('/profile');
      }
    } catch (error) {
      setShowError(true);
      setIsLoading(false);
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
      <div className={`${LoginCSS.loginContainer} ${isShopPage ? LoginCSS.shopPage : ''}`}>
        {renderSpinner()}
        <h2 className={`${LoginCSS.h1} ${isShopPage ? LoginCSS.shopPage : ''}`}>Iniciar Sesión</h2>

        {showError && <p className={LoginCSS.error}>Email o contraseña inválidos.</p>}

        <form className={`${LoginCSS.form} ${isShopPage ? LoginCSS.shopPage : ''}`} onSubmit={handleSubmit}>
          <div className={`${LoginCSS.inputContainer} ${isShopPage ? LoginCSS.shopPage : ''}`}>
            <input
              className={`${LoginCSS.input} ${isShopPage ? LoginCSS.shopPage : ''}`}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className={`${LoginCSS.span} ${isShopPage ? LoginCSS.shopPage : ''}`}>E-mail *</span>
          </div>
          <div className={`${LoginCSS.inputContainer} ${isShopPage ? LoginCSS.shopPage : ''}`}>
            <input
              className={`${LoginCSS.input} ${isShopPage ? LoginCSS.shopPage : ''}`}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={`${LoginCSS.span} ${isShopPage ? LoginCSS.shopPage : ''}`}>Password *</span>
          </div>
          <button className={`${LoginCSS.btn} ${isShopPage ? LoginCSS.shopPage : ''}`} type="submit">INICIAR SESIÓN</button>
          <div className={`${LoginCSS.centeredContainer} ${isShopPage ? LoginCSS.shopPage : ''}`}>
            <p className={`${LoginCSS.p} ${isShopPage ? LoginCSS.shopPage : ''}`}>¿No tienes cuenta? ‎</p>
            <Link className={`${LoginCSS.linkR} ${isShopPage ? LoginCSS.shopPage : ''}`} to="/registro">
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className={`${LoginCSS.loginContainer} ${isShopPage ? LoginCSS.shopPage : ''}`}>
        {/* Puedes agregar aquí el código para mostrar el perfil o cerrar sesión */}
      </div>
    );
  }
}
