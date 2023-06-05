import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useContactos from '../Service/APIlogin'
import LoginCSS from '../css/Login.module.css';

export default function SignIn() {
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;


 

  // if(usuario!=null || !usuario==[]){
  // console.log(usuario[0].name)}


  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError]= useState(false);
  const contactos = useContactos();
  // const [emailLabel, setEmailLabel] = useState('');
  // const [passwordLabel, setPasswordLabel] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await contactos(email, password);

    if (!response.success) {
      setShowError(true);
  };
}


  // const handleLogout = () => {
  //   sessionStorage.clear();
  //   window.location.reload();
  // }

  if (!usuario) {
    return (
      <div className={LoginCSS.loginContainer}>
        <h1 className={LoginCSS.h1}>Iniciar Sesión</h1>
        {showError && <p>Email o contraseña inválidos.</p>}
        <form className={LoginCSS.form} onSubmit={handleSubmit}>
          <div className={LoginCSS.inputContainer}>
            
            <input className={LoginCSS.input}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className={LoginCSS.span}>E-mail *</span>
          </div>
          <div className={LoginCSS.inputContainer}>
            <input className={LoginCSS.input}
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className={LoginCSS.span}>Password *</span>
          </div>
          <div>
            <label className={LoginCSS.checkbox}>
              <input className={LoginCSS.inputcb} type="checkbox" value="remember" />
              Recuérdame
            </label>
          </div>
          <button className={LoginCSS.btn} type="submit">INICIAR SESIÓN</button>
          <div className={LoginCSS.centeredContainer}>
            <Link style={{ padding: '10px', color: '#0645AD' }} align="center" href="#" variant="body2">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className={LoginCSS.centeredContainer}>
            <p style={{ color: 'black' }}>¿No tienes cuenta? ‎</p>
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
        {/* <form onSubmit={handleLogout}>
        <div className={LoginCSS.loginContainer}>
                <Link className={LoginCSS.link} to="/profile">
                  Mi Perfil
                </Link>

                <button className={LoginCSS.link} type="button" onClick={handleLogout}>
                  Cerrar Sesión
                </button>
        </div>
      </form> */}
    </div>
  );
}
}

