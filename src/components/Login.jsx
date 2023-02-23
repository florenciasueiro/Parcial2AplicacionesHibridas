import React from 'react'
import LoginCSS from '../css/Login.module.css';

function Login() {
  return (
    <div className={LoginCSS.container}>
      <form className={LoginCSS.form}>
            <div class="mail">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="contraseña">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="boton">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
      </form>
    </div>
  )
}

export default Login
