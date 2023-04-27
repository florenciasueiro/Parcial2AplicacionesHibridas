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

import useContactos from '../Service/APIlogin'


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

export default function SignIn({Contactos}) {
  
  const usuarioJson = sessionStorage.getItem('user');
  const usuario = usuarioJson ? JSON.parse(usuarioJson) : null;


 

  // if(usuario!=null || !usuario==[]){
  // console.log(usuario[0].name)}


  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError]= useState(false);
  const contactos = useContactos();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    contactos(email, password);
    
    if(!usuario || Object.keys(usuario).length===0){
      setTimeout(() => {
        setShowError(true);
      }, 1000);
      
    }

    
    // window.location.reload();
  };


    const handleLogout = () => {
      sessionStorage.clear();
      window.location.reload();
  }
if(!usuario) {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" style={{color: "black"}}>
              Inicia Sesión
            </Typography>
            {showError && <p>Email o contraseña inválidos.</p>}
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                size='small'
            />
            <div className={LoginCSS.centeredContainer}>
              <FormControlLabel style={{color: "black"}}
                control={<Checkbox value="remember"/>}
                label="Recuerdame"
              />
            </div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                >
                
  
                Iniciar Sesión
                
              </Button>
              <Grid container display={'flex'}
            
              justifyContent="center">
                <Grid item xs justifyContent="center" display={'flex'} alignItems="center">
                  <Link style={{padding: '10px', color: "#0645AD"}} align="center" href="#" variant="body2">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item center style={{color: "black"}}>
                ¿No tienes cuenta? ‎ 
                  <Link style={{color: "#0645AD"}}  to="/registro">
                    Registrate
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }


else{
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Tu cuenta
          </Typography>
          <Box component="form" onSubmit={handleLogout} noValidate sx={{ mt: 1 }}>
   
            <h5>nombre: {usuario.name}</h5>
            <h5>email: {usuario.email}</h5>
            <h5>Telefono: {usuario.mobile}</h5>
            <h5>id: {usuario.id}</h5>
            <h5>productos:</h5>
            {usuario.productos.length > 0 ? (usuario.productos.map((producto, index) => (<h5 key={index}>-{producto}</h5>))) : (<h5>aún no tienes productos</h5>)}
            
            <Link style={{color: "#0645AD"}}  to="/profile">
                    {"Mi Perfil\n"}
                  </Link>
            <br/>      
            <Link  style={{color: "#0645AD"}}  to="/shop">
                    {"Mis Productos"}
                  </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleLogout()}>

              Cerrar Sesión
              
            </Button>
            {/* <Grid container
            justifyContent="center">
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
              ¿No tienes cuenta? 
                <Link to="/registrar">
                  {"Registrate"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );

}
}

