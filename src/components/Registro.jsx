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
import { purple } from '@mui/material/colors';
import RegistroCSS from '../css/Registro.module.css';
import { color } from '@mui/system';


const theme = createTheme({
  palette: {
    primary: {
      main: "#f9a825",
    },
    secondary: {
      main: '#f44336',
    },
  },
});;

export default function Registro() {
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
        <CssBaseline />
        <Box className={RegistroCSS.box}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Registrate
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              InputLabelProps={{
                style: { color: 'white'},
              }}
              InputProps={{
                style: { color: 'white'},
                classes: { notchedOutline: RegistroCSS.fieldset }
              }}
                className={RegistroCSS.fieldset}
                margin='normal'
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nombre y Apellido"
                autoFocus
                size='small'
              />
            <TextField 
            InputLabelProps={{
              style: { color: 'white'},
            }}
            InputProps={{
              style: { color: 'white'},
              classes: { notchedOutline: RegistroCSS.fieldset }
            }}
              className={RegistroCSS.fieldset}
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
              style: { color: 'white'},
            }}
            InputProps={{
              style: { color: 'white'},
              classes: { notchedOutline: RegistroCSS.fieldset }
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
            <div className={RegistroCSS.centeredContainer}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" style={{color: '#d5880c'}}/>}
                label="Acepto los terminos y condciones"
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
              <Grid item center>
              ¿Ya tienes cuenta? ‎ 
                <Link style={{color: "#d5880c"}}  to="/">
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