import React, {useState} from 'react';
import { BackgroundRegistro } from  '../components/Background';
import useRegistro from '../Service/APIregister'
import RegistroCSS from '../css/Registro.module.css'
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

function Perfil() {
  //hooks
const [show201, setShow201]= useState(false);
const [show400, setShow400]= useState(false);
const [show409, setShow409]= useState(false);
const [show500, setShow500]= useState(false);

const registro = useRegistro();
//get user from memory
const usuarioJson = sessionStorage.getItem('user');
const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;


//handlers
const handleSubmit = async (event) => {
event.preventDefault();
const data = new FormData(event.currentTarget);


//todo


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
<div className={RegistroCSS.body}>
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
            Mi perfil
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
              
              fullWidth
              id="name"
              label= {usuario.name}
              name="name"
              autoComplete="off"
              autoFocus
              size='small'
            />
            <TextField 
            InputLabelProps={{
              style: { color: 'black'}, 
            }}
            InputProps={{
              style: { color: 'black'},
              classes: { notchedOutline: LoginCSS.fieldset },
              autoComplete: "new-email"
            }}
              className={LoginCSS.fieldset}
              margin="normal"
              // required
              fullWidth
              id="email"
              label={usuario.email}
              name="email"
              // autoComplete="new-email"
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
              // required
              fullWidth
              name="tel"
              label={usuario.mobile}
              type="tel"
              id="tel"
              // autoComplete="tel"
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
              // required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              // autoComplete="current-password"
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
              Aplicar cambios
            </Button>
            <Grid container display={'flex'} 
              justifyContent="center">
              <Grid item center style={{color: "black"}}>
              ¿deseas eliminar tu cuenta? ‎ 
                <Link style={{color: "#0645AD"}}  to="/registro">
                  {"Inicia Sesion"}
                </Link> 
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default Perfil;
//xd