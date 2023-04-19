import * as React from 'react';
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

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name : data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
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
              id="nombre"
              label="Nombre y Apellido"
              name="nombre"
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