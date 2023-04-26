import React, { useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LoginCSS from '../css/Login.module.css';
import useRegistro from '../Service/APIregister'

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },

  },
  typography: {
    fontFamily: [
      '"Segoe UI"'
    ].join(','),
    },
  });
 
  
export default function Register({Registro}) {
const [show201, setShow201]= useState(false);
const [show400, setShow400]= useState(false);
const [show409, setShow409]= useState(false);
const [show500, setShow500]= useState(false);

const registro = useRegistro();

const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const usuario={
      nombre : data.get('name'),
      email: data.get('email'),
      mobile: data.get('tel'),
      password: data.get('password'),
    }
    console.log(usuario);

    const res= registro(usuario, ()=> {console.log("usuario enviado a api.jsx");});
    
    console.log(await res)
    if(await res === 201){
      setShow201(true);
    }
    else if(await res === 400){
      setShow400(true);
    }
    else if(await res === 409){
      setShow409(true);
    }
    else if(await res === 500){
      setShow500(true);
    }
  };

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" style={{color: "black"}}>
            Registrar
          </Typography>
          {show201 && <p className={LoginCSS.statusMessages}>Contacto creado con exito👌👍.</p>}
          {show400 && <p className={LoginCSS.statusMessages}>Faltan datos requeridos.</p>}
          {show409 && <p className={LoginCSS.statusMessages}>Este usuario ya esta registrado.</p>}
          {show500 && <p className={LoginCSS.statusMessages}>Error Desconocido, reintentar.</p>}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField 
            InputLabelProps={{
              style: { color: 'black'}, 
            }}
            InputProps={{
              style: { color: 'black'},
              classes: { notchedOutline: LoginCSS.fieldset }
            }}
              className={LoginCSS.fieldset}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre y Apellido"
              name="name"
              autoComplete="name"
              autoFocus
              size='small'
            />
            <TextField 
            InputLabelProps={{
              style: { color: 'black'}, 
            }}
            InputProps={{
              style: { color: 'black'},
              classes: { notchedOutline: LoginCSS.fieldset }
            }}
              className={LoginCSS.fieldset}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              size='small'
            />
            <TextField
            InputLabelProps={{
              style: { color: 'black'},
            }}
            InputProps={{
              style: { color: 'black'},
              classes: { notchedOutline: LoginCSS.fieldset }
            }}
              margin="normal"
              required
              fullWidth
              name="tel"
              label="Telefono"
              type="tel"
              id="tel"
              autoComplete="tel"
              size='small'
            />
            <TextField
            InputLabelProps={{
              style: { color: 'black'},
            }}
            InputProps={{
              style: { color: 'black'},
              classes: { notchedOutline: LoginCSS.fieldset }
            }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              size='small'
            />
            <div className={LoginCSS.centeredContainer}>
              <FormControlLabel style={{color: "black"}}
                control={<Checkbox value="remember"/>}
                label="Acepto los terminos y condiciones"
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
            >
              Registrar
            </Button>
            <Grid container display={'flex'} 
              justifyContent="center">
              <Grid item center style={{color: "black"}}>
              ¿Ya tienes cuenta? ‎ 
                <Link style={{color: "#0645AD"}}  to="/registro">
                  {"Inicia Sesion"}
                </Link> 
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}