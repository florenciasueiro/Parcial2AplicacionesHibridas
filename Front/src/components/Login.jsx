
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useContactos from '../Service/APIlogin';
import LoginCSS from '../css/Login.module.css';
// import LoginCSS from '../css/LoginBlack.module.css'
import { SpinnerCircular } from 'spinners-react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SingIn() {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;

  const location = useLocation();
  const isShopPage = location.pathname === '/shop';


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  
  const contactos = useContactos();
  // if(usuario!=null || !usuario==[]){
  // console.log(usuario[0].name)}


  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const response = await contactos(email, password);
    setIsLoading(false);

    if (!response) {
      setShowError(true);
    };
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

  // const handleLogout = () => {
  //   sessionStorage.clear();
  //   window.location.reload();
  // }
  if (!usuario) {
  return (

    <div className={`${LoginCSS.loginContainer}  ${isShopPage ? LoginCSS.loginContainer : ''}`}>


{/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box> */}



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
          {/* <div>
            <label className={`${LoginCSS.checkbox} ${isShopPage ? LoginCSS.checkbox : ''}`}>
              <input className={`${LoginCSS.inputcb} ${isShopPage ? LoginCSS.inputcb : ''}`} type="checkbox" value="remember" />
              Recuérdame
            </label>
          </div> */}
          <button className={`${LoginCSS.btn} ${isShopPage ? LoginCSS.btn : ''}`} type="submit">INICIAR SESIÓN</button>
          {/* <div className={`${LoginCSS.centeredContainer} ${isShopPage ? LoginCSS.centeredContainer : ''}`}>
            <Link className={`${LoginCSS.link} ${isShopPage ? LoginCSS.link : ''}`} align="center" href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
          </div> */}
          <div className={`${LoginCSS.centeredContainer} ${isShopPage ? LoginCSS.centeredContainer : ''}`}>
            <p className={`${LoginCSS.p} ${isShopPage ? LoginCSS.p : ''}`}>¿No tienes cuenta? ‎</p>
            <Link className={`${LoginCSS.linkR} ${isShopPage ? LoginCSS.linkR : ''}`}  to="/registro">
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    );
} else {
  return (
    <div className={`${LoginCSS.loginContainer} ${isShopPage ? LoginCSS.loginContainer : ''}`}>
      {/* <form onSubmit={handleLogout}>
        <div className={`${LoginCSS.loginContainer}`}>
          <Link className={`${LoginCSS.link}`} to="/profile">
            Mi Perfil
          </Link>

          <button className={`${LoginCSS.link}`} type="button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </form> */}
    </div>
  );
}
}